import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
//import { GlobalContext } from './GlobalStore.js';

const Sidebar = () => {
  //const {info} = useContext(GlobalContext);

  //<Route path="/" element={<LoginPage/>}/>
  //<Route path="/sign-up" element={<SignUpPage/>}/>

  return (
    <>
      <div className="sidebar close">
        <div className="logo-details">
          <a href="/">
            <i className="bx bx-notepad"></i>
          </a>
          <span className="logo_name">Hi Vocab</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <i className="bx bx-grid-alt"></i>
              <span className="link_name">작문 연습</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/">
                  작문 연습
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <Link to="/word">
                <i className="bx bx-book-alt"></i>
                <span className="link_name">카테고리</span>
              </Link>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name">카테고리</a>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/history">
              <i className="bx bx-history"></i>
              <span className="link_name">작문 기록</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/history">
                  작문 기록
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/setting">
              <i className="bx bx-cog"></i>
              <span className="link_name">설정</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/setting">
                  설정
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content"></div>
              <div className="name-job">
                <div className="profile_name">Made By</div>
                <div className="job">Seunghui Choi</div>
              </div>
              <i className="bx bx-log-out"></i>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
