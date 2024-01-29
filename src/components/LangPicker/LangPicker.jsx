import { useEffect, useState } from 'react'
import { UnstyledButton, Menu, Group, Text } from '@mantine/core'
import { IconChevronDown, IconWorld } from '@tabler/icons-react'
import { useRouter, usePathname } from '@/navigation'
import { useLocale } from 'next-intl'
import classes from './LangPicker.module.css'

const data = [
  { label: 'English', locale: 'en' },
  { label: 'Deutsch', locale: 'de' },
]

export default function LangPicker() {
  const [opened, setOpened] = useState(false)
  const [selected, setSelected] = useState(null)

  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  useEffect(() => {
    const lang = data.find((item) => item.locale === locale)
    setSelected(lang)
  }, [locale])

  const items = data.map((item) => (
    <Menu.Item
      onClick={() => {
        router.replace(pathname, { locale: item.locale })
      }}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ))

  return (
    <>
      {selected && (
        <Menu
          onOpen={() => setOpened(true)}
          onClose={() => setOpened(false)}
          radius="md"
          width="target"
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton
              className={classes.control}
              data-expanded={opened || undefined}
            >
              <Group gap="xs">
                <span className={classes.label}>
                  <IconWorld className={classes.wicon} stroke={1.4} />
                  {selected.locale.toUpperCase()}
                </span>
              </Group>
              <IconChevronDown
                size="1rem"
                className={classes.icon}
                stroke={1.5}
              />
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
      )}
    </>
  )
}
