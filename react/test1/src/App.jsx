
import './App.css'
import Test from "./Components/Test";


import {useState} from 'react'

const App = () => {
  const[name,setName]=useState("siri")
  return (
    <div>
      <center>
        <h1>{name}</h1>
        <br/>
        <button onClick={()=>setName("siri sree  Reddy")}>useState</button>
      </center>
    </div>
  )
}

export default App

