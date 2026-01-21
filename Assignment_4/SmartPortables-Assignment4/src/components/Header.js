import SmartPortables from '../images/logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header-component">
      <img src={SmartPortables} alt="SmartPortables logo" />
      <h1>SmartPortables</h1>
    </header>
  );
}

export default Header;
