import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

// importing components

import Question from "./components/Question/Question";

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/questions")
      .then((res) => {
        return res.data; // Used res.data instead of res.json()
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []); // Added an empty dependency array to run the effect only once

  return (
    <>
      <h1>React questions</h1>
      {data.length !== 0 ? (
        <>
          {" "}
          {data.map((que, index) => {
            return (
              <Question
                key={index}
                question={que.question}
                answer={que.answer}
              />
            );
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
