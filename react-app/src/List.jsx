function List(props){

const itemList  = props.items;  
    const listItems = itemList.map(fruit => <li key={fruit.name}>{fruit.name}: &nbsp; {fruit.calories};</li>)   
    return ( <><h3>{listItems.calories}</h3><ol>{listItems}</ol></>);
};

export default List;