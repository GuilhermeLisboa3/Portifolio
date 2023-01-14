import { Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className={styles.skill} id="habilidade">
        <Container>
          <h2 className={styles.title}>Habilidades</h2>
          <p className={styles.subTitle}>meu nível técnico</p>
          <Row>
            <Col xs="6">
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
            </Col>
            <Col xs="6">
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
