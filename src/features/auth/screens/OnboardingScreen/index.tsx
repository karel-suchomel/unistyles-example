import { Link, useRouter } from 'expo-router'
import { Trans, useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

import { Button } from '~/theme/components/Button'
import { Layout } from '~/theme/components/Layout'
import { Content } from '~/theme/components/Layout/parts/Content'
import { Logo } from '~/theme/components/Logo'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'

export function Onboarding() {
  const { t } = useTranslation('features')
  const router = useRouter()

  const onEmailPress = () => {
    router.push('/log-in')
  }

  const onGooglePress = () => {}
  const onApplePress = () => {}

  return (
    <Layout edges={['top']}>
      <Content contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Logo size="lg" />
          <View style={tokens.gap('_2sm')}>
            <Text type="h4" weight="semibold">
              {t('onboarding.title')}
            </Text>
            <Text type="c1" color="textSecondary">
              <Trans
                i18nKey="onboarding.toc"
                ns="features"
                components={[<Link href="https://google.com" style={tokens.underline} />]}
              />
            </Text>
          </View>
          <View style={tokens.gap('lg')}>
            <Button onPress={onEmailPress}>{t('onboarding.emailCta')}</Button>
            <Button type="secondary" onPress={onApplePress}>
              {t('onboarding.appleCta')}
            </Button>
            <Button type="secondary" onPress={onGooglePress}>
              {t('onboarding.googleCta')}
            </Button>
          </View>
        </View>
      </Content>
    </Layout>
  )
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: rt.insets.bottom + theme.spacing._3xl,
  },
  content: {
    paddingHorizontal: theme.spacing._2xl,
    gap: theme.spacing._3xl,
  },
}))
