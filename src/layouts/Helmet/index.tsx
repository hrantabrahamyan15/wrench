import React from "react";

import styles from "./Helmet.module.scss";

import { SideBar } from "../../components";
import { HeaderContainer } from "../../containers";

interface Helmet {
  children: React.ReactNode;
}

const HelmetLayout: React.FC<Helmet> = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <main className={styles.wrapper}>
        <SideBar />
        <section className={styles.content}>{children}</section>
      </main>
    </>
  );
};

export default HelmetLayout;
