import './App.css';
import { useState } from 'react'
import {puppyList} from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
    //puppies: value being stored.
    // setPuppies: function to reset values.
  console.log(puppies)
  return (
    <>
      <div>
       {puppies.map((puppy) => {
        return <p key={puppy.id}>{puppy.name}</p>
       })}
      </div> 
    </>
  )
}

export default App
