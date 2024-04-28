import { useEffect, useState } from "react";
import styles from "./SideMenu.module.css";
import { SideMenuProps } from "./@types";
import { pages } from "../Header/Header";
import Text from "../../LVL1_Atoms/Text/Text";
import { Button } from "../../LVL1_Atoms/Button";
import LanguageDropdown from "../../LVL3_Cells/LangaugeDropdown/LangaugeDropdown";
import instagram from "../../../assets/Images/Group 17098.svg";
import tiktok from "../../../assets/Images/Group 17218.svg";
import snapchat from "../../../assets/Images/Group 17220.svg";
import twitter from "../../../assets/Images/Group 17222.svg";

const SideMenu = ({ isOpen }: SideMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`fixed top-10vh left-0 w-full h-[90vh] bg-gradient-to-br from-[#283606] to-[#0F1500] z-50 transition-transform ease-in-out duration-500 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {pages.map((lst, index) => (
        <div key={index} className={`${styles.pages} `}>
          <Text className={styles.text}>{lst?.label}</Text>
        </div>
      ))}
      <div className="px-[36px]">
        <div className="mt-12">
          <LanguageDropdown />
        </div>
        <Button
          height="48px"
          width="142px"
          className="primary"
          style={{ marginTop: "36px" }}
        >
          Log in
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 px-[36px] pb-8 flex space-x-6">
        <img src={tiktok} className={styles["icon"]} />
        <img src={instagram} className={styles["icon"]} />
        <img src={twitter} className={styles["icon"]} />
        <img src={snapchat} className={styles["icon"]} />
      </div>
    </div>
  );
};

export default SideMenu;
