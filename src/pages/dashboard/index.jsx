import React, { useState } from "react";
import styles from "./index.module.scss";
import Loader from "../../components/loader";
const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleSubmit = e => {
    e.preventDefault();
    console.log("formsubmit");
  };
  return (
    <div className={styles.dashboard}>
      {loading && <Loader />}
      <header className={styles.header}>
        <form className={styles.form} onSubmit={e => handleSubmit(e)}>
          <div className={styles.inputContainer}>
            <input className={styles.input} type="text" placeholder="Search...." />
            <button className={styles.submit} type="submit">
              search
            </button>
          </div>
        </form>
      </header>
    </div>
  );
};

export default Index;
