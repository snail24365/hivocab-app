import React, { useContext } from "react";
import './Main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExercisePage from "./ExercisePage";
import Header from "./Header";
import Sidebar from "./Sidebar";
import HistoryPage from "./HistoryPage";
import UsagePage from "./UsagePage";
//import { GlobalContext } from './GlobalStore.js';

const Main = () => {
  //const {info} = useContext(GlobalContext);

  //<Route path="/" element={<LoginPage/>}/>
  //<Route path="/sign-up" element={<SignUpPage/>}/>

  return (
    <>
      <BrowserRouter>
      <div className="main-container">
        <Sidebar></Sidebar>
        <div className="page-container">
          <Header></Header>
          <div className="contents">
            <div className='contents-inner-box card'>

            <Routes>
              <Route exact path="/history" element={<HistoryPage/>} />
              <Route path="/word" element={<UsagePage/>} />
              <Route path="/" element={<ExercisePage/>} />
            </Routes>
            </div>
          </div>
        </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Main;
