import styles from "./styles.module.scss";
import { Container } from "reactstrap";
import { Link } from "react-scroll"

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Container className={styles.containerHeader}>
          <div className={styles.containerLogo}>
            <p className={styles.logo}>Port<span className={styles.color}>folio</span></p>
          </div>
          <nav className={styles.navigation}>
            <Link to="inicio" smooth={true} offset={0} duration={500}>
              <p className={styles.itensNavigation}>Inicio</p>
            </Link>
            <Link to="sobre" smooth={true} offset={0} duration={500}>
              <p className={styles.itensNavigation}>Sobre</p>
            </Link>
            <Link to="habilidade" smooth={true} offset={-150} duration={500}>
              <p className={styles.itensNavigation}>Habilidades</p>
            </Link>
            <Link to="curriculo" smooth={true} offset={0} duration={500}>
              <p className={styles.itensNavigation}>Currículo</p>
            </Link>
            <Link to="projetos" smooth={true} offset={0} duration={500}>
              <p className={styles.itensNavigation}>Projetos</p>
            </Link>
            <Link to="contato" smooth={true} offset={0} duration={500}>
              <p className={styles.itensNavigation}>Contato</p>
            </Link>
          </nav>
        </Container>
      </div>
    </>
  );
};
