import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import { View } from 'react-native'

import { styles } from './styles'

import { Card } from '~/components/Card'
import { Avatar } from '~/features/dashboard/components/Avatar'
import { Icon } from '~/features/icons/components/Icon'
import { DarkModeToggle } from '~/theme/components/DarkModeToggle'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'

export function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
      style={styles.container}
      scrollEnabled={false}
      contentContainerStyle={styles.content}
      {...props}
    >
      <Card style={[tokens.mb('md')]}>
        <View style={[tokens.flex_row, tokens.flex_1, tokens.justify_between]}>
          <View style={[tokens.gap('sm')]}>
            <Avatar />
            <Text type="h5" weight="semibold" lineHeight="normal">
              Patrick Bateman
            </Text>
          </View>
          <DarkModeToggle />
        </View>
      </Card>
      <DrawerItem
        style={styles.item(false)}
        label={({ focused }) => (
          <Text
            type="p2"
            weight="semibold"
            lineHeight="normal"
            color={focused ? 'textPrimary' : 'textSecondary'}
          >
            Profile
          </Text>
        )}
        icon={({ focused }) => (
          <Icon name="profile" color={focused ? 'textPrimary' : 'textSecondary'} />
        )}
        onPress={() => {}}
      />
      <DrawerItem
        activeTintColor="white"
        style={styles.item(false)}
        label={({ focused }) => (
          <Text
            type="p2"
            weight="semibold"
            lineHeight="normal"
            color={focused ? 'textPrimary' : 'textSecondary'}
          >
            Other Route
          </Text>
        )}
        icon={({ focused }) => (
          <Icon name="plus" color={focused ? 'textPrimary' : 'textSecondary'} />
        )}
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  )
}
