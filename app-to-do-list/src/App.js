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
    // console.log("checked", checked)
    // console.log("items", items)
    // console.log(view)
    function handleClick() {
        let updatedItems = [...items, inputRef.current.value]
        inputRef.current.value = null;
        SetItems(updatedItems)
        SetChecked([ ...checked, false])
        SetTotal(updatedItems.length)
    }
    

    function renderSwitch(param) {
        switch(param) {
          case "All":
            return ( <>{items.map((item, index) => <Item 
                SetItems={SetItems} 
                Items={items}  
                id={index} 
                key={index} 
                SetTotal={SetTotal}
                checked={checked}
                SetChecked={SetChecked}
                >
                {item}
                </Item>)} </>)
            
          case "Active":
            return ( <>{items.map((item, index) => <Item 
                SetItems={SetItems} 
                Items={items}  
                id={index} 
                key={index} 
                SetTotal={SetTotal}
                checked={checked}
                SetChecked={SetChecked}
                >
                {item}
                </Item>).filter((item, index) => checked[index] === false)} </>);
            
          case "Completed":
            return ( <>{items.map((item, index) => <Item 
                SetItems={SetItems} 
                Items={items}  
                id={index} 
                key={index} 
                SetTotal={SetTotal}
                checked={checked}
                SetChecked={SetChecked}
                >
                {item}
                </Item>).filter((item, index) => checked[index] === true)} </>);
           default:
            return "¯\\_(ツ)_/¯" 
        }
      }

    // const handleDelete = (id) => {
    //     setContacts(contacts.filter(item => item.id !== id));
    //   };


    //Items in state array,so "view" conditionally renders based on checked array values
    return (
        <div className="text-center">
            <Header />
            <input type="text" placeholder="What to-do" ref={inputRef} />
            <button onClick={handleClick}>Submit</button>
            <ul>
                {renderSwitch(view)}
                
            </ul>
            <Footer total={total} checked={checked} SetChecked={SetChecked} items={items} SetItems={SetItems} SetView={SetView}/>
        </div>)
}

export default App