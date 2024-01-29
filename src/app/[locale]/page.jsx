import Article from '@/components/Article/Article'
import { Box, SimpleGrid, Title, Text } from '@mantine/core'
import { getLocale, getTranslations } from 'next-intl/server'

async function getArticles() {
  const locale = await getLocale()
  const articles = await fetch(`${process.env.API_URL}/api/blog/${locale}`, {
    cache: 'force-cache',
  })

  const res = await articles.json()
  return res
}

export default async function IndexPage() {
  const articles = await getArticles()
  const t = await getTranslations('IndexPage')

  return (
    <>
      <title>{t('title')}</title>

      <Box ta={'center'}>
        <Title>{t('title').toUpperCase()}</Title>
        <Text mt={'sm'} mb={'xl'}>
          {t('description')}
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}
