import React, {useState} from 'react';
import './App.css';
import Todoborad from "./components/TodoBoard"

function App(){
    const [inputValue, settInputValue] = useState('')
    const [todoList, setTodoList] = useState([])
        const addItem = () =>{
            console.log("im herererere!", inputValue)
            setTodoList([...todoList, inputValue])
        }
    return(
        <main>
            <input value = {inputValue} type = "text" onChange={(event)=>settInputValue(event.target.value)}/>
            <button on onClick={addItem}>추가</button>

            <Todoborad/>
        </main>
    );
}

export default App;