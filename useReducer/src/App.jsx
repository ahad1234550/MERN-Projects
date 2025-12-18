import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

const formData= {
  name: '',
  email: '',
  password: '',
  city: '',
  address: ''
}

const reducer = (datas, action) => {
  return {...datas,[action.type]:action.val}
}


function App() {

  const [data, setData] = useReducer(reducer,formData)

  return (
    <>
      <div>
        <form>
          <input type='text' onChange={(e) => setData({val:e.target.value,type:'name'})} placeholder='Name' />
          <input type='text' onChange={(e) => setData({val:e.target.value,type:'email'})} placeholder='Email' />
          <input type='text' onChange={(e) => setData({val:e.target.value,type:'password'})} placeholder='Password' />
          <input type='text' onChange={(e) => setData({val:e.target.value,type:'city'})} placeholder='City' />
          <input type='text' onChange={(e) => setData({val:e.target.value,type:'address'})} placeholder='Address' />
        </form>
       </div>

       <div>
        <p>Name: {data.name}</p>
        <p>email: {data.email}</p>
        <p>Password: {data.password}</p>
        <p>City: {data.city}</p>
        <p>Address: {data.address}</p>
       </div>
    </>
  )
}

export default App
