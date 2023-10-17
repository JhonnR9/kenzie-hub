import 'react-toastify/dist/ReactToastify.css';
import UserSection from '../../components/Sections/UserSection';
import MainSection from '../../components/Sections/MainSection';
import HeaderButton from '../../components/Headers/HeaderButton';
import Styles from './styles.module.scss';

const Dashboard = () => {
    
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