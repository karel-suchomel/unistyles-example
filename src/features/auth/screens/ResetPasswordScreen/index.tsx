import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

import { ResetForm } from '../../components/ResetForm'

import { Layout } from '~/theme/components/Layout'
import { KeyboardAwareContent } from '~/theme/components/Layout/parts/KeyboardAwareContent'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'

export function ResetPassword() {
  const { t } = useTranslation('features')

  return (
    <Layout>
      <KeyboardAwareContent contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <View style={tokens.gap('_2sm')}>
            <Text type="h4" weight="semibold">
              {t('reset.title')}
            </Text>
            <Text type="p1">{t('reset.subtitle')}</Text>
          </View>
          <ResetForm />
        </View>
      </KeyboardAwareContent>
    </Layout>
  )
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flexGrow: 1,
    paddingTop: theme.spacing.lg,
    paddingBottom: rt.insets.bottom + theme.spacing._3xl,
  },
  content: {
    paddingHorizontal: theme.spacing._2xl,
    gap: theme.spacing._3xl,
  },
}))
