function Item(props) {
    // console.log(props)
    //Gets props.Items array, returns an array without the item that matches prop.children of <li> that function was on
    function handleDelete() {
        // console.log(id);
        // console.log(props.Items)
        props.SetItems(props.Items.filter(item => item !== props.children))
    }

    return (
        <li className="d-flex justify-content-around">
            <input type="checkbox" id={props.id}/>
                <label htmlFor={props.id}>{props.children}</label>
            <button onClick={() => handleDelete()}>Remove</button>

            {/* onClick={(e) => {this.clickMe(e, someParameter);}}
            onClick={() => {e.preventDefault();removeItem(i.id, i.category, i.timeAdded)}} */}

        </li>
        )
}

export default Item