import Styles from './styles.module.scss';
import {TechContext} from "../../../providers/TechContext.jsx";
import {useContext} from "react";
import TechCard from "../../TechCard/index.jsx";
import {ModalContext} from "../../../providers/ModalContext.jsx";
import ButtonPulsImg from "../../../assets/ButtonPlus.svg"

const TechListSection = () => {
    const {techList} = useContext(TechContext);
    const {setOpenModalCreator} = useContext(ModalContext);

    return (
        <section className={Styles.container}>
            <div className={Styles.flexbox}>
                <h2 className="font-title-1 font-title-1--color-gray-0">{"Tecnologias"}</h2>
                <img onClick={() => {
                    setOpenModalCreator(true);
                }} src={ButtonPulsImg}/>
            </div>
            <div>
                <ul>
                    {techList?.map(tech => {
                        return <TechCard key={tech.id} tech={tech}/>
                    })}
                </ul>
            </div>
        </section>
    );
}

export default TechListSection;