import ChipsInput from "./components/chipsInput/Chips";
import Greeting from "./components/dynamic-greeting/Greeting";

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">Machine Coding Outputs</h1>

      <div className="component-section">
        <h2 className="section-title">Chips Input</h2>
        <ChipsInput />
      </div>

      <div className="component-section">
        <h2 className="section-title">Dynamic Greetings App</h2>
        <Greeting />
      </div>
    </div>
  );
};

export default App;
