import { type Edge } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native-unistyles'

export const styles = StyleSheet.create((theme, rt) => ({
  screen: {
    flex: 1,
  },
  edges: (value: Edge[]) => ({
    paddingTop: value.includes('top') ? rt.insets.top : 0,
    paddingBottom: value.includes('bottom') ? rt.insets.bottom : 0,
    paddingLeft: value.includes('left') ? rt.insets.left : 0,
    paddingRight: value.includes('right') ? rt.insets.right : 0,
  }),
}))
