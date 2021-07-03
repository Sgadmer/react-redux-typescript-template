import React, { FC } from "react";
import styles from "@styles/test.styles.module.scss";
import { hot } from "react-hot-loader/root";

const App: FC = () => {
  return <p className={styles.root__text}>ЦУЦУeertetert!@!@tutu!@!@1УЦ</p>;
};
export default hot(App);
