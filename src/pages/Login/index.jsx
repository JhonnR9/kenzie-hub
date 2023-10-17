import 'react-toastify/dist/ReactToastify.css';

import LoginForm from '../../components/Forms/LoginForm';
import Styles from './styles.module.scss';
import Header from '../../components/Headers/Header';


const Login = () => {
  return (
    <>
        <Header></Header>
        <main>
            <LoginForm></LoginForm>
        </main>
    </>
  )
}

export default Login