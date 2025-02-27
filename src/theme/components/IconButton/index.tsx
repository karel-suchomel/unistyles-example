import { StyleProp, ViewStyle, type PressableProps } from 'react-native'

import { styles } from './styles'
import { ButtonWrapper } from '../ButtonWrapper'

import { Icon } from '~/features/icons/components/Icon'
import { IconName } from '~/features/icons/types'

type Props = {
  name: IconName
  style?: StyleProp<ViewStyle>
} & PressableProps

export default function IconButton({ name, style, ...props }: Props) {
  return (
    <ButtonWrapper style={[styles.container, style]} {...props}>
      <Icon name={name} color="textPrimaryInverted" />
    </ButtonWrapper>
  )
}
