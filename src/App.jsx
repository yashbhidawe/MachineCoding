import Accordion from "./components/accordian/Accordian";
import AgeCalculator from "./components/age-calculator/AgeCalculator";
import AsteriskFieldValidation from "./components/asterisk-field-validation/AsteriskFieldValidation";
import ChipsInput from "./components/chipsInput/Chips";
import ConfirmationModal from "./components/confirmation-modal/ConfirmationModal";
import ContactForm from "./components/contact-form/ContactForm";
import DrawCircles from "./components/draw-circles/DrawCircles";
import Greeting from "./components/dynamic-greeting/Greeting";
import FaqAccordion from "./components/faq/FAQAccordian";
import Pagination from "./components/pagination/Pagination";
import PinItems from "./components/pin-items/PinItems";
import TabSwitcher from "./components/tab-switcher/TabSwitcher";
import ToggleButtonCustom from "./components/toggle-btn-custom/ToggleButtonCustom";
import TogglePassword from "./components/toggle-password/TogglePassword";
import ZigzagString from "./components/zigzag-string/ZigzagString";
import items from "./utils/argument";

const App = () => {
  return (
    <div className="app">
      <div className="flex">
        <h1 className="app-title">Machine Coding Outputs</h1>

        <button className="github-btn">
          <a
            href="https://github.com/yashbhidawe/machineCoding"
            target="_blank"
          >
            View Source-Code
          </a>
        </button>
      </div>

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
      <div className="component-section">
        <h2 className="section-title">Paginated Component</h2>
        <Pagination />
      </div>
      <div className="component-section">
        <h2 className="section-title">Contact Form</h2>
        <ContactForm />
      </div>
      <div className="component-section">
        <h2 className="section-title">Toggle Password</h2>
        <TogglePassword />
      </div>
      <div className="component-section">
        <h2 className="section-title">Tab Switcher</h2>
        <TabSwitcher />
      </div>
      <div className="component-section">
        <h2 className="section-title">Age Calculator</h2>
        <AgeCalculator />
      </div>
      <div className="component-section">
        <h2 className="section-title">Confirmation Modal</h2>
        <ConfirmationModal />
      </div>
      <div className="component-section">
        <h2 className="section-title">Pin Items</h2>
        <PinItems />
      </div>
      <div className="component-section">
        <h2 className="section-title">Asterisk Field Validation</h2>
        <AsteriskFieldValidation />
      </div>

      <div className="component-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <FaqAccordion />
      </div>
      <div className="component-section">
        <h2 className="section-title">Draw Cirlces</h2>
        <DrawCircles />
      </div>
      <div className="component-section">
        <h2 className="section-title">Zigzag String</h2>
        <ZigzagString />
      </div>
    </div>
  );
};

export default App;
