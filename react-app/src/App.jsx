import List from "./List";



function App() {

  const fruits = [
        {name:"apple", calories: 47},
        {name:"orange", calories:96},
        {name:"banana", calories: 45},
        {name:"coconut", calories:159}, 
        {name:"pineapple", calories: 37}];

  return(
 <div>
  <List items={fruits} category="Fruits"/>
 </div>
  );

}

export default App
