import {createContext, useState} from "react";

export const ModalContext = createContext({});
export const ModalProvider = ({children}) => {
    const [openModalTechCreator, setOpenModalCreator] = useState(false);
    const [openModalTechEdit, setOpenModalTechEdit] = useState(false);

    return (
        <ModalContext.Provider value={{openModalTechCreator, setOpenModalCreator, openModalTechEdit, setOpenModalTechEdit}}>
            {children}
        </ModalContext.Provider>
    );
}
