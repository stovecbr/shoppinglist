import './App.css';
// import ShoppingList from './components/ShoppingList';
// import React, { useState } from 'react';

const App = () => {

  // const[items,setItems]= useState([]);
  
  return (
    <div className="App">
      {/* <ShoppingList items={items} /> */}
      <div className='input-area'>
        <input type='text'  placeholder='Add an item...'></input>
        <button>+</button> 
      </div>
      
      <div className='shopping-list'>
        
          <input type="checkbox"></input>       
            item1  
          <button >＜</button>
            1個
          <button >＞</button>
       
        
      </div>
      <div className='shopping-list'>
        
          <input type="checkbox"></input>       
            item2  
          <button>＜</button>
            2個
          <button>＞</button>
       
        
      </div>
   

    </div>
  );
}

export default App;