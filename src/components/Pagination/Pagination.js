import React, { useState } from 'react'
import styles from './Pagination.module.css';

const Pagination = () => {

    const pages = 5
    const numberOfPages = []
    for(let i = 1; i <= pages; i++){
        numberOfPages.push(i)
    }

    const [currentButton, setCurrentButton] = useState(1);
    
    return (
        <div>
            <div className={styles.paginationcontainer}>
                <a  onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)} className={styles.previous} >Previous</a>
                {
                    numberOfPages.map(page => {
                        return (
                            <a className={currentButton === page && styles.active} href="!#">{page}</a>
                        )
                    })
                }
                
                
                <a onClick={() => setCurrentButton((prev) => prev === numberOfPages.length ? prev : prev + 1)} className={styles.next}>Next</a>
            </div>
        </div>
    )
}

export default Pagination
