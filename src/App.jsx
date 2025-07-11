import Accordion from "./components/accordian/Accordian";
import ChipsInput from "./components/chipsInput/Chips";
import Greeting from "./components/dynamic-greeting/Greeting";
import ToggleButtonCustom from "./components/toggle-btn-custom/ToggleButtonCustom";
import items from "./utils/argument";

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
      <div className="component-section">
        <h2 className="section-title">Toggle Button with a Custom Hook</h2>
        <ToggleButtonCustom />
      </div>
      <div className="component-section">
        <h2 className="section-title">Accordion Component</h2>
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default App;
