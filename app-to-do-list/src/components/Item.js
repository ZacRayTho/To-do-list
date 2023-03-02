function Item(props) {
    // console.log(props)
    //Gets props.Items array, returns an array without the item that matches prop.children of <li> that function was on
    // console.log("after delete", props.Items.length)
    function handleDelete() {
        // console.log(id);
        // console.log(props.Items)
        // splice("where to start", "how many items to delete")
        // splice returns array of deleted items

        //did have a filter function but props.Items only contains text,not ids so it would delete items with same text and mess with props.checked array
        // deletes item at id 
        props.Items.splice(props.id, 1)
        //return new Items array with item deleted
        props.SetItems([ ...props.Items ])

        props.SetTotal(props.Items.length)

        //deletes item in checked array at same ID
        props.checked.splice(props.id, 1);
        props.SetChecked([ ...props.checked ])
    }
    // console.log(props.checked)
    function handleChange() {
        //duplicate checked array
        let test = props.checked;
        //based on id of Item, change the boolean value to the opposite of what it is currently
        test[props.id] = (!test[props.id]);
        //set new checked array to test array
        props.SetChecked([ ...test ])
    }

    // console.log("before item return", props.checked[props.id])

    return (
        <li className="d-flex justify-content-around">
            <input type="checkbox" checked={props.checked[props.id]} id={props.id} onChange={handleChange}/>
                <label className={`${props.checked[props.id] === true ? "text-decoration-line-through" : null}`} htmlFor={props.id}>{props.children}</label>
            <button onClick={() => handleDelete()}>Remove</button>

            {/* onClick={(e) => {this.clickMe(e, someParameter);}}
            onClick={() => {e.preventDefault();removeItem(i.id, i.category, i.timeAdded)}} */}

        </li>
        )
}

export default Item