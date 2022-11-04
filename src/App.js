import './App.css';
// import ShoppingList from './components/ShoppingList';
import React, { useEffect, useState } from 'react';

const App = () => {

  // 値の入力用ステート
  const[input,setInput] = useState(""); 
  
  // const[color,setColor] = useState("black");

  // アイテム格納用ステート　オブジェクトの配列
  const [items, setItems] = useState([
    // 初期値
    {itemName:"item 1", quantity: 2},
    {itemName:"item 2", quantity: 1},
    {itemName:"item 3", quantity: 2},
    {itemName:"item 4", quantity: 3},
   ]);

  //  合計の計算用ステート
   const[total,setTotal] = useState(0); 


 // ＜ボタンクリックで-1する
    const handleClickDown =(index)=>{
       const newCount = [...items];
    //  newCount[index].quantity = newCount[index].quantity-1;
       newCount[index].quantity--;

       if(newCount[index].quantity<0){      
        newCount[index].quantity=0;
        setItems(newCount);
       }else{
        setItems(newCount);
       }
   };


  // ＞ボタンクリックで+1する
  const handleClickUp =(index)=>{
    const newCount = [...items];
  // newCount[index].quantity = newCount[index].quantity+1;
    newCount[index].quantity++; 
  
    setItems(newCount);
  };


// ＋ボタンクリック
// アイテム追加
  const onCLickAdd = () =>{
    if (input === "") return;
    // アイテム名:入力した値　初期値:１
    const newShoppingList = {itemName:input, quantity: 1}
    // 既存のアイテムに上記のアイテムを追加
    const newItems = [...items,newShoppingList];
    // ショッピングリストを更新
    setItems(newItems);
    // 入力欄を空にする
    setInput("");
    
  }

  // 入力した値を反映する
  const onChangeItems = (event) =>setInput(event.target.value);

  // const changeColor = (event) =>setItems(event.target.value);


  // 合計の計算
  const totalQuantity = () =>{
    let currentTotal = 0;
    items.map((item)=>{
      currentTotal = currentTotal + item.quantity;
    });
    setTotal(currentTotal);
  }

useEffect(() =>{
  totalQuantity();
},[items]);

  return (
    <div className="App">

      <div className='input-area'>

      {/* 入力欄 */}
        <input
          placeholder='Add an item...'
          value={input}
          onChange={onChangeItems}
        ></input>

      {/* ＋ボタンでアイテム追加 */}
        <button onClick={onCLickAdd} >+</button> 
        
      </div>
      
      <div className='shopping-list'>
           
      <ul>
        {items.map((item,index)=>{
          return(
            
            <div key={index} className="list-row">
              
                <li >
                  <input type="checkbox" ></input>
                  {/* アイテム名を表示 */}
                    {item.itemName}
                    
                  <button  onClick={()=>handleClickDown(index) } >＜</button>
                  {/* <button >＜</button> */}

                    {/* 個数を表示 */}
                   
                   {item.quantity}

                  <button onClick={()=>handleClickUp(index)}>＞</button>
                  {/* <button >＞</button> */}

                
                </li>
                       
            </div>
          );
        })}

      </ul>
        <ul>
          <div className='total'>
         <li>
          total:{total}
          {/* <button>calculate</button> */}
         </li>
         </div>
        </ul>
      </div>

    </div>
  );
}

export default App;