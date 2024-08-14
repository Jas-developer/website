import Learning from "./Learning";
import MyForm from "./Forms";
function App() {
  const work = (param) => {
    return { toString: () => param }; // converting an ovbject property into string value
  };

  return (
    <>
      <h1>Hi. I am working as a {work("!").toString()}</h1>
      <h2>This is the fruits {<Learning />}</h2>
      <br />
      <h2>This is my form</h2>
      <MyForm />
    </>
  );
}

export default App;
