import './App.css';
import { useState } from 'react'
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  //puppies: value being stored.
  // setPuppies: function to reset values.
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  return (
    <>
      <div>
       {puppies.map((puppy) => {
        return (
        <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        )
       })}
       {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )} 
      </div> 
    </>
  )
  
}

export default App
