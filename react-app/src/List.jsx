function List(props) {
  const itemList = props.items;
  const categories = props.category;
  const listItems = itemList.map((fruit) => (
    <li key={fruit.name}>
      {fruit.name}: &nbsp; {fruit.calories};
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{categories}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

export default List;
