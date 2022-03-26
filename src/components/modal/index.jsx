import React, { useState } from "react";
import Button from "../button";
import styles from "./index.module.scss";
import SuccessModal from "../successModal";
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
            <p>Enter your registered Email ID and a link will be sent to your account.</p>
            <input className={styles.input} type="text" />
            <Button onClick={() => handlePassword()} className={styles.button} buttonType="primary">
              click me
            </Button>
          </article>
        </section>
      )}
      {modal && <SuccessModal />}
    </>
  );
};

export default Index;
