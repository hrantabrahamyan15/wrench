import React, { useState } from "react";

import styles from "./Address.module.scss";

import { AddressList } from "../../components";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

const Address: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [addressList, setAddressList] = useState<any>([]);

  const getAddressList = () => {
    const url =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "33c0961c8ecf7c9b8a4b78fe9245a37b08cf179f";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: value }),
    };

    fetch(url, options)
      .then((response) => response.text())
      .then((result) => setAddressList(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  };

  const submitValueHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (value.trim().length) {
      getAddressList();
    }
  };

  const changeValueHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Поиск адресов</h2>
      <p className={styles.subtitle}>Введите интересующий вас адрес</p>
      <form onSubmit={submitValueHandler} className={styles.search}>
        <input
          onChange={changeValueHandler}
          type="text"
          placeholder="Введите интересующий вас адрес"
        />
        <button type="submit">
          <SearchIcon />
          <span>Поиск</span>
        </button>
      </form>
      <AddressList data={addressList.suggestions} />
    </div>
  );
};

export default Address;
