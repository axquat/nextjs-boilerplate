import '@mantine/core/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'
import PageLayout from '../../components/PageLayout'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})
const theme = createTheme({
  fontFamily: nunito.style.fontFamily,
  black: '#2e2d2c',
})

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light" theme={theme}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <PageLayout>{children}</PageLayout>
          </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
