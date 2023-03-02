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

    return (
        <div className="d-flex justify-content-around">
            <div>{props.total} items</div>
            <div>
                <button onClick={() => props.SetView("All")}>All</button>
                <button onClick={() => props.SetView("Active")}>Active</button>
                <button onClick={() => props.SetView("Completed")}>Completed</button>
            </div>
            <button onClick={complete}>{text}</button>
        </div>
    )
}

export default Footer

//Add "view" Buttons
//total of list items active
//complete all and uncomplete all button