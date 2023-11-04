import {createContext, useState, useEffect, useContext} from "react";
import api from "../services/api.js";
import {toast} from "react-toastify";
import {UserAuthContext} from "./UserAuthContext.jsx";


export const TechContext = createContext({});

export const TechProvider = ({children}) => {
    const [techList, setTechList] = useState([]);
    const [editingTech, setEditingTech] = useState();
    const [token, setToken] = useState('');

    const {userData} = useContext(UserAuthContext);

    useEffect(() => {
        const storedToken = localStorage.getItem("@TOKEN");
        setToken(storedToken);
    }, []);

    const addTech = async (tech) => {

        try {
            const {data} = await api.post("/users/techs", tech, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTechList([...techList, data]);
            toast.success("Tecnologia adicionada com sucesso.");
        } catch (error) {
            if (error.message === "Request failed with status code 401") {
                toast.error("Já existe uma tarefa com este nome")
            }
        }

    }


    const removeTech = async (techId) => {
        /*
        DELETE /users/techs/:tech_id
        * */
        try {
            await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const newTechList = techList.filter((tech) => tech.id !== techId);

            setTechList(newTechList);
            toast.success("Exclusão realizada com sucesso!");
        } catch (error) {
            toast.success(error)
        }
    }

    const updateTech = async (techUpdated) => {

        try {
            const {data} =await api.put(`/users/techs/${editingTech.id}`, techUpdated, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const newTechList = techList.map((tech) => {
                if (tech.id === editingTech.id) {
                    return data;
                } else {
                    return tech;
                }
            });

            toast.success("Tarefa atualizada com sucesso")
            setTechList(newTechList);
        } catch (error) {
            toast.error(error);
        }


    }

    useEffect(() => {
        const newTechList = userData.techs;
        setTechList(newTechList);

    }, []);

    return (
        <TechContext.Provider value={{techList, removeTech, addTech, updateTech, editingTech, setEditingTech}}>
            {children}
        </TechContext.Provider>
    );
}