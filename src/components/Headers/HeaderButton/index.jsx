import Logo from "../../../assets/logo.svg";
import Styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';



const HeaderButton= ({buttonName, dashboard = false} ) => {
  let headerClassName = dashboard ? `${Styles.header} ${Styles.dashOffset}` : Styles.header;

  const navigate = useNavigate();

  const handleBackButton = (e) => {
    navigate("/login");
  }

  return (
    <header className={headerClassName}>
     <div className={Styles.item}>
        <img src={Logo} alt="logo" width={170}/>
        <button className="btn btn--disable font-btn font-btn--color-white" onClick={handleBackButton}>{buttonName}</button>
     </div>
    </header>
  )
}

export default HeaderButton;