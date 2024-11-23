import { animals } from './AnimalsDb';
import RightPane from './RightPane';
import './style.css'
import {useState} from 'react' 

export default function Body({result}){
  

    return (
        <div className="content">
        <h3>Animal Name</h3>
        <p>{result}</p>
            
        
        </div>
    );
}