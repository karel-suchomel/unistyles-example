import { View } from 'react-native'

import { Layout } from '~/theme/components/Layout'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'

export function Tasks() {
  return (
    <Layout>
      <View style={[tokens.flex_1, tokens.align_center, tokens.justify_center, tokens.gap('lg')]}>
        <Text>Tasks</Text>
        <View style={[tokens.w(50), tokens.h(50), tokens.bg('fillPrimary')]} />
      </View>
    </Layout>
  )
}
