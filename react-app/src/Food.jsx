function Food(){
    const food1 = "Apple";
    const food2 = "Rice";
    const food3 = "Melon";

    return(
        <ul>
            <li>{food1.toUpperCase()}</li>
            <li>{food2.toLocaleUpperCase()}</li>
            <li>{food3.toLocaleUpperCase()}</li>
        </ul>
    );

}

export default Food;