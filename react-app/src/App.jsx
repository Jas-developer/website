import FormInput from "./components/FormInput";
import "././App.css";

function App() {
  return (
    <div className="app">
      <form>
        <FormInput placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Sth Else" />
      </form>
    </div>
  );
}

export default App;
