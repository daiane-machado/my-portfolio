'use client'
import Navbar from "@/component/navbar"
import styles from "./projetos.module.scss"
import Footer from "@/component/footer"
import Image from "next/image"
import { projects } from "../../utils/datasProjects"
import { useGlobalContext } from "@/provider"
import { Key } from "react"

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
          {projects.map((item: any) => (
            <div className={styles.project} key={item.title}>
              <div className={styles.graphicCover}>
                <Image
                  src={"/graphics-half.svg"}
                  width={230}
                  height={230}
                  alt="grafic"
                  className={styles.graphics} />
                <a href={item.linkView} style={{cursor: "pointer"}} target="_blank">
                  {item.title === "D2M Lab Criptograma"  ? <span className={styles.construction}>Em construção</span> : null}
                  <Image
                    src={item.cover}
                    width={220}
                    height={137.18}
                    alt="imagem do projeto"
                    className={styles.imgProject} />
                </a>
              </div>
              <div className={styles.content}>
                <p className={styles.titlePoject}>{item.title}</p>
                <p className={styles.technology}>{item.tecnology}</p>
                <div className={styles.links}>
                  <a href={item.linkView} target="_blank">Vizualizar</a>
                  <a href={item.linkCode} target="_blank">Código</a>
                </div>
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