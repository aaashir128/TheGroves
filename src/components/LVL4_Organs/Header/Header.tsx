import React from "react";
import styles from "./Header.module.css";
import { HeaderProps } from "./@types";
import logo from "../../../assets/Images/PHOTO-2021-06-16-18-42-19_copy_2@2x.png";
import instagram from "../../../assets/Images/Group 17098.svg";
import tiktok from "../../../assets/Images/Group 17218.svg";
import snapchat from "../../../assets/Images/Group 17220.svg";
import twitter from "../../../assets/Images/Group 17222.svg";
import { Button } from "../../LVL1_Atoms/Button";
import LanguageDropdown from "../../LVL3_Cells/LangaugeDropdown/LangaugeDropdown";
import Text from "../../LVL1_Atoms/Text/Text";
import menu from "../../../assets/Images/Menu.svg";
import cross from "../../../assets/Images/Cross.svg";

export const pages = [
  { label: "Dine With Us", url: "/" },
  { label: "plan your visit", url: "/" },
  { label: "events", url: "/" },
  { label: "view groves map", url: "/" },
  { label: "our story", url: "/" },
  { label: "contact us", url: "/" },
];
const Header: React.FC<HeaderProps> = ({ toggleMenu, activeSideMenu }) => {
  return (
    <div
      className={styles[activeSideMenu ? "header-activeSideMenu" : "header"]}
    >
      <div className={styles["mainDiv"]}>
        <div className="">
          <img src={logo} className={styles["logo"]} />
        </div>

        <div className={styles["headerOptions"]}>
          <div className={styles["social-icons"]}>
            <img src={tiktok} className={styles["icon"]} />
            <img src={instagram} className={styles["icon"]} />
            <img src={twitter} className={styles["icon"]} />
            <img src={snapchat} className={styles["icon"]} />
          </div>

          <Button height="48px" width="142px" className="primary">
            Log in
          </Button>

          <LanguageDropdown />
        </div>

        <div className={styles["menuIcon"]}>
          <img src={activeSideMenu ? cross : menu} onClick={toggleMenu} />
        </div>
      </div>

      <div className={styles["header_pages"]}>
        {pages?.map((page, i) => (
          <Text className={styles.pageLinks} key={i}>
            {page?.label}
          </Text>
        ))}
      </div>
    </div>
  );
};

export default Header;
