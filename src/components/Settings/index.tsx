import React, { useState, useRef } from "react";

import styles from "./Settings.module.scss";

import { useOnClickOutside } from "../../hooks/useOutsideClick";

import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import { ReactComponent as ProfileIcon } from "../../icons/profile.svg";
import { ReactComponent as SettingsIcon } from "../../icons/settings.svg";
import { ReactComponent as SettingsControl } from "../../icons/settingsControl.svg";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>();

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(dropDownRef, isOpen ? isOpenHandler : undefined);

  return (
    <div className={styles.wrapper} ref={dropDownRef as any}>
      <div role="button" className={styles.header} onClick={isOpenHandler}>
        <div className={styles.header__left}>
          <SettingsIcon />
          <span>Настройки</span>
        </div>
        <ArrowIcon
          style={{
            transform: `rotate(${!isOpen ? 180 : 0}deg)`,
          }}
        />
      </div>
      {isOpen && (
        <div className={styles.content}>
          <div className={styles.content__item}>
            <ProfileIcon />
            <p>Настройки профиля</p>
          </div>
          <div className={styles.content__item}>
            <SettingsControl />
            <p>Управление финансами</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
