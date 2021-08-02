import React, { useState } from "react";
import styles from "./ListPage.module.css";


const ListPage = ({filteredUsers, search, setSearch }) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <header>
        <div>
          <img className={styles.logo} src="/images/logo.svg" alt="" />
        </div>
        <div>
          <input
            className={styles.input}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <button className={styles.btn}>Search</button>
        </div>
      </header>
      <div className={styles.order}>
        <div>
          <img className={styles.orderlogo} src="/images/orderlogo.svg" />
        </div>
        <div>
          <span  onClick={handleClick} className={styles.ordertext}>Order By</span>
        </div>
        {
          toggle ? (<ul className={styles.modal}>
          <li >Name ascending</li>
          <li >Name descending</li>
          <li >Year ascending</li>
          <li >Year descending</li>
          </ul>): null
        }
      </div>
      
          {filteredUsers.map((item) =>
            item.data.slice(0, 6).map((name) => (
              <div className={styles.container}>
                <div className={styles.list}>
                  <div className={styles.name}>{name[0]}</div>
                  <div className={styles.email}>{name[2]}</div>
                </div>
                <div className={styles.date}>{name[3]}</div>
                <div className={styles.line}></div>
              </div>
            ))
          )}
         
    </div>
  );
};

export default ListPage;


