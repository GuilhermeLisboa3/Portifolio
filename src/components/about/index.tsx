import { Container } from "reactstrap";
import styles from "./styles.module.scss";
import { MdOutlineFileDownload } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react"
import Image from "next/image";

export const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className={styles.about} id="sobre">
        <Container>
          <h2 className={styles.titleAbout}>Sobre mim</h2>
          <p className={styles.subTitleAbout}>Introdução</p>
          <div className={styles.containerAbout}>
            <Image
              className={styles.imageAbout}
              width={450}
              height={350}
              src="/eu-wallpaper.jpeg"
              alt="Minha foto"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
            <div className={styles.aboutDescription}>
              <p 
              className={styles.description}
              data-aos="fade-up"
              data-aos-duration="1000">
                Olá me chamo Guilherme, tenho 19 anos, moro em São Paulo.
                Atualmente estou no meu primeiro ano da faculdade de análise e
                desenvolvimento de sistema na Unip. Procuro sempre obter mais
                experiências e muito aprendizado, estudando sempre que possível. E
                com as experiências adquiridas ao longo dos meus estudos procuro
                agora uma chance de efetivação na minha área de conhecimento.
              </p>
              <a 
              download="true"
              href="/Guilherme-curriculo.pdf" 
              className='button buttonFlex'>
                Download CV <MdOutlineFileDownload className='buttonIcon' />
              </a>
          </div>
          </div>
        </Container>
      </div>
    </>
  );
};
