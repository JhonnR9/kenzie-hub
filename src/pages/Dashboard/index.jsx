import 'react-toastify/dist/ReactToastify.css';
import UserSection from '../../components/Sections/UserSection';
import TechListSection from '../../components/Sections/TechListSection';
import HeaderButton from '../../components/Headers/HeaderButton';
import {useNavigate} from 'react-router-dom';
import {useEffect, useContext} from "react";
import {UserAuthContext} from '../../providers/UserAuthContext';
import api from '../../services/api';
import {TechProvider} from "../../providers/TechContext.jsx";
import {ModalContext} from "../../providers/ModalContext.jsx";
import CreateTechModal from "../../components/modals/CreateTechModal/index.jsx";
import EditTechModal from "../../components/modals/EditTechModal/index.jsx";

const Dashboard = () => {
    const navigate = useNavigate();
    const {userData, setUserData} = useContext(UserAuthContext);
    const {openModalTechCreator, openModalTechEdit} = useContext(ModalContext);

    useEffect(() => {
        const storedToken = localStorage.getItem("@TOKEN");

        const config = {
            headers: {
                Authorization: `Bearer ${storedToken}`

            }
        };

        if (!storedToken) {
            navigate('/login');

        } else {
            const getUser = async () => {
                try {
                    const {data} = await api.get('/profile', config);
                    setUserData(data);

                } catch (error) { /* empty */
                }
            }

            getUser();

        }
    }, []);


    return (
        <TechProvider>
            {openModalTechCreator ? <CreateTechModal/> : null}
            {openModalTechEdit ? <EditTechModal/> : null}
            <HeaderButton buttonName={"Voltar"} dashboard={true}/>
            <main>
                <UserSection userName={userData?.name} module={userData?.course_module}/>
                <TechListSection/>
            </main>
        </TechProvider>
    )
}

export default Dashboard;