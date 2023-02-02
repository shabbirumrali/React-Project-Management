import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

// images & styles
import Temple from '../../assets/temple.svg'
import './Navbar.css'

const Navbar = () => {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  
  return (
    <div className='navbar'>
        <ul>
            <li className='logo'>
                <img src={Temple} alt="Project Management" />
                <span>Project Management</span>
            </li>
            {!user && (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </>
            )}
            {user&& (
              <li>
                {!isPending && (<button className="btn" onClick={ logout }>Logout</button>)}
                {isPending && (<button className="btn" disabled>Logging out...</button>)}
              </li>
            )}
        </ul>
    </div>
  )
}

export default Navbar