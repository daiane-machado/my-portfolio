'use client'
import Link from "next/link"
import styles from "./styles.module.scss"
import Image from "next/image"
import { useGlobalContext } from "@/provider"
import { useEffect, useState } from "react"

export default function Navbar() {

  const { setCheckTheme, checkTheme, theme } = useGlobalContext()
  const [active, setActive] = useState("")
  const [checkActive, setCheckActive] = useState(false)
  const [positionScroll, setPositionScroll] = useState()

  

  useEffect(() => {
    checkActive ? setActive("active") : setActive("")
    
    
  }, [checkActive, positionScroll])

  window.addEventListener('scroll', function (e: any) {
    //if (e.scrollY === lastScrollTop) return;

    if ((active === "active") && (positionScroll !== this.scroll)) {

      setCheckActive(!checkActive)
    } 

  }, true)





  console.log(active)

  return (
    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <Link href="/" >
        {
          theme === "light"
            ? <Image src="/My_logo-light.svg" width={237} height={45.64} alt={"logotipo Daiane Machado"} className={styles.logo} />
            : <Image src="/My_logo.svg" width={237} height={45.64} alt={"logotipo Daiane Machado"} className={styles.logo} />
        }
      </Link>
      <ul className={`${styles.menuNav} ${styles[active]}`}>
        <li className={styles.itemMenu}>
          <Link href="/curriculo" className={`${styles.menu}`} >
            Currículo
          </Link>
        </li>
        <li className={styles.itemMenu}>
          <Link href="/" className={styles.menu}>
            Projetos
          </Link>
        </li>

        <button
          type="button"
          className={styles.btTheme}
          onClick={() => { setCheckTheme(!checkTheme) }}>
          {theme === "light"
            ? <Image src="/icon-night.svg" width={23} height={23} alt="moon" className={styles.iconTheme} />
            : <Image src="/icon-light.svg" width={23} height={23} alt="sun" className={styles.iconTheme} />
          }
        </button>
      </ul>
      <div className={`${styles.hamburger} ${styles[active]}`} onClick={() => { setCheckActive(!checkActive) }}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  )
}