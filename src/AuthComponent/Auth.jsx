import React, {useContext} from 'react'
//import './Auth.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import './Auth.css'
//import { GlobalContext } from './GlobalStore.js';

const Auth = () => {
  //const {info} = useContext(GlobalContext);

  //<Route path="/" element={<LoginPage/>}/>
  //<Route path="/sign-up" element={<SignUpPage/>}/>   

  return (
          <>
          <div className='auth-container'>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/sign-up" element={<SignUpPage/>}/>
              </Routes>
            </BrowserRouter>
            </div>
          </>
  )
}

export default Auth