import { useState } from "react";
import  Axios  from "axios";
import "./App.css";

function App() {
  const [excuse, setExcuse] = useState("");
  const fetchApi = (key) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${key}/`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
      }
    );
  };
  const handleClick = () => {
    if (event.target.innerHTML === "Party") {
      fetchApi("party");
    } else if (event.target.innerHTML === "Family") {
      fetchApi("family");
    } else if (event.target.innerHTML === "Office") {
      fetchApi("office");
    }
  };
  return (
    <>
      <div onClick={handleClick}>
        <button>Party</button>
        <button>Family</button>
        <button>Office</button>
      </div>
      <h2>{excuse}</h2>
    </>
  );
}

export default App;
