import styles from "./styles.module.scss"
import { skills } from "@/utils/datasSkills"



export default function Skills(props: { theme: string }) {
  const { theme } = props

  return (
    <div className={styles.wrapper}>
      <span className={`${styles.name} ${styles[theme]}`}>Skills</span>
      <div className={styles.skills}>
        {skills.map((skill: any) =>
          <picture key={skill.name} className={styles.emblem}>
            <img
              src={`${skill.path}`}
              alt={skill.name}
              className={styles.img}
            >
            </img>
          </picture>
        )}
      </div>
    </div>
  )
}