import Diet from './dietInfo.js';
import '../css/allpages.css';
import Menu from '../components/profileMenu.js';

function DietDisplay () {

  return (
    <div className='container'>
      <Menu />
      <div className='content_container'>
        <Diet />
      </div>
    </div>
  )
}

//onClick={logoutHandler}

export default DietDisplay;