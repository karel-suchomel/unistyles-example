import { StyleSheet, UnistylesVariants } from 'react-native-unistyles'

export const styles = StyleSheet.create((theme) => ({
  logo: {
    variants: {
      size: {
        sm: {
          width: 40,
          height: 20,
        },
        md: {
          width: 80,
          height: 40,
        },
        lg: {
          width: 135,
          height: 65,
        },
      },
    },
  },
}))

export type StyledLogoProps = UnistylesVariants<typeof styles>
