import { Container } from "reactstrap";
import styles from "./styles.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsMouse } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import Link from "next/link";
import { Header } from "../header";
import { HeaderPhone } from "../headerPhone";
import { Link as LinkScroll } from "react-scroll"

export const HomePage = () => {
  return (
    <>
    <HeaderPhone/>
    <Header/>
      <div className={styles.home} id="inicio">
        <Container className={styles.homeContainer}>
            <div className={styles.icons}>
              <Link href="https://www.linkedin.com/in/guilherme-gon%C3%A7alves-lisboa-abb8b0227/" target={"_blank"}>
                <span className={styles.linkIcon}>
                  <FaLinkedinIn className={styles.icon} />
                </span>
              </Link>
              <Link href="https://www.instagram.com/guime.lisboa/" className={styles.linkIcon} target={"_blank"}>
                <span className={styles.linkIcon}>
                  <FaInstagram className={styles.icon} />
                </span>
              </Link>
              <Link href="https://github.com/GuilhermeLisboa3" className={styles.linkIcon} target={"_blank"}>
                <span className={styles.linkIcon}>
                  <FiGithub className={styles.icon} />
                </span>
              </Link>
            </div>
            <div className={styles.homeImage}>
              <img src="/profile-animate.svg" alt="profile-animate" className={styles.profileImg}/>
            </div>

            <div className={styles.description}>
              <p className={styles.title}>Olá, eu sou o Guilherme</p>
              <p className={styles.subTitle}>Desenvolvedor Full Stack</p>
              <button className="button">
                  Contratar-me
              </button>
            </div>
        </Container>
        <LinkScroll to="sobre" smooth={true} offset={0} duration={500}>
          <p className={styles.buttonDown}>
              <span>
                  <BsMouse className={styles.iconDownMouse} /> 
              </span>
              Scroll down 
              <span>
                  <AiOutlineArrowDown className={styles.iconDown} />
              </span>
          </p>
        </LinkScroll>
      </div>
    </>
  );
};
