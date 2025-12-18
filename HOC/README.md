This project demonstrates how to use a Higher-Order Component (HOC) in React to reuse logic across multiple components.

We create a button counter that can be used in multiple places, each maintaining its own independent state, without duplicating code.

Key Concepts
1️⃣ Base Component
function ButtonCounter({ count, setCount, label }) { ... }


A simple button component that displays a count and increments it when clicked.

Does not manage state itself; the HOC provides the state.

2️⃣ Higher-Order Component (HOC)
function withCounter(WrappedComponent) { ... }


A function that wraps the base component and adds counter state (count and setCount).

Makes the component reusable anywhere with the same behavior.

3️⃣ Usage
const RedButton = withCounter(ButtonCounter);
const GreenButton = withCounter(ButtonCounter);
const BlueButton = withCounter(ButtonCounter);


Each wrapped button has its own independent counter.

Can be rendered anywhere in the app without duplicating state logic.

4️⃣ Rendering
<RedButton label="Red Button" />
<GreenButton label="Green Button" />
<BlueButton label="Blue Button" />


Displays 3 independent buttons with separate counters.

Clicking one button does not affect the others.

✅ Key Takeaways

HOC = function that takes a component and returns a new component.

Allows reusing logic (like state, fetching, logging) across multiple components.

Keeps base components clean and focused only on UI.

Demonstrates independent state for multiple instances of the same component.