import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Card() {
    
  const {theam , setTheam} = useContext(UserContext)

  let toggleTheam = ()=>{
    setTheam(theam == "dark" ? "light" : "dark")
  }


  return (
    <>
      <div style={{ backgroundColor: "#123456" }}>{theam}</div>

      <button onClick={toggleTheam}>Change</button>
    </>
  );
}

export default Card;
