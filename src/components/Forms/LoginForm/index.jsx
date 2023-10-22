import InputFild from '../InputField';
import Styles from './styles.module.scss';
import {useForm} from "react-hook-form";
import {loginFormSchema, inputs} from "./loginFormSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect, useContext } from "react";
import api from '../../../services/api';
import { UserAuthContext } from '../../../providers/UserAuthContext';



const LoginForm = () => {

  const {userLogin} = useContext(UserAuthContext);

  const {
    register,
    handleSubmit, 
     formState: {errors}} = useForm({
    resolver: zodResolver(loginFormSchema)

  });

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    userLogin(formData);
    
  }

  
  useEffect(()=> {

    const storedToken= localStorage.getItem("@TOKEN");

    if (storedToken) {
      // navigate("/");
    }

  }, []);


  const handleRegisterButton = (e) => {
    e.preventDefault();
    navigate("/register");
  }


  return (
    <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className='font-title-1 font-title-1--color-gray-0'>Login</h1>
        <InputFild label="Email" errors={errors[inputs.email]} placeholder={'Digite aqui seu email'} type="email" {...register(inputs.email)}/>
        <InputFild label="Senha" errors={errors[inputs.password]} placeholder={'Digite aqui sua senha'} type="password" {...register(inputs.password)}/>
        <button className='btn font-btn font-btn--color-white' type='submit' >Entrar</button>
        <div className={Styles.item}>
            <span className='font-headline font-headline--color-gray-1'>Ainda nao possui uma conta</span>
            <button className='btn btn--disable font-btn font-btn--color-white' onClick={handleRegisterButton}>Cadastre-se</button>
        </div>
    </form>
  )
}

export default LoginForm;