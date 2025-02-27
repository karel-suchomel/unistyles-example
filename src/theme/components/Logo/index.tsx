import LogoSVG from 'assets/icons/logo.svg'
import { SvgProps } from 'react-native-svg'
import { withUnistyles } from 'react-native-unistyles'

import { StyledLogoProps, styles } from './styles'

type Props = StyledLogoProps & SvgProps

function LogoComponent({ size, ...rest }: Props) {
  styles.useVariants({ size })

  return <LogoSVG width={styles.logo.width} height={styles.logo.height} {...rest} />
}

export const Logo = withUnistyles(LogoComponent, (theme) => ({
  stroke: theme.colors.textPrimary,
}))
