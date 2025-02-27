import { Stack, useLocalSearchParams } from 'expo-router'
import { View } from 'react-native'

import { Layout } from '~/theme/components/Layout'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'
import { Color } from '~/theme/types'
import { isColorContrasting } from '~/theme/utils'

export function HabitDetail() {
  const { id, color } = useLocalSearchParams<{ id: string; color: keyof Color }>()
  const isContrasting = isColorContrasting(color)

  return (
    <>
      <Stack.Screen
        options={{
          contentStyle: {
            backgroundColor: tokens.bg(color).backgroundColor,
          },
          headerTintColor: isContrasting
            ? tokens.bg('textPrimaryInverted').backgroundColor
            : tokens.bg('fillPrimary').backgroundColor,
          headerStyle: {
            backgroundColor: tokens.bg(color).backgroundColor,
          },
        }}
      />
      <Layout>
        <View style={[tokens.flex_1, tokens.align_center, tokens.justify_center, tokens.gap('lg')]}>
          <Text>Detail {id}</Text>
        </View>
      </Layout>
    </>
  )
}
