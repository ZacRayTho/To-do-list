import { useState,useRef } from "react";
import Header from "./components/Header"
import Item from "./components/Item"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
    const inputRef = useRef(null);
    const [ items, SetItems ] = useState([]);

    function handleClick() {
        SetItems([ ...items, inputRef.current.value ])
    }

    return (
        <div className="text-center">
        <Header />
        <input type="text" placeholder="What to-do" ref={inputRef} />
        <button onClick={handleClick}>Submit</button> 
        <ul>
        {items.map( (item,index) => <Item key={index}>{item}</Item>)}
        </ul>
        </div>)
}

export default App