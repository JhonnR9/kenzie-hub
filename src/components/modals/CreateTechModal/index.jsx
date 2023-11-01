import BaseModal from "../BaseModal/index.jsx";
import {useContext} from "react";
import {ModalContext} from "../../../providers/ModalContext.jsx";

const CreateTechModal = () => {

    const {setOpenModalCreator} = useContext(ModalContext);
    return (
        <BaseModal title={"Cadastrar Tecnologia"} setIsOpen={setOpenModalCreator}>

        </BaseModal>
    );
}

export default CreateTechModal;