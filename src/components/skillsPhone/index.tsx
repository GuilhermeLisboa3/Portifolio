import { Button, Container, UncontrolledCollapse } from "reactstrap";
import styles from "./styles.module.scss";
import { BiCodeCurly } from "react-icons/bi";
import { HiOutlineServer } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
export const SkillsPhone = () => {
  const [skills, setSkills] = useState<Array<{ name: string, porcent: number}>>([])
  useEffect(() => {
    fetch('/api/skills').then(response => response.json()).then(data => setSkills(data.skills))
  }, []);
  return (
    <>
      <div className={styles.skill} id="habilidades">
        <h2 className="title">Habilidades</h2>
        <p className="subTitle">meu nível técnico</p>
        <Container className={styles.ContainerSkill}>
          <div>
            <Button className={styles.button} id="frontend">
              <div className={styles.divButton}>
                <BiCodeCurly className={styles.icon} />
                <p className={styles.titleLenguage}>Linguagens</p>
              </div>
              <MdKeyboardArrowDown className={styles.icon} />
            </Button>
            <UncontrolledCollapse toggler="#frontend">
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
            </UncontrolledCollapse>
          </div>
        </Container>
      </div>
    </>
  );
};
