import InputFild from '../InputField';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerFormSchema, registerInputs} from "./registerFormSchema";
import Styles from './styles.module.scss';



const RegisterForm = () => {

  const {
    register,
    handleSubmit, 
    formState: {errors}} = useForm({
    resolver: zodResolver(registerFormSchema)

  });

  const onSubmit = (formData) => {
    console.log(formData)

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
            <option value="1">"Primeiro Módulo (Introducao ao Frontend)"</option>
            <option value="2">"Segundo Módulo (Frontend avançado)"</option>
        </select>
        <button type='submit' className='btn btn--negative font-btn font-btn--color-white'>Cadastrar</button>
        
    </form>
  )
}

export default RegisterForm;