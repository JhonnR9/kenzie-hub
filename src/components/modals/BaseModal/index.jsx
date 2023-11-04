import Styles from "./styles.module.scss"
const BaseModal = ({setIsOpen, title, children}) => {

    return (
        <div>
            <div className={Styles.modalOverlay}>
                <div className={Styles.modalBox}>
                    <div className={Styles.modalHeader}>
                        <h2 className={"font-title-1 font-title-1--color-gray-0"}>{title}</h2>
                        <span className={`${Styles.closerButton} font-title-1 font-title-1--color-gray-1`} onClick={
                            () => {
                                setIsOpen(false);

                            }}>X
                    </span>
                    </div>
                    <div className={Styles.modalBody}>
                        {children}
                    </div>

                </div>
            </div>
        </div>
    );
}
export default BaseModal;