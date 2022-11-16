import './index.scss'
import {Link} from 'react-router-dom'
import Logos from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to = '/'>
            <img src={Logos} alt='logo' />
            <img className ="sub-logo" src={LogoSubtitle} alt='logo' />
        </Link>
    </div>

)

export default Sidebar;