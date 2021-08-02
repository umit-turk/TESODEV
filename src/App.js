import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListPage from "./components/ListPage/ListPage";
import data from "../src/Data/data.json";
import Pagination from "./components/Pagination/Pagination";
function App() {
  const [search, setSearch] = useState("");
  console.log(data);

  const filteredUsers = data.filter((item) => {
    return item.data[0][0].toLowerCase().includes(search.toLowerCase());
  });



  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage
              search={search}
              setSearch={setSearch}
              filteredUsers={filteredUsers}
              handleSubmit={handleSubmit}
            />
          </Route>
          <Route path="/listpage">
            <ListPage
            filteredUsers={filteredUsers}
              setSearch={setSearch}
              search={search}
            />
            <Pagination />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
