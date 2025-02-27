import { DrawerActions } from '@react-navigation/native'
import { useNavigation } from 'expo-router'

import { useAuth } from '~/features/auth/provider'
import { Avatar } from '~/features/dashboard/components/Avatar'
import { ButtonWrapper } from '~/theme/components/ButtonWrapper'

export function DrawerTrigger() {
  const { user } = useAuth()
  const navigation = useNavigation()

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer)
  }

  return (
    <ButtonWrapper onPress={openDrawer}>
      <Avatar source={user?.avatar} />
    </ButtonWrapper>
  )
}
