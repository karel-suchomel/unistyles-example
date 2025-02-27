import { memo } from 'react'
import { type FlatListProps, FlatList } from 'react-native'
import { UnistylesRuntime, withUnistyles } from 'react-native-unistyles'

import { styles } from '../styles'

const UniFlatList = withUnistyles(FlatList<any>)

export const VirtualizedContent = memo(function Content({
  style,
  contentContainerStyle,
  ...props
}: FlatListProps<any>) {
  return (
    <UniFlatList
      automaticallyAdjustsScrollIndicatorInsets={false}
      indicatorStyle={UnistylesRuntime.themeName === 'dark' ? 'white' : 'black'}
      style={[styles.content, style]}
      contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
      {...props}
    />
  )
})
