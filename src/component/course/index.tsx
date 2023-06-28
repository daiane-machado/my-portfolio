import styles from "./styles.module.scss"
import Image from "next/image"
import { courses } from "@/utils/datasCourses"


export default function Course(props: { theme: any}) {

  return (
    <div className={styles.wrapper}>
      <span className={`${styles.name} ${styles.theme}`}>
        Cursos
      </span>
      <div className={styles.content}>
        <div className={styles.listCourse}>

          <Image
            src={"/stamp.svg"}
            width={80}
            height={80}
            alt={""}
            className={styles.stamp} />
          <Image
            src={"/graphics-courses.svg"}
            width={25}
            height={25}
            alt={""}
            className={styles.graphicsBL} />
          <Image
            src={"/graphics-courses.svg"}
            width={25}
            height={25}
            alt={""}
            className={styles.graphicsTL} />
          <Image
            src={"/graphics-courses.svg"}
            width={25}
            height={25}
            alt={""}
            className={styles.graphicsTR} />
          <Image
            src={"/graphics-courses.svg"}
            width={25}
            height={25}
            alt={""}
            className={styles.graphicsBR} />
          <ul>
            {courses.map((course: any) => (
              <li className={styles.course} key={course.course}>
                <a style={{cursor: "pointer"}} href={course.link !== "" ? course.link :null} target="_blank">
                <span><b>{course.name}</b></span><br></br>
                <span>{`${course.time} | ${course.company}`}</span>
                </a>
                </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}