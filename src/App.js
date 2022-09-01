import React, { useEffect, useState } from "react";
import axios from "axios";
import City from "./components/city";

function App() {
  
  const key = "7edf7eed5c4c1a774da2aa10b0f0de02";

  const[search,setSearch]=useState("");
  const[city,setCity]=useState();

  useEffect(()=>{
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[search])

  return (
    <div className="body">
      <input
      className="input"
      placeholder="select your city" 
      onChange={(e)=> setSearch(e.target.value)}
      />
      {city && <City city={city} />}
    </div>
  );
}

export default App;
