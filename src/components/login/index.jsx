import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../button";
import styles from "./index.module.scss";
const Index = props => {
  const history = useHistory();

  const handleForm = e => {
    e.preventDefault();
    props.onHeader(false);
    props.login(true);
    history.replace("/");
  };
  return (
    <section className={styles.login}>
      <h3 className={styles.heading}>
        Riders <span>Town</span>
      </h3>
      <form onSubmit={handleForm}>
        <div className={styles.inputField}>
          <label className={styles.labels} htmlFor="email">
            Email ID or Admin Name
          </label>
          <input className={styles.input} name="email" type="text" />
        </div>
        <div className={styles.inputField}>
          <label className={styles.labels} htmlFor="password">
            Password
          </label>
          <input className={styles.input} name="password" type="password" />
        </div>
        <Button buttonType="primary" type="submit">
          Login
        </Button>
      </form>
      <span onClick={() => props.onForgotPassword(true)} className={styles.forgot}>
        Forgot Password ?
      </span>
    </section>
  );
};

export default Index;
