import React from 'react'
import { NavLink } from 'react-router-dom'

const activeSublink = ({isActive}) =>(isActive ? 'active' : 'link')
const activelink = ({isActive}) =>(isActive ? 'active' : 'link')

const Sidebartem = ({item, isOpen}) => {
  return (
    <NavLink to={item.path} className={activelink}>
    <div className="sidebar-item s-parent">
    <div className="sidebar-title">
      <span>
        {item.icon && <div className="icon">{item.icon}</div>}
        {isOpen && <div>{item.title}</div>}
      </span>
    </div>
  </div>
  </NavLink>
  )
}

export default Sidebartem