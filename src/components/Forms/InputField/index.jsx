import { forwardRef, useEffect } from 'react';
import Styles from './styles.module.scss';
import { toast } from 'react-toastify';


const InputFild = forwardRef( ({label ,errors, ...rest}, ref) => {

  useEffect(()=>{
    if(errors){
      toast.error(errors.message);
    }
  },[errors]);

  return (
    <div className={Styles.flexbox}> 
        <label className='font-headline font-headline--color-gray-0' htmlFor={label} >{label}</label>
        <input id={label} className='input' ref={ref} {...rest}/>
    </div>
  )
});

export default InputFild;