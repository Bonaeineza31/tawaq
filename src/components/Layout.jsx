"use client"

import Sidebar from "./sidebar"
import Navbar from "./navbar"
import "./Layout.css"

const Layout = ({ children, activeItem, setActiveItem }) => {
  return (
    <div className="layout">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="layout-main">
        <Navbar activeItem={activeItem} />
        <div className="layout-content">{children}</div>
      </div>
    </div>
  )
}

export default Layout