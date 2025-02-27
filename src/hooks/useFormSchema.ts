import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export function useFormSchema() {
  const { t } = useTranslation(['errors', 'common'])
  const passwordRules = useMemo(() => {
    return [
      {
        path: 'min',
        label: t('common:inputs.rules.length'),
        message: t('errors:inputs.passwordLength'),
        test: (value: string) => value.length >= 8,
      },
      {
        path: 'uppercase_lowercase',
        label: t('common:inputs.rules.letters'),
        message: t('errors:inputs.letterCombination'),
        test: (value: string) => /(?=.*[A-Z])(?=.*[a-z])/.test(value),
      },
      {
        path: 'number',
        label: t('common:inputs.rules.number'),
        message: t('errors:inputs.passwordNumber'),
        test: (value: string) => /[0-9]/.test(value),
      },
      {
        path: 'special',
        label: t('common:inputs.rules.special'),
        message: t('errors:inputs.passwordSpecial'),
        test: (value: string) => /[^A-Za-z0-9]/.test(value),
      },
    ] as const
  }, [t])

  return useMemo(
    () => ({
      passwordRules,
    }),
    [passwordRules],
  )
}
