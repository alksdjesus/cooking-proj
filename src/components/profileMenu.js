import { Link } from 'react-router-dom';
import '../css/allpages.css';
import '../css/menu.css';
import { resetUserSession } from '../service/AuthService';
import { useNavigate } from 'react-router-dom';

const Menu = () => {

  const navigate = useNavigate();

  const logoutHandler = () => {
    resetUserSession();
    navigate('/login');
  }

  return (
    <div className='menu_container'>
      <div className='title'>
        Profile
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className='menu'>
        <Link to="/profile">
          <div className='selection'>My Profile</div>
        </Link>
        <Link to="/general">
          <div className='selection'>Edit General Information</div>
        </Link>
        <Link to="/diet">
          <div className='selection'>Edit Diet Preferences</div>
        </Link>
        <Link to="/create">
          <div className='selection'>Create Recipe</div>
        </Link>
        <Link to="/login" onClick={logoutHandler} className='selection'>
          Sign Out
        </Link>
      </div>
    </div>
  )
};

/*<div className='menu_container'>
    <div className='title'>
      Profile
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div className='menu'>
      <a href="#">
        <div className='selection'>General Information</div>
      </a>
      <a href="#diet">
        <div className='selection'>Diet Preferences</div>
      </a>
      <a href="#create">
        <div className='selection'>Create Recipe</div>
      </a>
      <Link to="/login" onClick={logoutHandler} className='selection'>
        Sign Out
      </Link>
    </div>
  </div>*/
export default Menu;