import Logo from "../../../assets/logo.svg";
import Styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserAuthContext } from '../../../providers/UserAuthContext';



const HeaderButton= ({buttonName, dashboard = false} ) => {
  const {logout} = useContext(UserAuthContext);
  let headerClassName = dashboard ? `${Styles.header} ${Styles.dashOffset}` : Styles.header;

  const navigate = useNavigate();

  return (
    <header className={headerClassName}>
     <div className={Styles.item}>
        <img src={Logo} alt="logo" width={170}/>
        <button className="btn btn--disable font-btn font-btn--color-white" onClick={()=> logout()}>{buttonName}</button>
     </div>
    </header>
  )
}

export default HeaderButton;