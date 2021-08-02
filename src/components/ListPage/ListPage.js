import React, { useEffect, useState } from "react";
import styles from "./ListPage.module.css";

const ListPage = ({ setFiltered, filtered, setFiltertext, currentPosts }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  ///// asc dsc

  const sortNameAsc = () => {
    let arrCopy = [...filtered];
    arrCopy.sort();
    setFiltered(arrCopy);
  };

  const sortNameDes = () => {
    let arrCopy = [...filtered];
    arrCopy.sort().reverse();
    setFiltered(arrCopy);
  };

  const sortDateAsc = () => {
    let arrCopy = [...filtered];
    arrCopy.map((item) => (item[3] = item[3].split("/").reverse().join("/")));
    console.log(arrCopy);

    arrCopy.sort((a, b) => (a[3] > b[3] ? 1 : -1));

    let newArr = arrCopy.map((it) => [
      ...it,
      (it[3] = it[3].split("/").reverse().join("/")),
    ]);
    setFiltered(newArr);
  };

  const sortDateDes = () => {
    let arrCopy = [...filtered];
    arrCopy.map((it) => [
      ...it,
      (it[3] = it[3].split("/").reverse().join("/")),
    ]);

    arrCopy.sort((a, b) => (a[3] < b[3] ? 1 : -1));
    let newArr = arrCopy.map((it) => [
      ...it,
      (it[3] = it[3].split("/").reverse()),
    ]);
    setFiltered(newArr);
  };

  return (
    <div>
      <header>
        <div>
          <img className={styles.logo} src="/images/logo.svg" alt="" />
        </div>
        <div>
          <input
            className={styles.input}
            value={localStorage.getItem("text")}
            onChange={(e) => setFiltertext(e.target.value)}
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
          <span onClick={handleClick} className={styles.ordertext}>
            Order By
          </span>
        </div>
        {toggle ? (
          <ul className={styles.modal}>
            <li onClick={sortNameAsc}>Name ascending</li>
            <li onClick={sortNameDes}>Name descending</li>
            <li onClick={sortDateAsc}>Year ascending</li>
            <li onClick={sortDateDes}>Year descending</li>
          </ul>
        ) : null}
      </div>

      {currentPosts.map((name, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.list}>
            <div className={styles.name}>{name[0]}</div>
            <div className={styles.email}>{name[2]}</div>
          </div>
          <div className={styles.date}>{name[3]}</div>
          <div className={styles.line}></div>
        </div>
      ))}
    </div>
  );
};

export default ListPage;
