import { type ForwardedRef, forwardRef } from 'react'
import { Text as RNText, useWindowDimensions, type TextProps } from 'react-native'
import Animated from 'react-native-reanimated'

import { type StyledTextProps, styles } from './styles'
import { calculateLineHeight } from './utils'

import { type Color } from '~/theme/types'

type Props = {
  color?: keyof Color
} & TextProps &
  StyledTextProps

export const Text = forwardRef(function Text(
  {
    type = 'p1',
    weight = 'regular',
    fontStyle = 'normal',
    lineHeight = 'none',
    style,
    color,
    ...rest
  }: Props,
  ref: ForwardedRef<RNText>,
) {
  const { fontScale } = useWindowDimensions()
  styles.useVariants({
    type,
    weight,
    fontStyle,
    lineHeight,
  })

  const lineHeightValue = calculateLineHeight(styles.text, { fontScale })

  return (
    <RNText
      ref={ref}
      style={[styles.text, color && styles.color(color), style, { lineHeight: lineHeightValue }]}
      {...rest}
    />
  )
})

export const AnimatedText = Animated.createAnimatedComponent(Text)
