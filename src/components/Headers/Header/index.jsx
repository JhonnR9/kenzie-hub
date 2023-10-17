import Logo from "../../../assets/logo.svg";
import Styles from './styles.module.scss';


const Header = () => {

  return (
    <header className={Styles.header}>
      <img src={Logo} alt="logo" />
    </header>
  )
}

export default Header;