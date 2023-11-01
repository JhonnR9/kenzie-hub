import {createContext, useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";
import api from "../services/api.js";
import {toast} from "react-toastify";
import {UserAuthContext} from "./UserAuthContext.jsx";


export const TechContext = createContext({});

export const TechProvider = ({children}) => {
    const [techList, setTechList] = useState([]);
    const {userData} = useContext(UserAuthContext);

    const addTech = (tech) => {
        /* POST /users/techs
     {
      "title": "React",
      "status": "Iniciante"
     }
        * */
    }

    const removeTech = (techId) => {
    /*
    DELETE /users/techs/:tech_id
    * */
    }

    const updateTech = (techId) => {
        /*
        PUT /users/techs/:tech_id - FORMATO DA REQUISIÇÃO
         */
    }

    useEffect(() => {
        const newTechList = userData.techs;
        setTechList(newTechList);

    }, []);

    return (
        <TechContext.Provider value={{techList, removeTech, addTech, updateTech}}>
            {children}
        </TechContext.Provider>
    );
}