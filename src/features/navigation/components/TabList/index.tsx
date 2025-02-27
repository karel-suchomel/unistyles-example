import { TabTrigger } from 'expo-router/ui'
import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

import { TabButton } from '../TabButton'

export function TabList() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TabTrigger name="dashboard" href="/" asChild>
          <TabButton icon="dashboard" />
        </TabTrigger>
        <TabTrigger name="habits" href="/habits" asChild>
          <TabButton icon="list" />
        </TabTrigger>
        <TabTrigger name="tasks" href="/tasks" asChild>
          <TabButton icon="receipt" />
        </TabTrigger>
      </View>
    </View>
  )
}

const styles = StyleSheet.create((theme, rt) => ({
  wrapper: {
    width: '100%',
    paddingHorizontal: theme.spacing._2xl,
    paddingBottom: rt.insets.bottom,
    height: 57 + rt.insets.bottom,
    backgroundColor: theme.colors.backgroundPrimary,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: theme.colors.textPrimary,
  },
}))
