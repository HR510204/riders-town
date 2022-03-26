import React from "react";
import styles from "./index.module.scss";
const index = props => {
  return (
    <section className={styles.modal}>
      <header className={styles.header}>
        <h2 className={styles.heading}>Forgot Password ?</h2>
      </header>
      <article className={styles.modalBody}>
        <p>Enter your registered Email ID and a link will be sent to your account.</p>
        <input className={styles.input} type="text" />
      </article>
    </section>
  );
};

export default index;
