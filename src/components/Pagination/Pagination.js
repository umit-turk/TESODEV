import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({totalPosts, postsPerPage, paginate}) => {

  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];
    if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4,  "...", pageNumbers.length];

    } else if (currentButton === 4) {
      const sliced = pageNumbers.slice(0, 5);
      tempNumberOfPages = [...sliced, "...", pageNumbers.length];

    } else if(currentButton > 4 && currentButton < pageNumbers.length - 2){
        const sliced1 = pageNumbers.slice(currentButton - 2, currentButton)
        const sliced2 = pageNumbers.slice(currentButton, currentButton + 1)
        tempNumberOfPages = ([1, '...', ...sliced1, ...sliced2, '...', pageNumbers.length])

    } else if(currentButton > pageNumbers.length - 3){
        const sliced = pageNumbers.slice(pageNumbers.length - 4)
        tempNumberOfPages = ([1, '...', ...sliced])
    }
    setArrOfCurrButtons(tempNumberOfPages);
  }, [currentButton]);

  return (
    <div>
      <div className={styles.paginationcontainer}>
        <a
          onClick={() =>
            setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
          }
          className={styles.previous}
        >
          Previous
        </a>
        {arrOfCurrButtons.map((page, index) => {
          return (
            <a
            key={index}
              onClick={() => paginate(page)}
              className={currentButton === page ? styles.active : ''}
            >
              {page}
            </a>
          );
        })}

        <a
          onClick={() =>
            setCurrentButton((prev) =>
              prev === pageNumbers.length ? prev : prev + 1
            )
          }
          className={styles.next}
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default Pagination;
