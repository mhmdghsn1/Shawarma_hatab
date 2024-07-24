import React from 'react'
import './NavItem.css'


const NavItem = (props) => {
  return (
    <div>
      <li className='nav-item'>
        {props.children}
      </li>
    </div>
  )
}
const NavItemDropDown = (props) => {
    return (
      <div>
        <li className='nav-item dropdown'>
          {props.children}
        </li>
      </div>
    )
  }


export default NavItem
export {NavItemDropDown}
