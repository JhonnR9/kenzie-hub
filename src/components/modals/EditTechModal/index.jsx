import BaseModal from "../BaseModal/index.jsx";
import {useContext, useEffect} from "react";
import Styles from "../CreateTechModal/styles.module.scss";
import InputField from "../../Forms/InputField/index.jsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {editTechFormSchema} from "./editTechSchema.js";
import {ModalContext} from "../../../providers/ModalContext.jsx";
import {TechContext} from "../../../providers/TechContext.jsx";


const EditTechModal = () => {
    const {setOpenModalTechEditor} = useContext(ModalContext);
    const {editingTech, updateTech} = useContext(TechContext);

    const {
        register,
        handleSubmit
    } = useForm({
        resolver: zodResolver(editTechFormSchema),
        values: {
            title: editingTech.title,
            status: editingTech.status
        }
    });

    const onSubmit = (formData) => {
        updateTech(formData);

    }


    return (
        <BaseModal setIsOpen={setOpenModalTechEditor} title={"Tecnologia Detalhes"} >
            <form onSubmit={handleSubmit(onSubmit)} className={Styles.flexBox}>
                <InputField disabled label={"Nome"} placeholder={"Nome da tecnologia"} {...register("title")}/>
                <label className='font-headline font-headline--color-gray-0'>Status</label>
                <select className={"input"} {...register("status")}>
                    <option value={"Iniciante"}>Iniciante</option>
                    <option value={"Intermediário"}>Intermediario</option>
                    <option value={"Avançado"}>Avançado</option>
                </select>
                <button className={"btn font-btn font-btn--color-white"} >Salvar alterações</button>
            </form>
        </BaseModal>
    );
}

export default EditTechModal;