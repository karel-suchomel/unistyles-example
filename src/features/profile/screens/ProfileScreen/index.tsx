import { View } from 'react-native'

import { useAuth } from '~/features/auth/provider'
import { Button } from '~/theme/components/Button'
import { Layout } from '~/theme/components/Layout'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'
import { toggleTheme } from '~/theme/utils'

export function Profile() {
  const { signOut } = useAuth()

  return (
    <Layout>
      <View style={[tokens.flex_1, tokens.align_center, tokens.justify_center, tokens.gap('lg')]}>
        <Text>Profile</Text>
        <Button onPress={toggleTheme}>Change Theme</Button>
        <Button
          onPress={async () => {
            await signOut()
          }}
        >
          Sign Out
        </Button>
      </View>
    </Layout>
  )
}
