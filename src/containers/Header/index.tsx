import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

import { ReactComponent as LogoIcon } from "../../icons/logo.svg";
import { ReactComponent as UserIcon } from "../../icons/user.svg";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <Link to="/" className={styles.wrapper__container_logo}>
          <LogoIcon />
          <h1 className={styles.wrapper__container_logo_text}>Wrench CRM</h1>
        </Link>
        <div className={styles.wrapper__container_user}>
          <UserIcon />
          <p className={styles.wrapper__container_user_name}>Имя Фамилия</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
