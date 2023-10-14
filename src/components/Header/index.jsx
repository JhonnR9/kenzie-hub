import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Styles from './styles.module.scss';


function Header() {
  const [count, setCount] = useState(0)
  const notify = () => toast("Wow so easy !");

  return (
    <>
      <button className='font-btn font-btn--color-white btn' onClick={notify}>Notify !</button>
      <button className='btn btn--disable font-btn font-btn--color-white'>Test</button>
      <button className='btn btn--negative font-btn font-btn--color-white'>Test</button>
      <h1 className='font-title-1 font-title-1--color-primary'> Title-1</h1>
      <h2 className='font-title-2 font-title-2--color-gray-0'>Title-2</h2>
      <p className='font-paragraph font-paragraph--color-primary'>Este é um praragrafo rosa</p>
      <p className='font-paragraph font-paragraph--color-gray-0'>Este é um praragrafo branco</p>
      <p className='font-paragraph font-paragraph--color-gray-2'>Este é um praragrafo preto</p>
      <input className='input font-paragraph' type='text' placeholder='placeholder'/>

      <ToastContainer />
    </>
  )
}

export default Header;