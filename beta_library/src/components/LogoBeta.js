import './style.css';
import logo from '../img/logo.svg';

function Logo() {
  return (
    <div className='logo'>
      <img src={logo} alt='Beta Library logo' />
    </div>
  );
}

export default Logo;
