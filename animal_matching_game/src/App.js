import Header from "./components/Header";
import Body from "./components/Body";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";
import {animals} from "./data/AnimalsDb"
function App(){
  return (
  <div  className="main">
  <Header/>
  <LeftPane/>
  <Body/>
  <RightPane/>
 
  <RightPane animals={animals}/>
   
   </div>
)
}

export default App;