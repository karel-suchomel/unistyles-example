import { View } from 'react-native'

import { styles } from './styles'

import { ButtonWrapper } from '~/theme/components/ButtonWrapper'
import { Text } from '~/theme/components/Text'

type Props = {
  activeTabId: number
  id: number
  label: string
  onPress: () => void
}

export function TimeSwitcherButton({ onPress, activeTabId, id, label }: Props) {
  const isActive = activeTabId === id
  return (
    <ButtonWrapper onPress={onPress}>
      <View style={styles.button(isActive)}>
        <Text
          type="c1"
          lineHeight="normal"
          color={isActive ? 'textPrimaryInverted' : 'textPrimary'}
        >
          {label}
        </Text>
      </View>
    </ButtonWrapper>
  )
}
