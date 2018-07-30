import React from "react";
import css from "./home.css";

const Home = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <div className={css.home}>
          <div className={css.title}>App04</div>
          <div className={css.subtitle}>Dummy App</div>
          <div><a href="/dashboard">Dashboard</a></div>
          <div><a href="/profile">Profile</a></div>          
        </div>
      </div>
    </div>
  );
};

export default Home;
