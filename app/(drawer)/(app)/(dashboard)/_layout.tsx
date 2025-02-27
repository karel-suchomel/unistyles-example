import { Stack } from 'expo-router'
import { useUnistyles } from 'react-native-unistyles'

import { AddButton } from '~/components/AddButton'
import { AvatarGroup } from '~/features/dashboard/components/AvatarGroup'
import { Header } from '~/features/navigation/components/Header'

export default function DashboardLayout() {
  const { theme } = useUnistyles()
  return (
    <Stack
      screenOptions={{
        header: Header,
        headerLeft: AvatarGroup,
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
