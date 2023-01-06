import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

import LogoutButton from "./LogoutButton";
import userIcon from '../../icons/orange.png'
import orange from '../../icons/orange.png'
import orangeBanana from '../../icons/orange-banana.png'
import orangeLemon from '../../icons/orange-lemon.png'
import './ProfileButton.css'
import broken from '../../icons/broken.png';

function ProfileButton() {
  const user = useSelector(state => state.session.user)
  const [showMenu, setShowMenu] = useState(false);
  // console.log('this is the user',user)
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  return (
    <>
    <div className='profile-button tooltip-profile' onClick={openMenu}>
      <img className='user-icon' src={userIcon} alt='user' onError={e => e.target.src=broken} />
      {/* <div id='hover-dropdown-name'>{user}</div> */}
      <div className="tooltiptext-below-user">
        {user.first_name} {user.last_name[0]}.
      </div>
    </div>
      {showMenu && (
        <div className="profile-dropdown">
          <div >
            <NavLink id='dropdown-text' to='/current'>
              <img src={orange} alt='orange' id='about' width='30px' onError={e => e.target.src=broken} />
              About Me
            </NavLink>
          </div>
          <div>
            <NavLink id='dropdown-text-b' to='/biz/current'>
              <img src={orangeBanana} alt='orange' width='35px' onError={e => e.target.src=broken} />
              My Businesses
            </NavLink>
          </div>
          <div>
            <NavLink id='dropdown-text-b' to='/reviews/current'>
              <img src={orangeLemon} alt='orange' width='35px' onError={e => e.target.src=broken} />
              My Reviews
            </NavLink>
          </div>

          <div id='logout'>
            <img src='https://www.svgrepo.com/show/115080/logout.svg' alt='exit' width='20px' onError={e => e.target.src=broken} />
            <LogoutButton />
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
