import { memo } from 'react'
import { View, type ViewProps } from 'react-native'
import { type Edge } from 'react-native-safe-area-context'

import { styles } from './styles'

type Props = {
  edges?: Edge[]
} & ViewProps

export const Layout = memo(function Layout({ style, edges = [], ...props }: Props) {
  return <View style={[styles.screen, styles.edges(edges), style]} {...props} />
})
