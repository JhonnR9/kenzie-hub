import { createContext, useState, useEffect } from "react";
import api from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";



export const UserAuthContext = createContext({});

export const UserAuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();

    const userLogin = async (formData) => {

        try{
    
          const loginToken = async () => {
             const {data, status, message} = await api.post('/sessions', formData);
             if(status === 200){
               toast.success("Login efetuado com sucesso!");
               localStorage.setItem("@TOKEN", data.token);
               setUserData(data.user)
               navigate("/");
    
             }else {
               toast.error(message);
             }
             
          }
          loginToken();
    
       }catch(error){
          console.error("Erro na requisição:", error.message);
       }
      }


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
                  navigate("/");
    
                } catch (error) {
                  localStorage.removeItem("@TOKEN");
                  navigate("/login");
                }
              }
        
              getUser();
       
            }
       }, []);

      const userRegister = async (formData) => {
        const newFormData = {
          email: formData.email,
          password: formData.password,
          name: formData.name,
          bio: formData.bio,
          contact: formData.contact,
          course_module: formData.curse_module,
        }
        
        try {
          const {status, message} = await api.post('/users', newFormData);
    
          if(status == 201){
            toast.success("Usuario criado com sucesso!");
           
          }else{
            toast.error(message);
          }
    
         
        } catch (error) {
          toast.error(error.message);
        }
      }

      const logout = () => {
        localStorage.removeItem("@TOKEN");
        navigate("/login");
      }

    return (
        <UserAuthContext.Provider value={{userData, userRegister, userLogin, logout}}>
            {children}
        </UserAuthContext.Provider>
    );
}