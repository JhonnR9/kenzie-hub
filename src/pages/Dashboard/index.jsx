import 'react-toastify/dist/ReactToastify.css';
import UserSection from '../../components/Sections/UserSection';
import MainSection from '../../components/Sections/MainSection';
import HeaderButton from '../../components/Headers/HeaderButton';
import Styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {const navigate = useNavigate();
   useEffect(()=> {
    if(!localStorage.getItem("@TOKEN")){
      navigate('/login');
    }
   }, []);
   
  return (
    <>
        <HeaderButton buttonName={"Voltar"} dashboard={true}/>
        <main className={Styles.main}>
           <UserSection userName={"Samuel Leao"} module={'Primeiro módulo (Introdução ao Frontend)'}/>
           <MainSection/>
        </main>
    </>
  )
}

export default Dashboard;