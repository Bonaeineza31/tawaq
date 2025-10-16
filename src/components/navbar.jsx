import { Bell, Search, ChevronDown } from "lucide-react"
import "./navbar.css"

const Navbar = ({ activeItem }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">{activeItem}</h1>
      </div>

      <div className="navbar-search">
        <Search size={18} />
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      <div className="navbar-right">
        <Bell size={20} className="navbar-icon" />
        <div className="navbar-user">
          <div className="user-avatar">H</div>
          <span className="user-name">Harish</span>
          <ChevronDown size={16} className="user-dropdown" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
