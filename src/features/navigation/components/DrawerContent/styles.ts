import { StyleSheet } from 'react-native-unistyles'

export const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
  },
  content: {
    backgroundColor: theme.colors.backgroundSecondary,
    gap: theme.spacing.sm,
  },
  item: (active: boolean) => ({
    backgroundColor: active ? theme.colors.backgroundPrimary : 'transparent',
    borderRadius: theme.borderRadius.md,
  }),
}))
