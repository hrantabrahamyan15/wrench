import React from "react";
import { Link } from "react-router-dom";

import styles from "./SideBar.module.scss";

import Settings from "../Settings";
import { menuList } from "../../utils";

const SideBar = () => {
  const renderMenuList = menuList.map(({ id, icon, text, path, type }) => {
    if (type === "settings") {
      return <Settings key={id} />;
    }

    if (path) {
      return (
        <Link to={path} key={id} className={styles.items__item}>
          {icon}
          <p className={styles.items__item_text}>{text}</p>
        </Link>
      );
    }

    return (
      <div className={styles.items__item} key={id}>
        {icon}
        <p className={styles.items__item_text}>{text}</p>
      </div>
    );
  });

  return (
    <aside className={styles.wrapper}>
      <h2 className={styles.title}>Меню</h2>
      <div className={styles.items}>{renderMenuList}</div>
    </aside>
  );
};

export default SideBar;
