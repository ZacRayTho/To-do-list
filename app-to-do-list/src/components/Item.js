function Item(props) {
    // console.log(props)
    //Gets props.Items array, returns an array without the item that matches prop.children of <li> that function was on
    function handleDelete() {
        // console.log(id);
        // console.log(props.Items)
        props.SetItems(props.Items.filter(item => item !== props.children))
        props.SetTotal(props.Items.length - 1)
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
                <label htmlFor={props.id}>{props.children}</label>
            <button onClick={() => handleDelete()}>Remove</button>

            {/* onClick={(e) => {this.clickMe(e, someParameter);}}
            onClick={() => {e.preventDefault();removeItem(i.id, i.category, i.timeAdded)}} */}

        </li>
        )
}

export default Item