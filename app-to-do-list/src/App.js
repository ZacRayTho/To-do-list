import { useState } from "react";
import Header from "./components/Header"
import Item from "./components/Item"

function App() {
    const { items, SetItems } = useState([]);


    return (
        <>
        <Header />
        <input type="text" placeholder="What to-do" onClick={SetItems()}/> 
        {/* <ul>
            {items.map(item => <li>{item}</li>)}
        </ul> */}
        </>)
}

export default App