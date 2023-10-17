import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from '../../components/Forms/RegisterForm';
import HeaderButton from '../../components/Headers/HeaderButton';
import Styles from './styles.module.scss';

const Register = () => {
  return (
    <>
        <HeaderButton buttonName="Voltar"/>
        <main className={Styles.main}>
           <RegisterForm></RegisterForm>
        </main>
    </>
  )
}

export default Register;