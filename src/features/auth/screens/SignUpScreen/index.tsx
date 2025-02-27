import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

import { SignUpForm } from '../../components/SignupForm'

import { Layout } from '~/theme/components/Layout'
import { KeyboardAwareContent } from '~/theme/components/Layout/parts/KeyboardAwareContent'
import { Text } from '~/theme/components/Text'

export function SignUp() {
  const { t } = useTranslation('features')
  return (
    <Layout>
      <KeyboardAwareContent contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text type="h4" weight="semibold">
            {t('signup.title')}
          </Text>
          <SignUpForm />
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
