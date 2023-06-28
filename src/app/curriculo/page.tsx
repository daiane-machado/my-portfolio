'use client'
import Navbar from "@/component/navbar"
import styles from "./curriculo.module.scss"
import Academic from "@/component/academic"
import { curriculum } from "@/utils/datasCurriculum"
import Experience from "@/component/experience"
import Footer from "@/component/footer"
import { useGlobalContext } from '@/provider'
import Skills from "@/component/skills"
import Course from "@/component/course"

export default function curriculo() {

  const title = "Curriculo"

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useGlobalContext()

  curriculum.sort((d1, d2) =>
    (d1.dateI < d2.dateI ? 1 : (d1.dateI > d2.dateI) ? -1 : 0));
 
  return (
    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <header>
        <title>{title}</title>
        <Navbar />
      </header>
      <div className={`${styles.main}`}>
     
        <h1 className={`${styles.title} ${styles[theme]}`}>{title}</h1>
        <div className={styles.curriculum}>
          <div className={styles.head}>
            <div className={styles.col1}>
              <span className={`${styles.name} ${styles[theme]}`}>Formação Acadêmica</span>
            </div>
            <div className={styles.col2}>
              <span className={`${styles.name} ${styles[theme]}`}>Experiência Profissional</span>
            </div>
          </div>
          <div className={styles.wrapperContent}>
            <div className={styles.content}>
              {curriculum.map((item: any, key: any) =>
             
              (
                <div className={styles.item} key={key.year}>
                  {item.institution ? <Academic content={item} /> : null}
                  {item.company ? <Experience content={item} /> : null}
                </div>
              )
              )}
            </div>
          </div>
        </div>
        <Skills theme={theme} />
        <Course theme={theme}  />
        
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}