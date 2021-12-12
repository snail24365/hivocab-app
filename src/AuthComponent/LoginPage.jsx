import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  //const {info} = useContext(GlobalContext);
  //<Route path="/" element={<LoginPage/>}/>
  //<Route path="/sign-up" element={<SignUpPage/>}/>

  return (
    <>
      <div className="login-container card">
        <h1 className="welcome-message">Welcome to Hi Vocab</h1>
        <form className="form-box">
          <input type="text" placeholder="아이디"/>
          <input type="password" placeholder="비밀번호"/>
          <button>Login</button>
        </form>
        <div className="signup-link-box">
          <span>
            <span>처음이시다면 </span>
            <Link className="link" to="/sign-up">
              회원가입
            </Link>
            <span>을 해주세요.</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
