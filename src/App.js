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
            />
            <Pagination />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
