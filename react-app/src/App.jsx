import Learning from "./Learning";
function App() {
  const work = (param) => {
    return { toString: () => param }; // converting an ovbject property into string value
  };

  return (
    <>
      <h1>Hi. I am working as a {work("Software Engineer!").toString()}</h1>
      <h2>This is the fruits {<Learning />}</h2>
    </>
  );
}

export default App;
