import React from "react";
import css from "./home.css";

const Home = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <div className={css.home}>
          <div className={css.title}>App02</div>
          <div className={css.subtitle}>App number two</div>
          <div>Login</div>
          <div>Signup</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
