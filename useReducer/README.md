This project demonstrates how to use the useReducer hook in React to manage the state of a form with multiple inputs.

Instead of using multiple useState hooks, useReducer allows centralized and predictable state management.

Key Concepts
1️⃣ useReducer

useReducer is a React hook used for managing complex state.

It takes two arguments:

Reducer function – defines how state changes based on actions.

Initial state – the starting value of the state.

Returns [state, dispatch]:

state = current state

dispatch = function to update state by sending an action

2️⃣ Reducer Function
const reducer = (datas, action) => {
  return { ...datas, [action.type]: action.val };
};


Takes current state (datas) and an action object.

Returns updated state.

action.type determines which field to update.

action.val is the new value.

3️⃣ How Form Works
<input type='text' onChange={(e) => setData({ val: e.target.value, type: 'name' })} placeholder='Name' />


On every input change, setData dispatches an action.

The reducer updates the corresponding field in the state.

All form values are stored in a single state object.

4️⃣ Displaying Form Data
<p>Name: {data.name}</p>
<p>Email: {data.email}</p>
<p>Password: {data.password}</p>
<p>City: {data.city}</p>
<p>Address: {data.address}</p>


Shows real-time updates as the user types in the form.

✅ Advantages

Centralized state management for forms with multiple fields.

Easier to scale as the form grows.

Predictable state updates through reducer logic.