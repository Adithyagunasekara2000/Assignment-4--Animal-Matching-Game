import { animals } from './AnimalsDb';
import RightPane from './RightPane';
import './style.css'
import {useState} from 'react' 

export default function Body({animals,name}){
  

    return (
        <div className="content">
        <h3>Animal Name</h3>
        <p>{name}</p>
            
        
        </div>
    );
}