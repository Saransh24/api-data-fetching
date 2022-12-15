import './App.css';
import { useState } from 'react';

function App() {
  
  const [fact,setFact] = useState("");

  const updateFact = () =>{
    fetch("https://catfact.ninja/fact").then((response)=>response.json()).then((data)=>{
      setFact(data.fact);
    })
  }

  return (
    <div className="App bg-black w-screen h-screen">

      <button onClick={updateFact} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg py-1 px-2 mt-1">Show cat fact</button>
      <br />
      <h1 className="mt-10 text-lg text-white animate-pulse">{fact}</h1>
    </div>
  );
}

export default App;
