import { StyleSheet } from 'react-native-unistyles'

export const styles = StyleSheet.create((theme) => ({
  container: {
    width: 28,
    aspectRatio: 1,
    padding: theme.spacing._3xs,
    borderRadius: theme.borderRadius._2sm,
    backgroundColor: theme.colors.fillPrimary,
  },
}))
