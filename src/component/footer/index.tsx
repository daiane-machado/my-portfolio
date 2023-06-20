'use client'
import styles from "./styles.module.scss"
import Image from "next/image"

export default function Footer() {

  const open = (url : string) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contact}>
      <Image src="/My_logo-light.svg" width={140.2} height={27} alt={"logotipo Daiane Machado"} />
        <p className={styles.email}>dai.mmachado@gmail.com</p>
      </div>
      <div className={styles.social}>
        <button role="link" onClick={()=>{open("https://github.com/daiane-machado")}} className={styles.link}>
          <Image className={styles.icon} src={"/GitHub_Logo.svg"} width={25} height={25} alt={"github"}  />
        </button>
        <button role="link" onClick={()=>{open("https://www.linkedin.com/in/daianemmachado")}} className={styles.link} >
          <Image className={styles.icon} src={"/Linkedin_Logo.svg"} width={25} height={25} alt={"github"} />
        </button>
      </div>
    </div>
  )
}