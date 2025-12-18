import './App.css'
import React, { useState } from 'react';

// Basic React.memo
// const Child = React.memo(({ name }) => {
//   console.log('Child rendered');
//   return <p>Child Name: {name}</p>;
// });

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
//       <Child name="Alice" />
//     </div>
//   );
// }

// Props change triggers re-render
// const Child = React.memo(({ name }) => {
//   console.log('Child rendered');
//   return <p>Child Name: {name}</p>;
// });

// function App() {
//   const [name, setName] = useState('Alice');
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
//       <button onClick={() => setName('Bob' + count)}>Change Name</button>
//       <Child name={name} />
//     </div>
//   );
// }

//Using Objects as Props
const Child = React.memo(({ user }) => {
  console.log('Child rendered');
  return <p>User Name: {user.name}</p>;
});

function App() {
  const [count, setCount] = useState(0);
  const user = { name: 'Alice' };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <Child user={user} />
    </div>
  );
}


export default App;
