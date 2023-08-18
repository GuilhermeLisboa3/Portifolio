import styles from "./styles.module.scss";
import Link from "next/link";
import { Container } from "reactstrap";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useState, useEffect } from "react";

type Project = { name: string, photo: string, description: string, linkFront: string | null, linkBack: string | null, linkedin: string | null }


export const Project = () => {
  const [projects, setProjects] = useState<Project[]>([])
  useEffect(() => {
    fetch('/api/projects').then(response => response.json()).then(data => setProjects(data.projects))
  }, []);
  return (
    <div className={styles.project} id="projetos">
      <Container>
        <p className="title">Projetos</p>
        <p className="subTitle">Trabalho mais recente</p>
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
          {
            projects.map(project => (
              <SplideSlide key={project.name}>
                <div className={styles.card}>
                  <img src={project.photo} alt={project.name} className={styles.cardImg} />
                  <div className={styles.cardText}>
                    <p className={styles.cardTitle}>{project.name}</p>
                    <p className={styles.cardDescription}>{project.description}</p>
                    <div className={styles.cardIcons}>
                      {
                        project.linkBack ?
                        <Link href={project.linkBack} className={styles.cardBorderIcon} target={"_blank"}>
                          <AiOutlineGithub className={styles.icon} />
                        </Link>
                        : ''
                      }
                      {
                        project.linkedin ?
                        <Link href={project.linkedin} className={styles.cardBorderIcon} target={"_blank"}>
                          <FaLinkedinIn className={styles.icon} />
                        </Link>
                        : ''
                      }
                      {
                        project.linkFront ?
                        <Link href={project.linkFront} className={styles.cardBorderIcon} target={"_blank"}>
                          <AiOutlineGithub className={styles.icon} />
                        </Link>
                        : ''
                      }
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))
          }
        </Splide>
      </div>
    </div>
  );
};
