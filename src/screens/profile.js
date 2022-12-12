import Info from './profileInfo.js';
import '../css/allpages.css';
import Menu from '../components/profileMenu.js';

function Profile () {

  return (
    <div className='container'>
      <Menu />
      <div className='content_container'>
        <Info />
      </div>
    </div>
  )
}

//onClick={logoutHandler}

export default Profile;