'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import { useGlobalContext } from '@/provider'
import Navbar from '@/component/navbar'
import Footer from '@/component/footer'

export default function Home() {

  const { theme } = useGlobalContext()

  return (
    <div className={styles.wrapper}>
    <header>
      <title>Home</title>
      <Navbar />
    </header>
    <main className={`${styles.main} ${styles[theme]}`}>
      <div className={styles.images}>
        <Image
          src={"/my-photo.jpg"}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '14rem', height: 'auto' }}
          alt='mulher negra sorrindo'
          className={styles.profile}
        />
        <Image src={"/graphics-main.svg"}
          width="0"
          height="0"
          style={{ width: '24rem', height: 'auto' }}
          alt="graphics"
          className={styles.graphics} />
      </div>

      <div className={styles.apresentation}>
        <div className={styles.text}>
          <p>Olá,
          <br></br>
          </p>
          <p>Sou uma desenvolvedora front-end, altamente motivada,
            determinada e apaixonada por programação e tecnologia.
            <br></br>
            Além disso, sou autodidata e estou sempre disposta a enfrentar novos desafios.
            Amo criar websites e aplicações web</p>
        </div>
      </div>
    <Footer />
    </main>
    </div>
  )
}
