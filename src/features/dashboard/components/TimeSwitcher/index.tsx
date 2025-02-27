import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { TimeSwitcherButton } from './parts/TimeSwitcherButton'
import { styles } from './styles'

type Props = {
  onTimeSwitch: () => void
}

export function TimeSwitcher({ onTimeSwitch }: Props) {
  const { t } = useTranslation('features')
  const [activeTab, setActiveTab] = useState(0)
  const tabs = [
    {
      id: 0,
      label: t('dashboard.day'),
    },
    {
      id: 1,
      label: t('dashboard.week'),
    },
    {
      id: 2,
      label: t('dashboard.month'),
    },
    {
      id: 3,
      label: t('dashboard.year'),
    },
  ]

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        return (
          <TimeSwitcherButton
            key={tab.id}
            activeTabId={activeTab}
            id={tab.id}
            label={tab.label}
            onPress={() => {
              setActiveTab(tab.id)
              onTimeSwitch()
            }}
          />
        )
      })}
    </View>
  )
}
