function List(){

    

        // Sorting an array objects
        fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
        fruits.sort((a,b) => b.name.localeCompare(a.name));// REVERSE ALPHABETICAL
        fruits.sort((a,b) => a.calories - b.calories); //NUMERIC
        fruits.sort((a,b) => b.calories - a.calories); // REVERSE NUMERIC
    
    const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}: &nbsp; {fruit.calories};</li>)
    

    return ( <ol>{listItems}</ol>);
};

export default List;