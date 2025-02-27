import { Stack } from 'expo-router'
import { StyleSheet, useUnistyles } from 'react-native-unistyles'

import { Header } from '~/features/navigation/components/Header'

export default function AuthLayout() {
  const { theme } = useUnistyles()
  return (
    <Stack
      screenOptions={{
        contentStyle: styles.container,
        header: Header,
        headerStyle: { backgroundColor: theme.colors.backgroundPrimary },
        headerTintColor: theme.colors.fillPrimary,
      }}
    >
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="log-in" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="reset-password" />
    </Stack>
  )
}

const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
  },
}))
