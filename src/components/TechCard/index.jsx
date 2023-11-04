//import Styles from './styles.module.scss';
import {BiPencil} from "react-icons/bi";
import {BsTrash} from "react-icons/bs";
import {useContext} from "react";
import {ModalContext} from "../../providers/ModalContext.jsx";
import {TechContext} from "../../providers/TechContext.jsx";
import Styles from "./styles.module.scss";

const TechCard = ({tech}) => {
    const {setOpenModalTechEditor} = useContext(ModalContext);
    const {setEditingTech, removeTech} = useContext(TechContext);

    return (
        <li className={Styles.flexbox}>
            <h2 className="font-title-1 font-title-1--color-gray-0">{tech.title}</h2>
            <div className={Styles.items}>
                <span className="font-headline-bold font-headline-bold--color-gray-1">{tech.status}</span>
                <span className="font-title-1 font-title-1--color-gray-0" onClick={() => {
                    setEditingTech(tech);
                    setOpenModalTechEditor(true);
                }}><BiPencil/></span>
                <span className="font-title-1 font-title-1--color-gray-0" onClick={() => {
                    removeTech(tech.id);
                }}><BsTrash/></span>
            </div>
        </li>
    )
}

export default TechCard;