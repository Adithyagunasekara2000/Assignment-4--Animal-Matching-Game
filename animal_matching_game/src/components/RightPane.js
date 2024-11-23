
import React from "react"
export default function RightPane({animals}){
    return(
        <div className="right">
            <h3>Select the Animal</h3>
           {
            animals.map((animal)=>(
                <img   src={require(`./fig/${animal.img}`)} alt={animal.name} />
            ))
           }
           <br/>
        </div>

    )
}