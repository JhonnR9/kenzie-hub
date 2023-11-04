import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.scss';
import RoutesMain from './routes/RoutesMain'
import {ModalProvider} from "./providers/ModalContext.jsx";

const App = () => {

    return (
        <>

            <RoutesMain/>
            <ToastContainer/>

        </>
    )
}

export default App