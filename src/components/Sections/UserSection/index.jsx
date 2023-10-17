import Styles from './styles.module.scss';

const UserSection = ({userName, module}) => {
    return (
        <section className={Styles.container}>
            <div className={Styles.item}>
                <h2 className="font-title-1 font-title-1--color-gray-0">{`Óla, ${userName}`}</h2>
                <p className="font-headline-bold font-headline-bold--color-gray-1">{module}</p>
            </div>
            
        </section>
    );
}

export default UserSection;