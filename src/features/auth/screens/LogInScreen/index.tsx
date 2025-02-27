import { Link as ExpoLink } from 'expo-router'
import { Trans, useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

import { LoginForm } from '../../components/LoginForm'

import { Layout } from '~/theme/components/Layout'
import { KeyboardAwareContent } from '~/theme/components/Layout/parts/KeyboardAwareContent'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'

export function LogIn() {
  const { t } = useTranslation(['features', 'common'])

  return (
    <Layout>
      <KeyboardAwareContent contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <View style={tokens.gap('_2sm')}>
            <Text type="h4" weight="semibold">
              {t('login.title')}
            </Text>
            <Text type="p1">
              <Trans
                i18nKey="login.subtitle"
                ns="features"
                components={[<ExpoLink href="/sign-up" style={tokens.underline} />]}
              />
            </Text>
          </View>
          <LoginForm />
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
