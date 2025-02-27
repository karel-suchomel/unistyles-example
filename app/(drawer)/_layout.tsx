import { Drawer } from 'expo-router/drawer'
import { useUnistyles } from 'react-native-unistyles'

import { DrawerContent } from '~/features/navigation/components/DrawerContent'

export default function DrawerLayout() {
  const { theme } = useUnistyles()
  return (
    <Drawer
      drawerContent={DrawerContent}
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: theme.colors.backgroundPrimary,
        },
      }}
    />
  )
}
