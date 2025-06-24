import ChipsInput from "./components/chipsInput/Chips";

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">Machine Coding Practice</h1>

      <div className="component-section">
        <h2 className="section-title">Chips Input</h2>
        <ChipsInput />
      </div>

      <div className="component-section">
        <h2 className="section-title">Password Strength</h2>
        {/* <PasswordStrength /> */}
      </div>
    </div>
  );
};

export default App;
