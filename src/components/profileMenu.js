import { Link } from 'react-router-dom';
import '../css/allpages.css';
import '../css/menu.css';

const Menu = () => {

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
          <div className='selection'>General Information</div>
        </Link>
        <Link to="/diet">
          <div className='selection'>Diet Preferences</div>
        </Link>
        <Link to="/create">
          <div className='selection'>Create Recipe</div>
        </Link>
        <Link to="/login">
          <div className='selection'>Sign Out</div>
        </Link>
      </div>
    </div>
  )
};

export default Menu;