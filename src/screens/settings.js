import { Link } from 'react-router-dom';
import '../css/allpages.css';
import '../css/settings.css'

function Settings () {

  return (
    <div className='container'>
      <div className='title'>
        Settings
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className='menu'>
        <Link to="/profile">
          <div className='selection'>Edit Profile</div>
        </Link>
        <Link to="/create">
          <div className='selection'>Create A New Recipe</div>
        </Link>
        <Link to="/create">
          <div className='selection'>Created Recipes</div>
        </Link>
        <Link to="/login">
          <div className='selection'>Sign Out</div>
        </Link>
      </div>
    </div>
  )
}

//onClick={logoutHandler}

export default Settings;