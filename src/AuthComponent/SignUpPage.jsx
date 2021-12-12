import React from 'react'
import { Link } from 'react-router-dom'
import './SignUpPage.css'

const SignUpPage = () => {
  //const {info} = useContext(GlobalContext);

  //<Route path="/" element={<LoginPage/>}/>
  //<Route path="/sign-up" element={<SignUpPage/>}/>   

  return (
    <>
    <div className="signup-container card">
      <h1 className="signup-message">Create your Account</h1>
      <form className="form-box">
        <input type="text" placeholder="아이디"/>
        <input type="text" placeholder="닉네임"/>
        <input type="password" placeholder="비밀번호"/>
        <input type="password" placeholder="비밀번호 확인"/>
        <button>회원가입</button>
      </form>
      <div className="login-link-box">
        <span>
          <span>이미 계정이 있으시다면 </span>
          <Link className="link" to="/">
            로그인
          </Link>
          <span>을 해주세요.</span>
        </span>
      </div>
    </div>
  </>
  )
}

export default SignUpPage
