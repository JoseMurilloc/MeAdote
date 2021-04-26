import Head from 'next/head'
import ModalWrapper from '../components/ModalWrapper'

import { About } from '../components/HomePages/About'
import { Help } from '../components/HomePages/Help'
import { Start } from '../components/HomePages/Start'
import { Footer } from '../components/GlobalPages/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Me Adote</title>
      </Head>

      <ModalWrapper>
        <Start />
        <About />
        <Help />
        <Footer />
      </ModalWrapper>
    </>
  )
}
