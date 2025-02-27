import { StyleSheet } from 'react-native-unistyles'

export const styles = StyleSheet.create((theme) => ({
  container: {
    width: '100%',
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.borderPrimary,
    backgroundColor: theme.colors.backgroundSecondary,
  },
}))
