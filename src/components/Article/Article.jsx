'use client'

import { IconEye, IconMessageCircle } from '@tabler/icons-react'
import { Card, Text, Group, Center, rem, useMantineTheme } from '@mantine/core'
import classes from './Article.module.css'

export default function Article({ article }) {
  const theme = useMantineTheme()

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href="https://mantine.dev/"
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)',
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {article.title}
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
              {article.author}
            </Text>

            <Group gap="lg">
              <Center>
                <IconEye
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  {article.view}
                </Text>
              </Center>
              <Center>
                <IconMessageCircle
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  {article.message}
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  )
}
