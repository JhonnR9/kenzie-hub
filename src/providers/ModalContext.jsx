import {createContext, useState} from "react";

export const ModalContext = createContext({});
export const ModalProvider = ({children}) => {
    const [openModalTechCreator, setOpenModalCreator] = useState(false);
    const [openModalTechEditor, setOpenModalTechEditor] = useState(false);

    return (
        <ModalContext.Provider value={{
            openModalTechCreator,
            setOpenModalCreator,
            setOpenModalTechEditor,
            openModalTechEditor,
        }}>
            {children}
        </ModalContext.Provider>
    );
}
