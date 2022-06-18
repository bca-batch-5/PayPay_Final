import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComp from "../components/Button/ButtonComp";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import { changePassword } from "../services/ProfilService";
import '../styles/ChangePassword/styleChangePassword.css'
const ChangePassword = () => {
    const [passwordBox1,setPasswordBox1] = useState('password-box');
    const [passwordBox2,setPasswordBox2] = useState('password-box');
    const [passwordBox3,setPasswordBox3] = useState('password-box');
    const [lock1,setLock1] = useState('lock');
    const [lock2,setLock2] = useState('lock');
    const [lock3,setLock3] = useState('lock');
    const [type1,setType1] = useState('password');
    const [type2,setType2] = useState('password');
    const [type3,setType3] = useState('password');
    const [iconEye1, setIconEye1] = useState('fa-eye-slash');
    const [iconEye2, setIconEye2] = useState('fa-eye-slash');
    const [iconEye3, setIconEye3] = useState('fa-eye-slash');
    const [eye1, setEye1]= useState('eye');
    const [eye2, setEye2]= useState('eye');
    const [eye3, setEye3]= useState('eye');
    const [changeButton, setChangeButton] =useState('change-button')
    const [inputPass1Value, setInputPass1Value] =useState();
    const [inputPass2Value, setInputPass2Value] =useState();
    const [inputPass3Value, setInputPass3Value] =useState();
    function eyeChange1() {
        if (iconEye1 == 'fa-eye-slash') {
            setIconEye1('fa-eye')
            setType1('text')
        }else if (iconEye1 == 'fa-eye') {
            setIconEye1('fa-eye-slash')
            setType1('password')
        }
    }
    function eyeChange2() {
        if (iconEye2 == 'fa-eye-slash') {
            setIconEye2('fa-eye')
            setType2('text')
        }else if (iconEye2 == 'fa-eye') {
            setIconEye2('fa-eye-slash')
            setType2('password')
        }
    }
    function eyeChange3() {
        if (iconEye3 == 'fa-eye-slash') {
            setIconEye3('fa-eye')
            setType3('text')
        }else if (iconEye3 == 'fa-eye') {
            setIconEye3('fa-eye-slash')
            setType3('password')
        }
    }

    function inputPass1(e){
        if(e.target.value != ""){
            setEye1('eye-color')
            setPasswordBox1('password-box-color')
            setLock1('lock-color')
            setInputPass1Value(e.target.value)
        }else{
            setEye1('eye')
            setPasswordBox1('password-box')
            setLock1('lock')
        }
    }
    function inputPass2(e){
        if(e.target.value != ""){
            setEye2('eye-color')
            setPasswordBox2('password-box-color')
            setLock2('lock-color')
            setInputPass2Value(e.target.value)
        }else{
            setEye2('eye')
            setPasswordBox2('password-box')
            setLock2('lock')
        }
    }
    function inputPass3(e){
        if(e.target.value != ""){
            setEye3('eye-color')
            setPasswordBox3('password-box-color')
            setLock3('lock-color')
            setChangeButton('change-button-color')
            setInputPass3Value(e.target.value)
        }else{
            setEye3('eye')
            setPasswordBox3('password-box')
            setLock3('lock')
            setChangeButton('change-button')
        }
    }

    const changePass = async() =>{
      const data = {
        password: inputPass1Value,
        newPassword: inputPass2Value,
        checkNewPassword: inputPass3Value
      };
      const res = await changePassword(data);
      console.log(res);
    };

  return (
    <HomeLayouts halaman='profile'>
      <RightBox>
        <h4>Change Password</h4>
        <br />
        <p style={{ width: "50%" }}>
          You must enter your current password and then type your new password
          twice.
        </p>
        <form className="form-password-box">
          <div className={passwordBox1}>
            <div className="in-password-box">
              <i className={`fa fa-lock ${lock1} `}></i>
              <input
                className="password-input"
                type={type1}
                placeholder="Current Password"
                onChange={inputPass1}
              />
               <button type="button" style={{border:'none', background:'none'}} onClick={eyeChange1}>
            <i
              className={`fa ${iconEye1} ${eye1}`}
            ></i>
          </button>
            </div>
          </div>
          <br />
          <div className={passwordBox2}>
            <div className="in-password-box">
              <i className={`fa fa-lock ${lock2} `}></i>
              <input
                className="password-input"
                type={type2}
                placeholder="New Password"
                onChange={inputPass2}
              />
               <button type="button" style={{border:'none', background:'none'}} onClick={eyeChange2}>
            <i
              className={`fa ${iconEye2} ${eye2}`}
            ></i>
          </button>
            </div>
          </div>
          <br />
          <div className={passwordBox3}>
            <div className="in-password-box">
              <i className={`fa fa-lock ${lock3} `}></i>
              <input
                className="password-input"
                type={type3}
                placeholder="Repeat New Password"
                onChange={inputPass3}
              />
               <button type="button" style={{border:'none', background:'none'}} onClick={eyeChange3}>
            <i
              className={`fa ${iconEye3} ${eye3}`}
            ></i>
          </button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <Link to={'/profil'}>
          <button className={changeButton} onClick={changePass}>Change Password</button>
          </Link>
        </form>
      </RightBox>
    </HomeLayouts>
  );
};

export default ChangePassword;
