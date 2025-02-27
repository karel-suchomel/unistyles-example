import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { useAuth } from '../../provider'

import { Button } from '~/theme/components/Button'
import { TextField } from '~/theme/components/TextField'
import { tokens } from '~/theme/tokens'

export function ResetForm() {
  const { signIn } = useAuth()
  const { t } = useTranslation(['features', 'common'])

  const onSubmit = async () => {
    await signIn()
  }

  return (
    <>
      <View style={tokens.gap('lg')}>
        <TextField
          label={t('inputs.email.label', { ns: 'common' })}
          placeholder={t('inputs.email.placeholder', { ns: 'common' })}
        />
      </View>
      <Button onPress={onSubmit}>{t('reset.resetCta')}</Button>
    </>
  )
}
