import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.scss';
import RoutesMain from './routes/RoutesMain'

const App = () => {   

  return (
    <>  
      <RoutesMain/>
      <ToastContainer />
    </>
  )
}

export default App