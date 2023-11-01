import BaseModal from "../BaseModal/index.jsx";
import {useContext} from "react";
import {ModalContext} from "../../../providers/ModalContext.jsx";

const EditTechModal = () => {

    const {setOpenModalEdit} = useContext(ModalContext);
    return (
        <BaseModal title={"Tecnologia Detalhes"} setIsOpen={setOpenModalEdit}>

        </BaseModal>
    );
}

export default EditTechModal;