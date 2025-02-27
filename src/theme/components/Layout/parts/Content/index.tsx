import { memo } from 'react'
import { type ScrollViewProps, ScrollView } from 'react-native'
import { UnistylesRuntime, withUnistyles } from 'react-native-unistyles'

import { styles } from '../styles'

const UniScrollView = withUnistyles(ScrollView)

export const Content = memo(function Content({
  style,
  contentContainerStyle,
  ...props
}: ScrollViewProps) {
  return (
    <UniScrollView
      automaticallyAdjustsScrollIndicatorInsets={false}
      indicatorStyle={UnistylesRuntime.themeName === 'dark' ? 'white' : 'black'}
      style={[styles.content, style]}
      contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
      {...props}
    />
  )
})
