import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { StyleProp, View, ViewStyle } from 'react-native'

import { styles } from './styles'
import { useHeaderProps } from '../../hooks/useHeader'

import { Text } from '~/theme/components/Text'

export function Header(props: NativeStackHeaderProps) {
  const { options, headerLeft, headerRight, title } = useHeaderProps(props)

  return (
    <View style={[styles.wrapper, options?.headerStyle as StyleProp<ViewStyle>]}>
      <View style={[styles.container]}>
        <View
          style={styles.content(
            Boolean(headerLeft) || Boolean(headerRight) || Boolean(title),
            options.headerTintColor,
          )}
        >
          <View style={styles.headerLeft}>{headerLeft}</View>
          <View style={styles.titleContainer}>
            <Text>{title}</Text>
          </View>
          <View style={styles.headerRight}>{headerRight}</View>
        </View>
      </View>
    </View>
  )
}
