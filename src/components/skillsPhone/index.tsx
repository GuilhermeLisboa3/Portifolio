import { Button, Container, UncontrolledCollapse } from "reactstrap";
import styles from "./styles.module.scss";
import { BiCodeCurly } from "react-icons/bi";
import { HiOutlineServer } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
export const SkillsPhone = () => {
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
                <p className={styles.titleLenguage}>Front end</p>
              </div>
              <MdKeyboardArrowDown className={styles.icon} />
            </Button>
            <UncontrolledCollapse toggler="#frontend">
              <div className={styles.skillsData}>
                <div className={styles.skillsTitle}>
                  <h3 className={styles.skillsName}>HTML</h3>
                  <span className={styles.skillsNumber}>90%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{width: "90%"}}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  ></div>
                </div>
              </div>
              <div className={styles.skillsData}>
                <div className={styles.skillsTitle}>
                  <h3 className={styles.skillsName}>CSS</h3>
                  <span className={styles.skillsNumber}>90%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{width: "90%"}}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  ></div>
                </div>
              </div>
              <div className={styles.skillsData}>
                <div className={styles.skillsTitle}>
                  <h3 className={styles.skillsName}>Javascript</h3>
                  <span className={styles.skillsNumber}>85%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{width: "85%"}}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  ></div>
                </div>
              </div>
              <div className={styles.skillsData}>
                <div className={styles.skillsTitle}>
                  <h3 className={styles.skillsName}>Typescript</h3>
                  <span className={styles.skillsNumber}>80%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{width: "80%"}}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  ></div>
                </div>
              </div>
              <div className={styles.skillsData}>
                <div className={styles.skillsTitle}>
                  <h3 className={styles.skillsName}>React</h3>
                  <span className={styles.skillsNumber}>70%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{width: "70%"}}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  ></div>
                </div>
              </div>
            </UncontrolledCollapse>
          </div>
          <div>
            <Button className={styles.button} id="backend">
              <div className={styles.divButton}>
                <HiOutlineServer className={styles.icon} />
                <p className={styles.titleLenguage}>Back End</p>
              </div>
              <MdKeyboardArrowDown className={styles.icon} />
            </Button>
            <UncontrolledCollapse toggler="#backend">
              <div className={styles.skillsData}>
                <div className={styles.skillsTitle}>
                  <h3 className={styles.skillsName}>NodeJs</h3>
                  <span className={styles.skillsNumber}>85%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{width: "85%"}}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  ></div>
                </div>
              </div>
              <div className={styles.skillsData}>
                <div className={styles.skillsTitle}>
                  <h3 className={styles.skillsName}>MongoDB</h3>
                  <span className={styles.skillsNumber}>70%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{width: "70%"}}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  ></div>
                </div>
              </div>
              <div className={styles.skillsData}>
                <div className={styles.skillsTitle}>
                  <h3 className={styles.skillsName}>PostgreSQL</h3>
                  <span className={styles.skillsNumber}>80%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{width: "80%"}}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  ></div>
                </div>
              </div>
              <div className={styles.skillsData}>
                <div className={styles.skillsTitle}>
                  <h3 className={styles.skillsName}>Jest</h3>
                  <span className={styles.skillsNumber}>85%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{width: "85%"}}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  ></div>
                </div>
              </div>
              <div className={styles.skillsData}>
                <div className={styles.skillsTitle}>
                  <h3 className={styles.skillsName}>Git</h3>
                  <span className={styles.skillsNumber}>85%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{width: "85%"}}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  ></div>
                </div>
              </div>
            </UncontrolledCollapse>
          </div>
        </Container>
      </div>
    </>
  );
};
