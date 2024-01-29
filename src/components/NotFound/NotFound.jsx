import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from '@mantine/core'
import image from './image.svg'
import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'
import classes from './NotFound.module.css'

export default function NotFound() {
  const router = useRouter()
  const t = useTranslations('NotFoundPage')

  return (
    <Container className={classes.root}>
      <title>{t('title')}</title>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image
          alt="not found image"
          src={image.src}
          className={classes.mobileImage}
        />
        <div>
          <Title className={classes.title}>{t('title')}</Title>
          <Text c="dimmed" size="lg">
            {t('description')}
          </Text>
          <Button
            onClick={() => {
              router.push('/')
            }}
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
          >
            {t('button')}
          </Button>
        </div>
        <Image
          alt="not found image"
          src={image.src}
          className={classes.desktopImage}
        />
      </SimpleGrid>
    </Container>
  )
}
