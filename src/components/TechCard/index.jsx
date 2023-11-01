//import Styles from './styles.module.scss';
import { BiPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import {useContext} from "react";
import {ModalContext} from "../../providers/ModalContext.jsx";
const TechCard = ({name, status}) => {
    const {setOpenModalTechEdit} = useContext(ModalContext);

    return (
        <li >
            <h2>{name}</h2>
            <div>
                <span>{status}</span>
                <button onClick={() => {setOpenModalTechEdit(true);}}><BiPencil/></button>
                <button><BsTrash/></button>
            </div>
        </li>
    )
}

export default TechCard;