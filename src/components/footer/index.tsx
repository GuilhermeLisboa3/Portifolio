import styles from './styles.module.scss'
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Link from 'next/link'

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerInfo}>
          <p className={styles.title}>Port<span className={styles.spanColor}>folio</span></p>
          <p className={styles.subTitle}>Sou Guilherme e este é o meu site pessoal, consulte-me aqui.</p>
          <div className={styles.footerIcon}>
            <Link href={'https://www.linkedin.com/in/guilherme-gon%C3%A7alves-lisboa-abb8b0227/'} target={'_blank'}>
                <FaLinkedinIn className={styles.icon}/>
            </Link>
            <Link href={'https://github.com/GuilhermeLisboa3'} target={'_blank'}>
                <AiOutlineGithub className={styles.icon}/>
            </Link>
            <Link href={'https://www.instagram.com/guime.lisboa/'} target={'_blank'}>
                <BsInstagram className={styles.icon}/>
            </Link>
          </div>
        </div>
        <p className={styles.copy}>
          © 2023 Bedimcode. All right reserved
        </p>
      </footer>
    </>
  )
}