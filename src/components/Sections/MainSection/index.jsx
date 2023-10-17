import Styles from './styles.module.scss';

const MainSection = () => {
    return (
        <section className={Styles.container}>
            <h2 className="font-title-1 font-title-1--color-gray-0">{"Que pena! Estamos em desenvolvimento :("}</h2>
            <p className="font-paragraph font-paragraph--color-gray-0">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </section>
    );
}

export default MainSection;