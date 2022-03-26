import React, { useState } from "react";
import Button from "../button";
import styles from "./index.module.scss";

const Index = props => {
  const [modal, setModal] = useState(false);
  const handlePassword = () => {
    setModal(true);
  };
  return (
    <>
      {!modal && (
        <section className={styles.modal}>
          <header className={styles.header}>
            <h2 className={styles.heading}>Forgot Password ?</h2>
          </header>
          <article className={styles.modalBody}>
            <p className={styles.content}>Enter your registered Email ID and a link will be sent to your account.</p>
            <input className={styles.input} type="text" />
            <Button onClick={() => handlePassword()} className={styles.button} buttonType="primary">
              click me
            </Button>
          </article>
        </section>
      )}
      {modal && (
        // <section className={styles.modal}>
        //   <header className={styles.header}>
        //     <h2 className={styles.heading}>Forgot Password ?</h2>
        //   </header>
        //   <article className={styles.modalBody}>
        //     <p className={styles.content}>
        //       A forgot password link has been sent to your registered Email ID.
        //       <br /> Please check your Email ID to confirm.
        //     </p>
        //   </article>
        // </section>
        <></>
      )}
      {modal && (
        <section className={styles.modal}>
          <header className={styles.header}>
            <h2 className={styles.heading}>Forgot Password ?</h2>
          </header>
          <article className={styles.modalBody}>
            <h4 className={styles.error}>Invalid Email ID</h4>
            <p className={styles.content}>Please enter a valid Email ID that is registered with your account.</p>
          </article>
        </section>
      )}
    </>
  );
};

export default Index;
