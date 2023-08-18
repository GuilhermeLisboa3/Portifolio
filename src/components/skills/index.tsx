import { Container } from "reactstrap";
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export const Skills = () => {
  const [skills, setSkills] = useState<Array<{ name: string, porcent: number}>>([])
  useEffect(() => {
    fetch('/api/skills').then(response => response.json()).then(data => setSkills(data.skills))
    AOS.init();
  }, []);

  return (
    <>
      <div className={styles.skill} id="habilidade">
        <Container>
          <h2 className="title">Habilidades</h2>
          <p className="subTitle">meu nível técnico</p>
          <ul className={styles.listSkills}>
            {
              skills.map(skill => (
                <div className={styles.skillsData} key={skill.name}>
                  <div className={styles.skillsTitle}>
                    <h3 className={styles.skillsName}>{skill.name}</h3>
                    <span className={styles.skillsNumber}>{skill.porcent}%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      aria-label="Basic example"
                      style={{width: `${skill.porcent}%`}}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></div>
                  </div>
                </div>
              ))
            }
          </ul>
        </Container>
      </div>
    </>
  );
};
