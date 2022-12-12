import Create from './createInfo.js';
import '../css/allpages.css';
import Menu from '../components/profileMenu.js';

function CreateDisplay () {

  return (
    <div className='container'>
      <Menu />
      <div className='content_container'>
        <Create />
      </div>
    </div>
  )
}

//onClick={logoutHandler}

export default CreateDisplay;