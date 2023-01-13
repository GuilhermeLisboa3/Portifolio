import styles from "./styles.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { AiOutlineFile } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-scroll"

export const HeaderPhone = () => {

  return (
    <nav className={styles.nav}>
      <Link to="inicio" smooth={true} offset={0} duration={500}>
        <p className={styles.bgIcon}>
          <AiOutlineHome />
        </p>
      </Link>
      <Link to="sobre" smooth={true} offset={0} duration={500}>
        <p className={styles.bgIcon}>
          <AiOutlineUser />
        </p>
      </Link>
      <Link to="habilidades" smooth={true} offset={0} duration={500}>
        <p className={styles.bgIcon}>
          <BiBook />
        </p>
      </Link>
      <Link to="curriculo" smooth={true} offset={0} duration={500}>
        <p className={styles.bgIcon}>
          <AiOutlineFile />
        </p>
      </Link>
      <Link to="projetos" smooth={true} offset={0} duration={500}>
        <p className={styles.bgIcon}>
          <BsCollection />
        </p>
      </Link>
      <Link to="contato" smooth={true} offset={0} duration={500}>
        <p className={styles.bgIcon}>
          <BiMessageSquareDetail />
        </p>
      </Link>
    </nav>
  );
};
