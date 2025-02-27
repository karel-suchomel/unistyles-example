import {
  Canvas,
  Circle,
  dist,
  Image,
  ImageShader,
  makeImageFromView,
  mix,
  SkImage,
  vec,
} from '@shopify/react-native-skia'
import { setStatusBarStyle } from 'expo-status-bar'
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'
import { UnistylesRuntime } from 'react-native-unistyles'

import { toggleTheme } from '../utils'

import { commonStyles } from '~/styles/commonStyles'

const wait = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

type ColorSchemeContextType = {
  toggle: (x: number, y: number) => Promise<void>
  isActive: boolean
}

const ColorSchemeContext = createContext<ColorSchemeContextType | null>(null)

const { width, height } = Dimensions.get('screen')
const corners = [vec(0, 0), vec(width, 0), vec(width, height), vec(0, height)]

export function DarkModeTransitionProvider({ children }: PropsWithChildren) {
  const circle = useSharedValue({ x: 0, y: 0, r: 0 })
  const transition = useSharedValue(0)
  const ref = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const [overlay1, setOverlay1] = useState<SkImage | null>(null)
  const [overlay2, setOverlay2] = useState<SkImage | null>(null)
  const radius = useDerivedValue(() => {
    return mix(transition.value, 0, circle.value.r)
  })

  const toggle = useCallback(
    async (x: number, y: number) => {
      const newColorScheme = UnistylesRuntime.themeName === 'light' ? 'dark' : 'light'
      setStatusBarStyle(newColorScheme)
      setIsActive(true)
      // 0. Define the circle and its maximum radius
      const radius = Math.max(...corners.map((corner) => dist(corner, { x, y })))
      circle.value = { x, y, r: radius }
      // 1. Take the screenshot of the current mode
      const image1 = await makeImageFromView(ref)
      setOverlay1(image1)
      await wait(16)
      // 3. Switch to dark mode
      toggleTheme()
      await wait(16)
      // 5. Take the screenshot of the new mode
      const image2 = await makeImageFromView(ref)
      setOverlay2(image2)
      // 6. Transition the circle overlay
      transition.value = 0
      transition.value = withTiming(1, { duration: 500 })
      await wait(500)
      // 7. Reset the state
      setIsActive(false)
      setOverlay1(null)
      setOverlay2(null)
      setStatusBarStyle(newColorScheme === 'light' ? 'dark' : 'light')
    },
    [circle, transition],
  )

  const values = useMemo(
    () => ({
      isActive,
      toggle,
    }),
    [isActive, toggle],
  )

  return (
    <View style={commonStyles.f1}>
      <View ref={ref} collapsable={false} style={commonStyles.f1}>
        <ColorSchemeContext.Provider value={values}>{children}</ColorSchemeContext.Provider>
      </View>
      <Canvas style={StyleSheet.absoluteFill} pointerEvents="none">
        <Image image={overlay1} x={0} y={0} width={width} height={height} />
        {overlay2 && (
          <Circle c={circle} r={radius}>
            <ImageShader image={overlay2} x={0} y={0} width={width} height={height} fit="cover" />
          </Circle>
        )}
      </Canvas>
    </View>
  )
}

export function useDarkModeTransition() {
  const context = useContext(ColorSchemeContext)
  if (context === null) {
    throw new Error('useDarkModeTransition must be used within a DarkModeTransitionProvider')
  }
  return context
}
