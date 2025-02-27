import { TabTriggerSlotProps } from 'expo-router/ui'
import { forwardRef } from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import { Icon } from '~/features/icons/components/Icon'
import { IconName } from '~/features/icons/types'
import { ButtonWrapper } from '~/theme/components/ButtonWrapper'

type Props = {
  icon: IconName
} & TabTriggerSlotProps

export const TabButton = forwardRef<View, Props>(function TabButton(
  { icon, isFocused, ...rest },
  ref,
) {
  return (
    <ButtonWrapper ref={ref} {...rest} style={styles.button}>
      <Icon name={icon} size={24} color={isFocused ? 'iconPrimary' : 'iconSecondary'} />
    </ButtonWrapper>
  )
})
