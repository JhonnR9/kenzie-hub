//import Styles from './styles.module.scss';
import { BiPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import {useContext} from "react";
import {ModalContext} from "../../providers/ModalContext.jsx";
import {TechContext} from "../../providers/TechContext.jsx";
const TechCard = ({tech}) => {
    const {setOpenModalTechEditor} = useContext(ModalContext);
    const {setEditingTech, removeTech} = useContext(TechContext);

    return (
        <li >
            <h2>{tech.title}</h2>
            <div>
                <span>{tech.status}</span>
                <button onClick={() => {
                    setEditingTech(tech);
                    setOpenModalTechEditor(true);
                }}><BiPencil/></button>
                <button onClick={() => {
                    removeTech(tech.id);
                }}><BsTrash/></button>
            </div>
        </li>
    )
}

export default TechCard;