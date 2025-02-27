import { Canvas, Circle, Group, Mask, SweepGradient, vec } from '@shopify/react-native-skia'
import { useEffect } from 'react'
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  useDerivedValue,
} from 'react-native-reanimated'

type Props = {
  variant?: 'light' | 'dark'
  size?: number
}

export function Spinner(props: Props) {
  const { variant = 'dark', size = 12 } = props

  const startPoint = size / 2
  const outerCircleRadius = size / 2
  const innerCircleRadius = size / 2 - size / 8

  const rotation = useSharedValue(0)

  const transform = useDerivedValue(() => {
    return [{ rotate: rotation.value }]
  })

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(2 * Math.PI, {
        duration: 1300,
        easing: Easing.linear,
      }),
      -1,
      false,
    )

    return () => {
      cancelAnimation(rotation)
    }
  }, [rotation])

  const gradientColors =
    variant === 'dark'
      ? ['rgba(20,21,22,0)', 'rgba(20,21,22,1)']
      : ['rgba(255,255,255,0)', 'rgba(255,255,255,1)']

  return (
    <Canvas style={[{ width: size, height: size }]}>
      <Mask
        mode="luminance"
        mask={
          <Group>
            <Circle cx={startPoint} cy={startPoint} r={outerCircleRadius} color="white" />
            <Circle cx={startPoint} cy={startPoint} r={innerCircleRadius} color="black" />
          </Group>
        }
      >
        <Circle
          cx={startPoint}
          cy={startPoint}
          r={outerCircleRadius}
          origin={{ x: startPoint, y: startPoint }}
          transform={transform}
        >
          <SweepGradient
            c={vec(startPoint, startPoint)}
            colors={gradientColors}
            start={0}
            end={360}
          />
        </Circle>
      </Mask>
    </Canvas>
  )
}
