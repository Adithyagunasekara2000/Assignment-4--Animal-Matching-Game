import Header from "./components/Header";
import Body from "./components/Body";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";
import {animals} from "./components/AnimalsDb"
import { useEffect, useState } from "react";

function App(){
  const [randomAnimal,setRandomAnimal]=useState({});
  const [result,setResult]=useState('');
 

  useEffect(()=>{
  generate();
   })
  const generate=()=>{
    const randomIndex=Math.floor(Math.random() * animals.length) + 1;
    setRandomAnimal(animals[randomIndex])
   }
  const handleAnimal=(selectedAnimal)=>{
    if(selectedAnimal.name===randomAnimal.name){
      setResult("WIN")
    }
    else{
      setResult("LOSE")
    }
    generate();
  };

  return (
  <div  className="main">
  <Header/>
  
  <LeftPane result={result}/>
  <Body name={randomAnimal.name}/>
  <RightPane animals={animals} AnimalClick={handleAnimal}/> 
 
   </div>
)
}

export default App;