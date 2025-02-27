import { StyleSheet } from 'react-native-unistyles'

export const styles = StyleSheet.create((theme) => ({
  container: {
    width: '100%',
    height: 8,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.fillSecondary,
  },
  bar: {
    height: '100%',
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.contrastPrimary,
  },
}))
