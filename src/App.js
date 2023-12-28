
import React, { useState } from 'react';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem(){
    console.log(newItem);

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id){
    console.log(id);

    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>

      <input
        type="text"
        placeholder="Add new item ..."
        value={newItem}
        onChange={e=>setNewItem(e.target.value)}
      />

      <button onClick={()=>addItem()}>Add</button>

      <ul>
        {items.map(item =>
          <li key={item.id}>{item.value} <button className='delete-button' onClick={()=>deleteItem(item.id)}>X</button></li> 
          )}
      </ul>

    </div>
  );
}

export default App;
