import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { useAuth } from '../../provider'

import { Button } from '~/theme/components/Button'
import { Link } from '~/theme/components/Link'
import { TextField } from '~/theme/components/TextField'
import { tokens } from '~/theme/tokens'

export function LoginForm() {
  const { signIn } = useAuth()
  const { t } = useTranslation(['features', 'common'])
  const router = useRouter()

  const onLoginPress = async () => {
    await signIn()
  }

  const onSignupPress = () => {
    router.push('/sign-up')
  }

  const onResetPress = () => {
    router.push('/reset-password')
  }

  return (
    <>
      <View style={tokens.gap('lg')}>
        <TextField
          label={t('inputs.email.label', { ns: 'common' })}
          placeholder={t('inputs.email.placeholder', { ns: 'common' })}
        />
        <TextField
          label={t('inputs.password.label', { ns: 'common' })}
          placeholder={t('inputs.password.placeholder', { ns: 'common' })}
          isPassword
        />
        <Link
          type="p2"
          style={tokens.underline}
          onPress={onResetPress}
          text={t('login.resetCta')}
        />
      </View>
      <View style={tokens.gap('lg')}>
        <Button onPress={onLoginPress}>{t('loginCta', { ns: 'common' })}</Button>
        <Button type="secondary" onPress={onSignupPress}>
          {t('signUpCta', { ns: 'common' })}
        </Button>
      </View>
    </>
  )
}
