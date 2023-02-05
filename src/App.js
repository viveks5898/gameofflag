import logo from "./logo.svg";
import "./App.css";
import nations from "./components/nations";
import "flag-icon-css/css/flag-icons.css";
import { useEffect, useState } from "react";
import { useRef } from "react";
function App() {
  const [country, setCountry] = useState([]);
  const [flags, setFlags] = useState({});
  const color = useRef(null);
  console.log(color)
  const createRandomNUmber = () => {
    let ar = [];
    for (let i = 0; i < 4; i++) {
      const num = Math.floor(Math.random() * nations.length);
      ar.push(nations[num]);
    }
    let index = Math.floor(Math.random() * 4);
    setFlags(ar[index]);
    setCountry(ar);
  };
  const checkAnswer = (cal) => {
    if (cal.name === flags.name) {
      console.log(color.current);
      color.current.style.backgroundColor = "green";
      setTimeout(() => {
        color.current.style.backgroundColor = "#0d6efd";
        nextQuesion();
      }, 2000);
    } else {
      console.log("not matched!");
    }
  };

  useEffect(() => {
    createRandomNUmber();
  }, []);

  const nextQuesion = () => {
    createRandomNUmber();
  };
  return (
    <div className="App">
      <h3>Game of Flags</h3>
      {flags.name ? (
        <span
          className={`flag-icon flag-icon-${flags["alpha-2"].toLowerCase()}`}
        ></span>
      ) : (
        ""
      )}
      <div className="btn-div">
        {country.map((ele, key) => (
          <button
            className="btn btn-primary"
            ref={color}
            key={key}
            onClick={(e) => checkAnswer(ele)}
          >
            {ele.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
