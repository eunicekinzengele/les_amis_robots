import logo from './logo.svg';
import './App.css';
import "./style.css";
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

const [searchName, setSearchName]= useState("");



const [imgRobot, setimgRobot] = useState([])
const [data, setData]= useState([])
const [images, setImages] = useState([])
useEffect (()=>{

    console.log(data);
 axios.get (
'https://jsonplaceholder.typicode.com/users',
).then((response) => setData(response.data))

// axios.get('https://robohash.org/10').then((response) => setImages(response.data))

}, []);
console.log(data);
//   console.log(images);
  return (
    <>

<h1>MES AMIS ROBOTS </h1>

<p className="input">
  <input type="text" placeholder='rechercher par nom' onChange={(e) =>setSearchName(e.target.value)}/>

  </p>

<div className="robot__container">
     <div className="list_1">
        {
           data.filter((value)=> {
               if(searchName.length < 3){
                return value
               } else if(value.name.toLowerCase().includes(searchName.toLowerCase())){
                   return value
               }
               
           }

           )
           
           .map(robot=>(
            <div className="robot_1" key={robot.id}>
                 <img className="premier" src={`https://robohash.org/${robot.id}`}/>
                 <h3>{robot.name}</h3>
                 <p>{robot.email}</p>
            </div>
            )
            
            )
        }

     </div>  
</div>

    </>
  );
}

export default App;
