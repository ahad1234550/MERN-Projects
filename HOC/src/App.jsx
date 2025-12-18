import React from "react";
import "./App.css";

function ButtonCounter({ count, setCount, label }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      {label}: {count}
    </button>
  );
}

function withCounter(WrappedComponent) {
  return function (props) {
    const [count, setCount] = React.useState(0);
    return <WrappedComponent count={count} setCount={setCount} {...props} />;
  };
}

const RedButton = withCounter(ButtonCounter);
const GreenButton = withCounter(ButtonCounter);
const BlueButton = withCounter(ButtonCounter);

function App() {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
      <RedButton label="Red Button" />
      <GreenButton label="Green Button" />
      <BlueButton label="Blue Button" />
    </div>
  );
}

export default App;
