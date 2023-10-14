import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)
  const notify = () => toast("Wow so easy !");

  return (
    <>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </>
  )
}

export default App
