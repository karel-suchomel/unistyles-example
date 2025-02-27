import { type ReactNode } from 'react'
import { type PressableProps, type StyleProp, View, type ViewStyle } from 'react-native'

import { type StyledButtonProps, styles } from './styles'
import { ButtonWrapper } from '../ButtonWrapper'
import { Spinner } from '../Spinner'
import { Text } from '../Text'

import { tokens } from '~/theme/tokens'

type Props = {
  children: ReactNode
  isLoading?: boolean
  style?: StyleProp<ViewStyle>
  pressedOpacity?: number
} & PressableProps &
  StyledButtonProps

export function Button({
  type = 'primary',
  size = 'md',
  pressedOpacity = 0.6,
  children,
  isLoading,
  disabled,
  style,
  ...rest
}: Props) {
  styles.useVariants({
    type,
    size,
  })

  return (
    <ButtonWrapper isLoading={isLoading} disabled={disabled} style={styles.button} {...rest}>
      <View style={[tokens.flex_row, tokens.align_center, tokens.gap('sm')]}>
        {isLoading && <Spinner variant={type === 'primary' ? 'light' : 'dark'} />}
        {typeof children === 'string' ? (
          <Text type="p2" lineHeight="normal" style={styles.text}>
            {children}
          </Text>
        ) : (
          children
        )}
      </View>
    </ButtonWrapper>
  )
}
