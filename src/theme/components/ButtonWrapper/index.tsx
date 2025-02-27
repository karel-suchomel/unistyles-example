import { forwardRef, type ReactNode } from 'react'
import { Pressable, type StyleProp, type ViewStyle, type PressableProps, View } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export type ButtonProps = {
  children: ReactNode
  isLoading?: boolean
  style?: StyleProp<ViewStyle>
  pressedOpacity?: number
} & PressableProps

export const ButtonWrapper = forwardRef<View, ButtonProps>(function ButtonWrapper(
  { isLoading, disabled, pressedOpacity = 0.7, style, children, ...rest },
  ref,
) {
  const opacity = useSharedValue(1)
  const animatedStyle = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
    }),
    [],
  )

  const onPressIn = () => {
    opacity.value = withTiming(pressedOpacity, {
      duration: 150,
      easing: Easing.out(Easing.ease),
    })
  }

  const onPressOut = () => {
    opacity.value = withTiming(1, {
      duration: 150,
      easing: Easing.out(Easing.ease),
    })
  }

  return (
    <Pressable
      ref={ref}
      disabled={disabled || isLoading}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...rest}
    >
      <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
    </Pressable>
  )
})
