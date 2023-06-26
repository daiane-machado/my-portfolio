'use client'
import Navbar from "@/component/navbar"
import styles from "./projetos.module.scss"
import Footer from "@/component/footer"
import Image from "next/image"
import { curriculum } from "../../utils/datasCurriculum"
import { useGlobalContext } from "@/provider"

export default function projetos() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useGlobalContext()

  const title = "Projetos"
  return (
    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <header>
        <title >{title}</title>
        <Navbar />
      </header>
      <div className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.projects} >
          {curriculum.map((item: any) => (
            <div className={styles.project} key={item}>
              <div className={styles.col1}>
                <Image
                  src="/graphics-half.svg"
                  width={230}
                  height={230}
                  alt="grafic"
                  className={styles.graphics} />
                <Image
                  src="/graphics-main.svg"
                  width={180}
                  height={180}
                  alt="image do projeto"
                  className={styles.imgProject} />
              </div>
              <div className={styles.col2}>
                <p className={styles.titlePoject}>Titulo do projeto</p>
                <p className={styles.technology}>HTML CSS JavaScript Typescript</p>
              </div>
            </div>

          )
          )}
        </div>

      </div>

      <Footer />
    </div>
  )
}