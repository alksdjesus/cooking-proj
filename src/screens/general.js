import Info from './generalInfo';
import '../css/allpages.css';
import Menu from '../components/profileMenu.js';

function General () {

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

export default General;