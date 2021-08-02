import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListPage from "./components/ListPage/ListPage";
import Pagination from "./components/Pagination/Pagination";
import axios from "axios";

function App() {
  const [results, setResults] = useState([]);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios("mockData.json").then((res) => setResults(res.data.data));
  }, []);

  // writen on search bar
  const [filterText, setFiltertext] = useState(
    localStorage.getItem("text") ? localStorage.getItem("text") : ""
  );

  localStorage.setItem("text", filterText);

  useEffect(() => {
    if (results.length) {
      setFiltered(
        results.filter((item) => {
          return Object.keys(item).some((key) =>
            item[key]
              .toString()
              .toLowerCase()
              .includes(filterText.toString().toLowerCase())
          );
        })
      );
    }
  }, [filterText, results]);

  useEffect(() => {
    console.log("result is changed");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  //////// pagination //////////

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  useEffect(() => {
    setPosts(filtered);
  });

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage
              handleSubmit={handleSubmit}
              filtered={filtered}
              results={results}
              setResults={setResults}
              filterText={filterText}
              setFiltertext={setFiltertext}
            />
          </Route>
          <Route path="/listpage">
            <ListPage
              filtered={filtered}
              setFiltertext={setFiltertext}
              currentPosts={currentPosts}
            />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
