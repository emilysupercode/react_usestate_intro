import React, { useState } from "react";
import './App.css';
import DayNightSwitch from "./components/daynight/DayNight";
import FAQSection from "./components/faq/FAQSection";
import ShowInput from "./components/input/Input";


function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="App">
      <section className="counterSection">
        <h1>1_1, Counter {count}</h1>
        <button className="button" onClick={() => setCount(count + 1)}>+</button>
        <button className="button" onClick={() => setCount(count - 1)}>-</button>
        <button className="button" onClick={() => setCount(0)}>reset</button>
      </section>
      <FAQSection />
      <DayNightSwitch />
      <ShowInput />
    </div>

  );
}

export default App;
