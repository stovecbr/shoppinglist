import './App.css';
// import ShoppingList from './components/ShoppingList';
import React, { useState } from 'react';

const App = () => {

  
  const[count,setCount]=useState(0);
  const[items,setItems]= useState("");

  const[shoppingList,setShoppingList] = useState(["item1","item2"]);
  
  // ＜ボタンクリック
  const handleClickDown =()=>{
    const newCount = count-1;
    setCount(newCount);
  };
  // ＞ボタンクリック
  const handleClickUp =()=>{
    const newCount = count+1;
    setCount(newCount);
  };

  // ＋ボタンクリック
  const onCLickAdd = () =>{
    if (items === "") return;
    const newItems = [...shoppingList,items];
    setShoppingList(newItems);
    setItems("");
  }

  // 入力した値を反映する
  const onChangeItems = (event) =>setItems(event.target.value);


  return (
    <div className="App">
      {/* <ShoppingList items={items} /> */}

      <div className='input-area'>
        <input
          placeholder='Add an item...'
          value={items}
          onChange={onChangeItems}
          ></input>

        <button onClick={onCLickAdd}>+</button> 
      </div>
      
      <div className='shopping-list'>

           
      <ul>
        {shoppingList.map((item,index)=>{
          return(
            
            <div key={index} className="list-row">
              
                <li>
                  <input type="checkbox" ></input>
                    {item}
                  <button onClick={handleClickDown}>＜</button>
                    {count}
                  <button onClick={handleClickUp}>＞</button>
                </li>
              
            </div>
            
          );
        })}

      </ul>
        
      </div>

    </div>
  );
}

export default App;