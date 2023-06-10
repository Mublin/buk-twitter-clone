import React from 'react'
import icon from "../assets/react.svg"

export default function SideBar() {
  return (
    <div className='sidebar border' style={{position: "fixed", flex: 1}}>
        <div className="side-icons">
            <ul className="nav-icons">
                <li className="nav-icon active"><i className="fa-brands fa-twitter fa"></i></li>
                <li className="nav-icon"><i className="fa-solid fa-house fa"></i></li>
                <li className="nav-icon"><i className="fa-solid fa-magnifying-glass fa"></i></li>
                <li className="nav-icon"><i className="fa-solid fa-bell fa"></i></li>
                <li className="nav-icon"><i className="fa-regular fa-envelope fa"></i></li>
                <li className="nav-icon"><i className="fa-sharp fa-light fa-badge-check fa"></i></li>
                <li className="nav-icon"><i className="fa-solid fa-user fa"></i></li>
                <li className="nav-icon"><i className="fa-regular fa-circle-ellipsis fa"></i></li>
                <li className="nav-icon"><i className="fa-regular fa-circle-ellipsis fa"></i></li>
            </ul>
        </div>
        <div className="profile">
            <div className="profile-icon">
                <img src={icon} alt="profile-image" />
            </div>
        </div>
    </div>
  )
}
