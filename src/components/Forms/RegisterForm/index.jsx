import InputFild from '../InputField';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerFormSchema, registerInputs} from "./registerFormSchema";
import Styles from './styles.module.scss';
import api from '../../../services/api';
import { toast } from 'react-toastify';

const RegisterForm = () => {

  const {
    register,
    handleSubmit, 
    formState: {errors}} = useForm({
    resolver: zodResolver(registerFormSchema)

  });

  const onSubmit = async (formData) => {
    delete formData[registerInputs.confirmPassword];
     await userRegister(formData);
  }

  const userRegister = async (formData) => {
    try {
      const {data, status, message} = await api.post('/users', formData)
      console.log(data)
      if(status == 200){
        toast.success("Usuario criado com sucesso!");
      }else{
        toast.error(message);
      }

     
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={Styles.form}>
        <h1 className='font-title-1 font-title-1--color-gray-0'>Crie sua conta</h1>
        <span className='font-headline font-headline--color-gray-1'>Rapido e grátis, vamos nessa</span>
        <InputFild label="Nome" errors={errors[registerInputs.name]} placeholder={'Digite aqui seu nome'} {...register(registerInputs.name)} />
        <InputFild label="Email" errors={errors[registerInputs.email]} placeholder={'Digite aqui seu email'} type="email" {...register(registerInputs.email)}/>
        <InputFild label="Senha" errors={errors[registerInputs.password]} placeholder={'Digite aqui sua senha'} type="password" {...register(registerInputs.password)}/>
        <InputFild label="Confirmar senha" errors={errors[registerInputs.confirmPassword]} placeholder={'Digite novamente sua senha'} type={"password"} {...register(registerInputs.confirmPassword)}/>
        <InputFild label="Bio" errors={errors[registerInputs.about]} placeholder={'Fale sobre voce'} {...register(registerInputs.about)}/>
        <InputFild label="Contato" errors={errors[registerInputs.contact]} placeholder={'Opçao de contato'} {...register(registerInputs.contact)}/>
        <select className='input' {...register(registerInputs.module)} >
            <option value="Primeiro módulo (Introdução ao Frontend)">"Primeiro módulo (Introdução ao Frontend)"</option>
            <option value="Segundo módulo (Frontend Avançado)">"Segundo módulo (Frontend Avançado)"</option>
            <option value="Terceiro módulo (Introdução ao Backend)">"Terceiro módulo (Introdução ao Backend)"</option>
            <option value="Quarto módulo (Backend Avançado)">"Quarto módulo (Backend Avançado)"</option>
        </select>
        <button type='submit' className='btn btn--negative font-btn font-btn--color-white'>Cadastrar</button>
        
    </form>
  )
}

export default RegisterForm;