import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

import { Layout } from '~/theme/components/Layout'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'

export function Tasks() {
  return (
    <Layout>
      <View style={[tokens.flex_1, tokens.align_center, tokens.justify_center, tokens.gap('lg')]}>
        <Text>Tasks</Text>
        <View style={[tokens.w(50), tokens.h(50), styles.test]} />
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create((theme) => ({
  test: {
    backgroundColor: {
      xs: theme.colors.purple,
      md: theme.colors.red,
    },
  },
}))
