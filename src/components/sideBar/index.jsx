import React, { useState } from "react";
import styles from "./index.module.scss";
import Navigation from "../../data/navigation";
import { useHistory, useLocation } from "react-router-dom";

const Index = props => {
  const history = useHistory();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.substring(1));
  const handleNav = name => {
    if (name !== "logout") {
      setActive(name);
      history.push(name);
    }
    name === "logout" && console.log("logout:");
  };
  const navList = Navigation.map(({ name, id, route }) => (
    <li onClick={() => handleNav(route)} className={active === route ? styles.active : styles.item} key={id}>
      {name}
    </li>
  ));
  return (
    <header className={styles.sidebar}>
      <h2 onClick={() => {}} className={styles.heading}>
        Riders <span>Town</span>
      </h2>
      <nav className={styles.navigationList}>{navList}</nav>
    </header>
  );
};

export default Index;
