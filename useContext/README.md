This project demonstrates how to use React useContext to share state across multiple components without prop-drilling.

We have a count state in the App component, and multiple child components can read and update it using useContext.

Key Concepts
1️⃣ useContext

Allows components to access context values provided by a Context.Provider.

Prevents the need to pass props through multiple component layers.

2️⃣ Context Provider
<Context.Provider value={{ count, setCount }}>
  ...
</Context.Provider>


Provides the count state and setCount function to all child components.

3️⃣ Child Components

Button.jsx: Reads count from context and displays it.

Component1.jsx: Reads count and setCount from context and updates the count on button click.

How It Works

App.jsx defines the count state.

Context.Provider shares count and setCount with child components.

Button and Component1 use useContext(Context) to access and modify the shared state.

Updating the count in any component automatically re-renders all components using that state.

Example Behavior

Clicking the App button increases the count.

Clicking Component1 button also increases the same count.

The updated count is reflected in both Button and App components.

Key Takeaways

useContext makes state sharing across components easy.

Combining useContext with useState allows both reading and updating shared state.

Avoids prop-drilling through multiple component layers.