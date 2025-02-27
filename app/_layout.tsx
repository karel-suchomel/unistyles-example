import { Stack } from 'expo-router'
import { useUnistyles } from 'react-native-unistyles'

import { BackButton } from '~/features/navigation/components/BackButton'
import { Header } from '~/features/navigation/components/Header'
import { Provider } from '~/provider'

const RootStack = () => {
  const { theme } = useUnistyles()
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.backgroundPrimary,
        },
      }}
    >
      <Stack.Screen name="(drawer)" />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.backgroundPrimary,
          },
          header: Header,
          headerLeft: () => <BackButton style={{ backgroundColor: theme.colors.fillPrimary }} />,
          presentation: 'fullScreenModal',
        }}
      />
    </Stack>
  )
}

export default function Root() {
  return (
    <Provider>
      <RootStack />
    </Provider>
  )
}
