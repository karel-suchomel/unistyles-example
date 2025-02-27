import { View } from 'react-native'

import { styles } from './styles'

import { useAuth } from '~/features/auth/provider'
import { DrawerTrigger } from '~/features/navigation/components/DrawerTrigger'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'
import { getTimeBasedGreeting } from '~/utils/date'

export function AvatarGroup() {
  const { user } = useAuth()

  return (
    <View style={styles.container}>
      <DrawerTrigger />
      <View style={[tokens.flex_1, tokens.gap('_3xs')]}>
        <Text type="c1" color="textSecondary" lineHeight="normal">
          {getTimeBasedGreeting()},
        </Text>
        <Text type="p2" weight="semibold" lineHeight="normal">
          {user?.name}
        </Text>
      </View>
    </View>
  )
}
