import React from "react";

import styles from "./AddressList.module.scss";

type DataProps = {
  data: any[];
  unrestricted_value: string;
  value: string;
};

interface Address {
  data: DataProps[];
}
const AddressList: React.FC<Address> = ({ data }) => {
  const renderAddressList =
    data &&
    data.map((item: { value: string | undefined }) => (
      <div key={item.value} className={styles.item}>
        {item.value}
      </div>
    ));

  return data?.length ? (
    <div className={styles.content}>
      <div className={styles.title}>Адреса</div>
      {renderAddressList}
    </div>
  ) : null;
};

export default AddressList;
