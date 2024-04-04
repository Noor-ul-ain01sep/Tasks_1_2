import React, { useState } from 'react'
import './Taskone.css';
export const Taskone = () => {
     const initialFruits = [
        'apple', 'mango', 'orange', 'apricot', 'pomegranate', 'banana', 'grapes', 'fig',
        'strawberry', 'watermelon', 'melon', 'kiwi', 'pineapple', 'pear', 'plum', 'cherry',
        'blueberry', 'raspberry', 'blackberry', 'peach'
      ]; 
      const[slicedFruit,setSlicedFruits]=useState(initialFruits.slice(0,10));
      const [newFruit,setNewFruit]=useState('');
      const[addFruit,setaddfruit]=useState([]);


      const AddMore =()=>
      {
        if(newFruit.trim() !=='')
        {
             setSlicedFruits([...slicedFruit]);
             setaddfruit([...addFruit,newFruit]);
             setNewFruit(''); // clear after adding a fruit
        }
      };
      const deletefruits=(indexToDelete)=>
      {
        setSlicedFruits(slicedFruit=>slicedFruit.filter((fruit,index)=>index !== indexToDelete))
        setaddfruit(addFruit=>addFruit.filter((fruit,index)=>index !==indexToDelete))
      };
      const showTwoItems = () => {
        setSlicedFruits(slicedFruit => [...slicedFruit, ...initialFruits.slice(slicedFruit.length, slicedFruit.length + 2)]);
      };
    
  return (
    <div class="container">
      <h1>Fruits names</h1>
        <input type="text" value={newFruit} placeholder='Enter new Fruit' onChange={e=>setNewFruit(e.target.value)}/>
        <button class="btn1" onClick={AddMore}>Add More</button>
        <ol>
       <div class="lists">
        {slicedFruit.map((fruit,index)=>(
            <li key={index}>{fruit}
            <button class="btn2" onClick={() => deletefruits(index)}>Delete Fruits</button>
            </li>
           ) )}

            {addFruit.map((fruit,index)=>(
            <li key={index}>{fruit}
           <button class="btn2" onClick={() => deletefruits(index)}>Delete Fruits</button>
            </li>
           ) )}
          </div>
          <button class="btn3" onClick={showTwoItems}>Show more</button>
        </ol>
    </div>
  )
}
