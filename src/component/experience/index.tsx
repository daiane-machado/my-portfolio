'use content'
import { useGlobalContext } from "@/provider"
import styles from "./styles.module.scss"

interface IExperience {
  dateI: string,
  dateF: string,
  company: string,
  office: string,
  desc: string
}

export default function Experience(props: { content: IExperience }) {

  const data = props.content
  const dateI = new Date(data.dateI)
  const dateF = new Date(data.dateF)
  const date = `${dateI.toLocaleString("pt-BR", { month: "short" })} de ${dateI.getFullYear()}
  - ${dateF.toLocaleString("pt-BR", { month: "short" })} de ${dateF.getFullYear()}`
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.colEmpty}>
        <span className={styles.point}></span>

      </div>
      <div className={styles.colMain}>
        <div className={styles.content}>
          <p className={styles.date}>{date}</p>
          <p className={styles.office}>{data.office}</p>
          <p className={styles.company}>{data.company}</p>
          <p className={styles.desc}>{data.desc}</p>
        </div>
      </div>
      
    </div>
  )
}