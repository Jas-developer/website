import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React for context api!</h1>
    </UserContextProvider>
  );
}

export default App;
