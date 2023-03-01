function Item(props) {
    return (
        <li className="d-flex justify-content-between">
            <input type="checkbox" />
                <label>{props.children}</label>
            <button>Remove</button>
        </li>
        )
}

export default Item