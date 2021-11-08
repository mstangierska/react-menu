import React, { useState } from "react";
import SingleQuestion from "./Question";
import data from "./data";

function App() {
  return (
    <main>
      <container className="container">
        <h2 className="title">Questions and answers about login</h2>
        <span className="info">
          {/* {data.map((question) => {
            return <SingleQuestion />; */}
          <SingleQuestion {...data[0]}></SingleQuestion>
          <SingleQuestion {...data[1]}></SingleQuestion>
          <SingleQuestion {...data[2]}></SingleQuestion>
          <SingleQuestion {...data[3]}></SingleQuestion>
          <SingleQuestion {...data[4]}></SingleQuestion>
        </span>
      </container>
    </main>
  );
}

export default App;
