import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/agencies/list",
  params: { query: "patriot", hitsPerPage: "25", page: "0", lang: "en" },
  headers: {
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    "X-RapidAPI-Key": "420babb3c9msh8907855d720b7e8p147a1bjsn8d194e5e4b26",
  },
};

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      {data.map((d) => {
        return <div>{d.hits.name}</div>;
      })}
    </div>
  );
}

export default App;
