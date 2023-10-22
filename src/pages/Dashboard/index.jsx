import 'react-toastify/dist/ReactToastify.css';
import UserSection from '../../components/Sections/UserSection';
import MainSection from '../../components/Sections/MainSection';
import HeaderButton from '../../components/Headers/HeaderButton';
import Styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext, useState } from "react";
import { UserAuthContext } from '../../providers/UserAuthContext';
import api from '../../services/api';

const Dashboard = () => {const navigate = useNavigate();
  const {userData, setUserData} = useContext(UserAuthContext);

   useEffect( ()=> {
    const storedToken = localStorage.getItem("@TOKEN");

    const config = {
      headers: {
        Authorization: `Bearer ${storedToken}` 

      }
    };

    if(!storedToken){
      navigate('/login');

    } 
    else{
          const getUser = async () => {
            try {
              const {data} = await api.get('/profile', config);
              setUserData(data);

            } catch (error) {
              
            }
          }
    
          getUser();
   
        }
   }, []);

   useEffect(() => {
    console.log(userData); // Será executado sempre que userData for atualizado
  }, [userData]);
  

  return (
    <>
        <HeaderButton buttonName={"Voltar"} dashboard={true}/>
        <main className={Styles.main}>
           <UserSection userName={userData?.name} module={userData?.course_module}/>
           <MainSection/>
        </main>
    </>
  )
}

export default Dashboard;