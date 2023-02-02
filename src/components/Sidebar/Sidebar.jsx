import { NavLink } from "react-router-dom"
import './Sidebar.css'
import DashboardIcon from '../../assets/dashboard_icon.svg'
import AddIcon from '../../assets/add_icon.svg'
import { Avatar } from '../'
import { useAuthContext } from "../../hooks/useAuthContext"

const Sidebar = () => {
    const { user } = useAuthContext()

  return (
    <div className="sidebar">
        <div className="sidebar-content">
            <div className="user">
                {/* Avatar & user here later */}
                <Avatar src={user.photoURL} />
                <p>Hey {user.displayName}</p>
            </div>
            <nav className="links">
                <ul>
                    <li><NavLink exact to="/">
                        <img src={DashboardIcon} alt='Dashboard Icon' />
                        <span>Dashboard</span>
                    </NavLink></li>
                    <li><NavLink to="/create">
                        <img src={AddIcon} alt='Add project Icon' />
                        <span>New Project</span>
                    </NavLink></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Sidebar