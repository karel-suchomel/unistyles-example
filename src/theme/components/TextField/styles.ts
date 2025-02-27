import { StyleSheet, UnistylesVariants } from 'react-native-unistyles'

export const styles = StyleSheet.create((theme) => ({
  input: {
    fontFamily: theme.fonts.primary,
    fontSize: 14,
    lineHeight: 16,
    borderWidth: 1,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing._2md,
    color: theme.colors.textPrimary,
    borderColor: theme.colors.borderPrimary,
    variants: {
      hasError: {
        true: {
          borderColor: theme.colors.error,
        },
      },
    },
  },
  text: {
    color: theme.colors.textPrimary,
    variants: {
      hasError: {
        true: {
          color: theme.colors.error,
        },
      },
    },
  },
  leftBox: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  rightBox: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  container: {
    flex: 1,
    gap: theme.spacing.sm,
  },
}))

export type StyledInputProps = UnistylesVariants<typeof styles>
