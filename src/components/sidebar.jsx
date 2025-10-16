"use client"
import {
  LayoutDashboard,
  ArrowLeftRight,
  FileText,
  CreditCard,
  TrendingUp,
  PieChart,
  FolderKanban,
  Calendar,
  User,
  Settings,
} from "lucide-react"
import "./sidebar.css"

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { icon: <ArrowLeftRight size={20} />, label: "Transaction" },
    { icon: <FileText size={20} />, label: "Invoice" },
    { icon: <CreditCard size={20} />, label: "Payables" },
    { icon: <TrendingUp size={20} />, label: "Forecast" },
    { icon: <PieChart size={20} />, label: "Budgeting" },
    { icon: <FolderKanban size={20} />, label: "Project" },
    { icon: <Calendar size={20} />, label: "Calendar" },
  ]

  const handleMenuClick = (label) => {
    const pageName = label.toLowerCase()
    setActiveItem(pageName)
  }

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">▲</div>
        <span className="logo-text">TAQWA</span>
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <div
            key={item.label}
            onClick={() => handleMenuClick(item.label)}
            className={`menu-item ${
              activeItem === item.label.toLowerCase() ? "active" : ""
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="footer-title">Account Pages</div>
        <div className="menu-item">
          <User size={20} />
          <span>Profile</span>
        </div>
        <div className="menu-item">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar