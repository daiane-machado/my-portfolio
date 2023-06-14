'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import { useGlobalContext } from '@/provider'

export default function Home() {

  const { theme } = useGlobalContext()

  return (
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
            Além disso, sou autodidata e estou sempre disposto a enfrentar novos desafios.
            Amo criar websites e aplicações web</p>
        </div>
      </div>

    </main>
  )
}

/*Sou uma desenvolvedora front-end, altamente motivada, 
determinada e apaixonada por programação e tecnologia.
Sou autodidata e estou sempre disposto(a) a enfrentar novos desafios. 
Amo criar e desenhar websites e aplicações web.*/