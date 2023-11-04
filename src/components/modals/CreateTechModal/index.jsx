import BaseModal from "../BaseModal/index.jsx";
import {useContext} from "react";
import {ModalContext} from "../../../providers/ModalContext.jsx";
import InputField from "../../Forms/InputField/index.jsx";
import Styles from "./styles.module.scss"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createTechFormSchema} from "./createTechSchema.js";
import {TechContext} from "../../../providers/TechContext.jsx";

const CreateTechModal = () => {
    const {setOpenModalCreator} = useContext(ModalContext);
    const {addTech} = useContext(TechContext);

    const {
        register,
        handleSubmit} = useForm({
        resolver: zodResolver(createTechFormSchema)

    });

    const onSubmit = (formData) => {
        addTech(formData);

    }


    return (
        <BaseModal title={"Cadastrar Tecnologia"} setIsOpen={setOpenModalCreator}>
            <form onSubmit={handleSubmit(onSubmit)} className={Styles.flexBox}>
                <InputField label={"Nome"} placeholder={"Nome da tecnologia"} {...register("title")}/>
                <label className='font-headline font-headline--color-gray-0'>Selecionar Status</label>
                <select className={"input"} {...register("status")}>
                    <option value={"Iniciante"}>Iniciante</option>
                    <option value={"Intermediário"}>Intermediario</option>
                    <option value={"Avançado"}>Avançado</option>
                </select>
                <button className={"btn font-btn font-btn--color-white"}>Cadastrar Tecnologia</button>
            </form>
        </BaseModal>
    );
}

export default CreateTechModal;