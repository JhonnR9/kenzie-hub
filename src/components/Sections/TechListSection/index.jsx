import Styles from './styles.module.scss';
import {TechContext} from "../../../providers/TechContext.jsx";
import {useContext, useState} from "react";
import TechCard from "../../TechCard/index.jsx";
import {ModalContext} from "../../../providers/ModalContext.jsx";

const TechListSection = () => {
    const {techList} = useContext(TechContext);
    const {setOpenModalCreator} = useContext(ModalContext);

    return (
        <section className={Styles.container}>
            <div>
                <h2 className="font-title-1 font-title-1--color-gray-0">{"Tecnologias"}</h2>
                <button onClick={() => {setOpenModalCreator(true);}}>+</button>
            </div>
            <div>
                <ul>
                    {techList?.map(tech => {
                        return <TechCard key={tech.id} name={tech.title} status={tech.status}/>
                    })}
                </ul>
            </div>
        </section>
    );
}

export default TechListSection;