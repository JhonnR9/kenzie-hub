import { useState } from 'react';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.scss';



function App() {
  const [count, setCount] = useState(0)
  const notify = () => toast("Wow so easy !");

  return (
    <>
      <Header></Header>
    </>
  )
}

export default App