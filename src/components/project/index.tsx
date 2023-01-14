import styles from "./styles.module.scss";
import Link from "next/link";
import { Container } from "reactstrap";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";


export const Project = () => {
  return (
    <div className={styles.project} id="projetos">
      <Container>
        <p className={styles.title}>Projetos</p>
        <p className={styles.subTitle}>Trabalho mais recente</p>
      </Container>
      <div className="d-flex flex-column align-items-center py-4">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            width: 4 * 300,
            focus: 'center',
            pagination: false,
            arrows: true,
            drag: true,
            breakpoints: {
              1200: {
                perPage: 2,
                width: 600,
                arrows: true,
                drag: true,
              },
              600: {
                perPage: 1,
                width: 300,
                arrows: true,
                drag: true,
              },
              300: {
                width: 250,
                arrows: true,
              },
            },
          }}
        >
          <SplideSlide>
          <div className={styles.card}>
            <img src="/pokedex.jpeg" alt="pokedex" className={styles.cardImg} />
            <div className={styles.cardText}>
              <p className={styles.cardTitle}>Pokedex</p>
              <p className={styles.cardDescription}>
                Uma pokedex desenvolvido com PostegresSQL, Nodejs, Nextjs,
                Typescript e Sass.
              </p>
              <div className={styles.cardIcons}>
                <Link href="https://github.com/GuilhermeLisboa3/Pokedex-Backend" className={styles.cardBorderIcon} target={"_blank"}>
                    <AiOutlineGithub className={styles.icon} />
                </Link>
                <Link href="https://www.linkedin.com/feed/update/urn:li:activity:6971119114928947200/" target={"_blank"} className={styles.cardBorderIcon}>
                    <FaLinkedinIn className={styles.icon} />
                </Link>
              </div>
            </div>
          </div>
          </SplideSlide>

          <SplideSlide>
          <div className={styles.card}>
            <img
              src="/the-big-bang.jpeg"
              alt="the-big-bang"
              className={styles.cardImg}
            />
            <div className={styles.cardText}>
              <p className={styles.cardTitle}>The Big Bang</p>
              <p className={styles.cardDescription}>
                Um site de The Big Bang desenvolvido com CSS, HTML, Bootstrap,
                JavaScript.
              </p>
              <div className={styles.cardIcons}>
                <Link href="https://github.com/GuilhermeLisboa3/The_Big_Bang_Theory" className={styles.cardBorderIcon} target={"_blank"}>
                  <AiOutlineGithub className={styles.icon} />
                </Link>
                <Link href="https://www.linkedin.com/posts/guilherme-gon%C3%A7alves-lisboa-abb8b0227_javascript-html-css-activity-6918240673452146688-CTix?utm_source=share&utm_medium=member_desktop" className={styles.cardBorderIcon} target={"_blank"}>
                  <FaLinkedinIn className={styles.icon} />
                </Link>
              </div>
            </div>
          </div>
          </SplideSlide>

          <SplideSlide>
          <div className={styles.card}>
            <img
              src="/hotel-paraiso.jpeg"
              alt="hotel-paraiso"
              className={styles.cardImg}
            />
            <div className={styles.cardText}>
              <p className={styles.cardTitle}>Hotel Paraiso</p>
              <p className={styles.cardDescription}>
                Site de um hotel desenvolvido com HTML e CSS.
              </p>
              <div className={styles.cardIcons}>
              <Link href="https://github.com/GuilhermeLisboa3/flexbox" className={styles.cardBorderIcon} target={"_blank"}>
                  <AiOutlineGithub className={styles.icon} />
              </Link>
              </div>
            </div>
          </div>
          </SplideSlide>

          <SplideSlide>
          <div className={styles.card}>
            <img
              src="/docs-text.jpeg"
              alt="docs-text"
              className={styles.cardImg}
            />
            <div className={styles.cardText}>
              <p className={styles.cardTitle}>Docs Tex</p>
              <p className={styles.cardDescription}>
                Um site para fazer anotações, desenvolvido com Nodejs, React, MongoDB e Sass.
              </p>
              <div className={styles.cardIcons}>
                <Link href="https://github.com/GuilhermeLisboa3/Docs-Text" className={styles.cardBorderIcon} target={"_blank"}>
                    <AiOutlineGithub className={styles.icon} />
                </Link>
                <Link href="https://www.linkedin.com/posts/guilherme-gon%C3%A7alves-lisboa-abb8b0227_react-nodejs-fullstack-activity-6949004219316068352-T8Dn?utm_source=share&utm_medium=member_desktop" className={styles.cardBorderIcon}>
                  <FaLinkedinIn className={styles.icon} />
                </Link>
              </div>
            </div>
          </div>
          </SplideSlide>

          <SplideSlide>
          <div className={styles.card}>
            <img
              src="/animeflix.jpeg"
              alt="animeflix"
              className={styles.cardImg}
            />
            <div className={styles.cardText}>
              <p className={styles.cardTitle}>Animeflix</p>
              <p className={styles.cardDescription}>
                Site para você assistir seus animes favoritos. Desenvolvido com NextJs, Typescript, Node e PostgreSQL.
              </p>
              <div className={styles.cardIcons}>
                <Link href="https://github.com/GuilhermeLisboa3/Animeflix-backend" className={styles.cardBorderIcon} target={"_blank"}>
                  <AiOutlineGithub className={styles.icon} />
                </Link>
                <Link href="https://www.linkedin.com/feed/update/urn:li:activity:6981690864179789824/" target={"_blank"} className={styles.cardBorderIcon}>
                    <FaLinkedinIn className={styles.icon} />
                </Link>
              </div>
            </div>
          </div>
          </SplideSlide>

          <SplideSlide>
          <div className={styles.card}>
            <img
              src="/clean-api-node.jpeg"
              alt="Clean api node"
              className={styles.cardImg}
            />
            <div className={styles.cardText}>
              <p className={styles.cardTitle}>Clean api node</p>
              <p className={styles.cardDescription}>
                Uma API de enquetes, desenvolvida com NodeJs, Typescript e utilizando os conceitos de TDD, DDD, Clean Architecture e SOLID
              </p>
              <div className={styles.cardIcons}>
                <Link href="https://github.com/GuilhermeLisboa3/clean-node-api" className={styles.cardBorderIcon} target={"_blank"}>
                  <AiOutlineGithub className={styles.icon} />
                </Link>
                <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7000931521452748800/" target={"_blank"} className={styles.cardBorderIcon}>
                    <FaLinkedinIn className={styles.icon} />
                </Link>
              </div>
            </div>
          </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};
