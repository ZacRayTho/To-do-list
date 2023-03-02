import { useState, useRef } from "react";
import Header from "./components/Header"
import Item from "./components/Item"
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


function App() {
    const inputRef = useRef(null);
    const [items, SetItems] = useState([]);
    const [view, SetView] = useState("All");
    const [total, SetTotal] = useState("0")
    //checked can be array of true/false and use individual items id to grab correct item
    const [checked, SetChecked] = useState([])
    console.log("checked", checked)
    console.log("items", items)

    function handleClick() {
        let updatedItems = [...items, inputRef.current.value]
        SetItems(updatedItems)
        SetChecked([ ...checked, false])
        SetTotal(updatedItems.length)
    }



    // const handleDelete = (id) => {
    //     setContacts(contacts.filter(item => item.id !== id));
    //   };

    return (
        <div className="text-center">
            <Header />
            <input type="text" placeholder="What to-do" ref={inputRef} />
            <button onClick={handleClick}>Submit</button>
            <ul>
                {items.map((item, index) => <Item 
                                            SetItems={SetItems} 
                                            Items={items}  
                                            id={index} 
                                            key={index} 
                                            SetTotal={SetTotal}
                                            checked={checked}
                                            SetChecked={SetChecked}
                                            >
                                            {item}
                                            </Item>)}
            </ul>
            <Footer total={total} checked={checked} SetChecked={SetChecked} />
        </div>)
}

export default App