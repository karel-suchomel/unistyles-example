import { StyleSheet, UnistylesVariants } from 'react-native-unistyles'

export const styles = StyleSheet.create((theme) => ({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xl,
    borderWidth: 1,
    borderRadius: theme.borderRadius.md,
    variants: {
      type: {
        primary: {
          backgroundColor: theme.colors.fillPrimary,
          borderColor: theme.colors.fillPrimary,
        },
        secondary: {
          backgroundColor: theme.colors.transparent,
          borderColor: theme.colors.fillPrimary,
        },
        disabled: {
          backgroundColor: theme.colors.fillPrimaryDisabled,
          borderColor: theme.colors.fillPrimaryDisabled,
        },
      },
      size: {
        sm: {
          paddingHorizontal: theme.spacing.xs,
          paddingVertical: theme.spacing.md,
          borderRadius: theme.borderRadius.sm,
        },
        md: {
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.lg,
        },
      },
    },
  },
  text: {
    color: theme.colors.textPrimaryInverted,
    variants: {
      type: {
        secondary: {
          color: theme.colors.textPrimary,
        },
        disabled: {
          color: theme.colors.textDisabled,
        },
      },
      size: {
        sm: {},
        md: {},
      },
    },
  },
}))

export type StyledButtonProps = UnistylesVariants<typeof styles>
