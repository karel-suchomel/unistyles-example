import { Stack } from 'expo-router'
import { useUnistyles } from 'react-native-unistyles'

import { AddButton } from '~/components/AddButton'
import { DrawerTrigger } from '~/features/navigation/components/DrawerTrigger'
import { Header } from '~/features/navigation/components/Header'

export default function DashboardLayout() {
  const { theme } = useUnistyles()
  return (
    <Stack
      screenOptions={{
        header: Header,
        headerLeft: DrawerTrigger,
        headerRight: AddButton,
        headerStyle: { backgroundColor: theme.colors.backgroundPrimary },
        headerTintColor: theme.colors.fillPrimary,
        contentStyle: { backgroundColor: theme.colors.backgroundPrimary },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  )
}
