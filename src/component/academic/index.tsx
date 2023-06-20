import styles from "./styles.module.scss"

interface IAcademic {
  dateI: string,
  dateF: string,
  institution: string,
  course: string
}

export default function Academic(props: { content : IAcademic} ) {

  const data = props.content
  const dateI = new Date(data.dateI)
  const dateF = new Date(data.dateF)
  const date = `${dateI.toLocaleString("pt-BR", { month: "short" })} de ${dateI.getFullYear()}
  - ${dateF.toLocaleString("pt-BR", { month: "short" })} de ${dateF.getFullYear()}`

  return (
    <div className={styles.wrapper}>
      <div className={styles.colMain}>
        <span className={styles.point}></span>
        <div className={styles.content}>
          <p className={styles.date}>{date}</p>
          <p className={styles.institution}>{data.institution}</p>
          <p className={styles.course}>curso</p>
        </div>
      </div>
        <div className={styles.colEmpty}></div>
    </div>
  )
}