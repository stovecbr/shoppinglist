import './App.css';
import ShoppingList from './ShoppingList';
import React, { useState } from 'react'


const App = () => {

  const[items,setItems]= useState([]);

  return (
    <div className="App">
      <ShoppingList items={items} />
      <input type="text" />
    </div>
  );
}

export default App;