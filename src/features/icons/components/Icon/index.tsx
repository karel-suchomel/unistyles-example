import { SvgProps } from 'react-native-svg'
import { withUnistyles } from 'react-native-unistyles'

import { ICONS } from './icons'
import { type IconName } from '../../types'

import { Color } from '~/theme/types'

type IconComponentProps = {
  name: IconName
} & SvgProps

type Props = {
  size?: number
  color?: keyof Color
} & IconComponentProps

const UniIcon = withUnistyles(function IconComponent({ name, ...props }: IconComponentProps) {
  const Component = ICONS[name]
  if (!Component) {
    return null
  }
  return <Component {...props} />
})

export const Icon = ({ color, size = 24, ...props }: Props) => {
  return (
    <UniIcon
      width={size}
      height={size}
      uniProps={(theme) => ({
        color: color ? theme.colors[color] : theme.colors.iconPrimary,
      })}
      {...props}
    />
  )
}
