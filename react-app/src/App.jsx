function App() {
  const work = (param) => {
    return { toString: () => param }; // converting an ovbject property into string value
  };

  return (
    <>
      <h1>Hi. I am working as a {work("Software Engineer!").toString()}</h1>
    </>
  );
}

export default App;
