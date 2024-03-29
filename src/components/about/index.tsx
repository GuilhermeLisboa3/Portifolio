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
          <h2 className="title">Sobre mim</h2>
          <p className="subTitle">Introdução</p>
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
                  Atualmente estou no meu último ano estudando Análise e Desenvolvimento de Sistemas na Universidade Paulista. Minha paixão por criar soluções eficazes e inovadoras me levou a explorar as linguagens ReactJs, NodeJs, TypeScript, JavaScript e NextJs.
                  Tenho uma mentalidade orientada à qualidade e à estrutura. Minha experiência em arquitetura de software inclui Clean Architecture e SOLID, que guiam minha abordagem para criar códigos escaláveis e flexíveis. Adoto princípios como TDD e DDD para garantir robustez e confiabilidade, e meu gosto por trabalhar com testes unitários e de integração solidifica essa busca por excelência.
              </p>
              <a 
              download="true"
              href="/curriculo.pdf" 
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
