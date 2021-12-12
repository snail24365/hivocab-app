import React from 'react'
import './Header.css';
//import { GlobalContext } from './GlobalStore.js';

const Header = () => {
  //const {info} = useContext(GlobalContext);

  //<Route path="/" element={<LoginPage/>}/>
  //<Route path="/sign-up" element={<SignUpPage/>}/>   

  return (
          <>
            <div className='header-container'>
              <span className='menu-icon'>
                <i class='bx bx-menu'></i>
              </span>
              <span className='message'>
                Make your sentence                
              </span>
            </div>
          </>
  )
}

export default Header