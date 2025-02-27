import { Redirect } from 'expo-router'
import { TabList as ExpoTabList, Tabs, TabSlot as ExpoTabSlot, TabTrigger } from 'expo-router/ui'
import { StyleSheet } from 'react-native'

import { useAuth } from '~/features/auth/provider'
import { TabList } from '~/features/navigation/components/TabList'
import { TabSlot } from '~/features/navigation/components/TabSlot'

export default function Layout() {
  const { isSignedIn } = useAuth()

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />
  }

  return (
    <Tabs>
      <ExpoTabSlot
      // renderFn={(descriptor, options) => <TabSlot descriptor={descriptor} options={options} />}
      />
      <TabList />
      <ExpoTabList style={styles.tabList}>
        <TabTrigger name="dashboard" href="/" />
        <TabTrigger name="habits" href="/habits" />
        <TabTrigger name="tasks" href="/tasks" />
      </ExpoTabList>
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabList: {
    display: 'none',
  },
})
