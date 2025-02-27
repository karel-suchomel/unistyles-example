import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { useAuth } from '../../provider'
import { PasswordRules } from '../PasswordRules'

import { Button } from '~/theme/components/Button'
import { TextField } from '~/theme/components/TextField'
import { tokens } from '~/theme/tokens'

export function SignUpForm() {
  const { signIn } = useAuth()
  const { t } = useTranslation(['features', 'common'])
  const router = useRouter()

  const onSubmit = async () => {
    await signIn()
  }

  const onSignupPress = () => {
    router.push('/log-in')
  }

  return (
    <>
      <View style={tokens.gap('lg')}>
        <TextField
          label={t('inputs.firstName.label', { ns: 'common' })}
          placeholder={t('inputs.firstName.placeholder', { ns: 'common' })}
        />
        <TextField
          label={t('inputs.lastName.label', { ns: 'common' })}
          placeholder={t('inputs.lastName.placeholder', { ns: 'common' })}
        />
        <TextField
          label={t('inputs.email.label', { ns: 'common' })}
          placeholder={t('inputs.email.placeholder', { ns: 'common' })}
        />
        <TextField
          label={t('inputs.password.label', { ns: 'common' })}
          placeholder={t('inputs.password.placeholder', { ns: 'common' })}
          isPassword
        />
        <TextField
          label={t('inputs.confirmPassword.label', { ns: 'common' })}
          placeholder={t('inputs.confirmPassword.placeholder', { ns: 'common' })}
          isPassword
        />
        <PasswordRules passwordValue="" />
      </View>
      <View style={tokens.gap('lg')}>
        <Button onPress={onSubmit}>{t('signUpCta', { ns: 'common' })}</Button>
        <Button type="secondary" onPress={onSignupPress}>
          {t('loginCta', { ns: 'common' })}
        </Button>
      </View>
    </>
  )
}
