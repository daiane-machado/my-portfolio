'use client'
import Link from "next/link"
import styles from "./styles.module.scss"
import Image from "next/image"
import { useGlobalContext } from "@/provider"

export default function Navbar() {

  const { setCheckTheme, checkTheme, theme } = useGlobalContext()


  //console.log(theme)

  return (
    <div id="navbar" className={`${styles.wrapper} ${styles[theme]}`}>
      <Link href="/curriculo" className={styles.textMenu} >
        {
          theme === "light"
          ? <Image src="/My_logo-light.svg" width={237} height={45.64} alt={"logotipo Daiane Machado"} className={styles.logo} />
          : <Image src="/My_logo.svg" width={237} height={45.64} alt={"logotipo Daiane Machado"} className={styles.logo} />
        }
      </Link>
      <div className={styles.menuBar}>
        <Link href="/curriculo" className={`${styles.menu}`} >
          Currículo
        </Link>
        <Link href="/" className={styles.menu}>
          Projetos
        </Link>
        <button
          type="button"
          className={styles.btTheme}
          onClick={() => { setCheckTheme(!checkTheme) }}>
          {theme === "light"
            ? <Image src="/icon-night.svg" width={23} height={23} alt="moon" className={styles.iconTheme} />
            : <Image src="/icon-light.svg" width={23} height={23} alt="sun" className={styles.iconTheme} />
          }
        </button>
      </div>
    </div>
  )
}