import { View } from 'react-native'

import { Icon } from '~/features/icons/components/Icon'
import { useFormSchema } from '~/hooks/useFormSchema'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'

type Props = {
  passwordValue: string
}

export function PasswordRules({ passwordValue }: Props) {
  const { passwordRules } = useFormSchema()

  return (
    <View style={tokens.gap('_2xs')}>
      {passwordRules.map((rule) => {
        const doesComply = rule.test(passwordValue)
        return (
          <View
            key={rule.path}
            accessibilityRole="text"
            accessibilityState={{
              checked: doesComply,
            }}
            style={[tokens.flex_row, tokens.align_center, tokens.gap('md')]}
          >
            <Icon name="checkmark" color={doesComply ? 'success' : 'iconSecondary'} />
            <Text type="c1" color={doesComply ? 'success' : 'iconSecondary'}>
              {rule.label}
            </Text>
          </View>
        )
      })}
    </View>
  )
}
