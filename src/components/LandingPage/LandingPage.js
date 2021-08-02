import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";


const LandingPage = ({setFiltertext ,filterText, filtered ,handleSubmit}) => {

  

  return (
    <div >
      <header>
        <img className={styles.image} src="/images/tesodev.svg" alt="logo" />
      </header>
      <p className={styles.text}>Search web app</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input}
            value={filterText}
            onChange={e => setFiltertext(e.target.value)}
          />
          <button type="submit" className={styles.btn}>Search</button>
        </div>

        <div className={styles.result}>
         {
           filtered.slice(0,3).map((name, index) => (
             <>
                <div key={index} className={styles.container}>
                  <div className={styles.name}>{name[0]}</div>
                  <div className={styles.email}>{name[2]}</div>
                </div>
                <div className={styles.date}>{name[3]}</div>
                <div className={styles.line}></div>
              </>
           ))
         }
          <div className={styles.showmore}>
            <Link to="/listpage">Show more...</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LandingPage;


/* 
 

*/
