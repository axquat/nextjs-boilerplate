import { useState } from 'react'
import { Container, Group, Burger, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './Header.module.css'
import ColorScheme from '../ColorScheme/ColorScheme'
import LangPicker from '../LangPicker/LangPicker'

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
]

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault()
        setActive(link.link)
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image h={32} w={32} alt="mantine logo" src="/favicon.svg" />
        <Group gap={5} visibleFrom="xs">
          {items}

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '6px',
              alignItems: 'center',
              marginLeft: '12px',
            }}
          >
            <LangPicker />
            <ColorScheme />
          </div>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  )
}
