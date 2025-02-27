import { StyleSheet } from 'react-native-unistyles'

export const styles = StyleSheet.create((theme, rt) => ({
  content: {
    width: '100%',
  },
  scrollContent: {
    paddingLeft: rt.insets.left,
    paddingRight: rt.insets.right,
    paddingBottom: theme.spacing._5xl,
  },
}))
