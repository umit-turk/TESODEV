import React, { useEffect, useState } from "react";
import styles from "./ListPage.module.css";


const ListPage = ({setFiltered ,filtered, setFiltertext, currentPosts }) => {
  const [toggle, setToggle] = useState(false)

 /*  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostPerPage] = useState(5)

  useEffect(() => {
    setPosts(filtered)
  })

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); */
  

  const handleClick = () => {
    setToggle(!toggle)
  }

  /* const [pageNumber, setPageNumber] = useState(0);

  const filteredItemPerPage = 6;
  const pageVisited = pageNumber * filteredItemPerPage;

  pageCount = Math.ceil(filtered.length / filteredItemPerPage); */

  

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
      
         {
           currentPosts.map((name, index) => (
            <div key={index} className={styles.container}>
            <div className={styles.list}>
              <div className={styles.name}>{name[0]}</div>
              <div className={styles.email}>{name[2]}</div>
            </div>
            <div className={styles.date}>{name[3]}</div>
            <div className={styles.line}></div>
          </div>
           ))
         }
         
    </div>
  );
};

export default ListPage;


/* 
/*  {filtered.map((item) =>
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
          )} */


