import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const pages = 9;
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];
    if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4,  "...", numberOfPages.length];

    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, "...", numberOfPages.length];

    } else if(currentButton > 4 && currentButton < numberOfPages.length - 2){
        const sliced1 = numberOfPages.slice(currentButton - 2, currentButton)
        const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)
        tempNumberOfPages = ([1, '...', ...sliced1, ...sliced2, '...', numberOfPages.length])

    } else if(currentButton > numberOfPages.length - 3){
        const sliced = numberOfPages.slice(numberOfPages.length - 4)
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
              onClick={() => setCurrentButton(page)}
              className={currentButton === page ? styles.active : ''}
            >
              {page}
            </a>
          );
        })}

        <a
          onClick={() =>
            setCurrentButton((prev) =>
              prev === numberOfPages.length ? prev : prev + 1
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
