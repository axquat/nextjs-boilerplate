'use client'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Container } from '@mantine/core'

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Container size={'md'}>{children}</Container>
      <Footer />
    </>
  )
}
