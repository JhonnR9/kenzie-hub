import Styles from "./styles.module.scss"
const BaseModal = ({setIsOpen, title, children}) => {

    return (
        <div>
            <div className={Styles.modalOverlay}>
                <div className={Styles.modalBox}>
                    <h2 className={"font-title-1 font-title-1--color-gray-0"}>{title}</h2>
                    <button className={Styles.closerButton} onClick={
                        () => {
                            setIsOpen(false);
                        }}>X
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
export default BaseModal;