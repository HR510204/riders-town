import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.scss";

const Index = props => {
  const history = useHistory();
  return (
    <header className={styles.header}>
      <h2 onClick={() => history.push("/")} className={styles.heading}>
        Admin Panel
      </h2>
    </header>
  );
};

export default Index;
