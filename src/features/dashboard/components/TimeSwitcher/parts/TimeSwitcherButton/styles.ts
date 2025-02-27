import { StyleSheet } from 'react-native-unistyles'

export const styles = StyleSheet.create((theme) => ({
  button: (active) => ({
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing._2xs,
    borderRadius: theme.borderRadius._2sm,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: active ? theme.colors.fillPrimary : 'transparent',
  }),
}))
