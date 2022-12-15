import Info from './profileInfo';
import '../css/allpages.css';
import Menu from '../components/profileMenu.js';
import Diet from './dietInfo.js';
import Create from './createInfo.js';

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


/*<div id="diet">
          <Diet />
        </div>*/
//onClick={logoutHandler}

export default Profile;