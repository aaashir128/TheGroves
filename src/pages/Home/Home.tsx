import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { HomeProps } from "./types";
import Header from "../../components/LVL4_Organs/Header/Header";
import { Button } from "../../components/LVL1_Atoms/Button";
import rightIcon from "../../assets/Images/rightIcon.svg";
import SideMenu from "../../components/LVL4_Organs/SideMenu/SideMenu";

const Home = ({}: HomeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [contentIndex, setContentIndex] = useState(0);
  const contentList = [
    {
      place: "KHAWAJA YANNI",
      title: "The new era of luxury",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
    },
    {
      place: "KHAWAJA YANNI",
      title: "The new era of luxury",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
    },
    {
      place: "KHAWAJA YANNI",
      title: "The new era of luxury",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
    },
    {
      place: "KHAWAJA YANNI",
      title: "The new era of luxury",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contentList.length);
      setActiveStep((prevStep) => (prevStep + 1) % contentList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [contentList.length]);

  return (
    <div className={styles.container}>
      {!isOpen ? (
        <div className={styles.backgroundImage}>
          <Header toggleMenu={toggleMenu} />

          <div className={styles.middleBar}>
            <div></div>
            <div className={styles.middleBarMain}>
              <p className={styles.place}>{contentList[contentIndex].place}</p>
              <p className={styles.titleFirstLine}>
                {contentList[contentIndex].title.slice(0, 7)}
              </p>
              <p className={styles.title}>
                {contentList[contentIndex].title.slice(7)}
              </p>
              <p className={styles.description}>
                {contentList[contentIndex].description}
              </p>
              <Button
                rightIcon={<img src={rightIcon} />}
                className={styles["primaryBtn"]}
                height={"55"}
                width={"299"}
                style={{
                  justifyContent: "space-between",
                  width: "299px",
                  height: "55px",
                }}
              >
                Book reservation now
              </Button>
            </div>

            <div className={styles.stepIndicators}>
              {contentList.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.stepIndicator} ${
                    activeStep === index ? styles.active : styles.inactive
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header toggleMenu={toggleMenu} activeSideMenu={isOpen} />

          <SideMenu isOpen={isOpen} />
        </>
      )}
    </div>
  );
};

export default Home;
