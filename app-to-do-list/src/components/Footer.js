import { useState } from "react"
function Footer(props) {
    const [text, setText] = useState("Complete All")
    // console.log(props.checked)

    function complete() {
        // console.log("working")

        if (text === "Complete All") {
            setText("Uncomplete All")
            let swap = props.checked.map((item) => item = true);
            props.SetChecked([...swap])
        }
        else {
            setText("Complete All")
            let swap = props.checked.map((item) => item = false);
            props.SetChecked([...swap])
        }
    }

    function clearCompleted() {
        //while loop(don't make infinite loop)  
        // indexof(looking for true in checked array) != -1  -(indexof returns -1 if nothing found)
        //get all indexes of true value,compare those index to the index in items array
        //delete items that share index
        //props.Items.splice(props.id, 1) something like this JK DOESN'T WORK IN FOR LOOP
        //use setItems after all index found
        //Struggle bus ,kept going into props.checked array which only has boolean values not numbers so never incremented forward and causes lots of infinite loops

        // console.log(props.checked)

        let indices = [];
        // console.log(indices.length)
        // console.log(indices)
        if (props.checked.some((item) => item === true)) {

            do {
                // console.log((props.checked.indexOf(true, indices[indices.length - 1] + 1) !== -1))
                if (indices.length === 0) {
                    indices.push(props.checked.indexOf(true));
                }
                else {
                    indices.push(props.checked.indexOf(true, indices[indices.length - 1] + 1));
                }
                // console.log(props.checked[indices[indices.length - 1]]);
            }
            while (props.checked.indexOf(true, indices[indices.length - 1] + 1) !== -1);

            indices.reverse()
            // console.log(indices)
            for (let index of indices) {

                // console.log(props.items)
                // console.log(index)
                props.items.splice(index, 1)
                props.checked.splice(index, 1)
            }
            // console.log("before rerender", props.items, props.checked)
            props.SetItems([...props.items])
            props.SetChecked([...props.checked])
            props.SetTotal(props.items.length)
        }
    }

    return (
        <div className="d-flex justify-content-around">
            <div>{props.total} items</div>
            <div>
                <button onClick={() => props.SetView("All")}>All</button>
                <button onClick={() => props.SetView("Active")}>Active</button>
                <button onClick={() => props.SetView("Completed")}>Completed</button>
            </div>
            <button onClick={clearCompleted}>Clear Completed</button>
            <button onClick={complete}>{text}</button>
        </div>
    )
}

export default Footer

//Add "view" Buttons
//total of list items active
//complete all and uncomplete all button