import React, { useEffect, useState } from "react";
import "../../styles/Form/FormLogin.css";
import { BorderInput } from "./FormLoginStyle";
import "../../styles/Form/ManipulationForm.css";
import { SignUpService } from "../../services/SignUpService";
import { useNavigate } from "react-router-dom";

const FormSignUp = (props) => {
  const { formValid, pageValid } = props;
  const [formDisplay, setFormDisplay] = useState();
  const [iconClassEmail, setIconClassEmail] = useState();
  const [iconClassPass, setIconClassPass] = useState();
  const [inputValidEmail, setInputValidEmail] = useState();
  const [inputValidPass, setInputValidPass] = useState();
  const [messageResponse, setMessageResponse] = useState();
  const [btnEyes, setBtnEyes] = useState();
  const [passType, setPassType] = useState("password");
  const [iconEyes, setIconEyes] = useState("fa-eye-slash");
  const [iconUsername, setIconUsername] = useState();
  const [inputValidUser, setInputValidUser] = useState();
  const [alertMessageUsername, setAlertMessageUsername] = useState();
  const [alertMessagePassword, setAlertMessagePassword] = useState();
  const [alertMessageEmailExist, setAlertMessageEmailExist] = useState();
  const [emailValue, setEmailValue] = useState();
  const [alertMessage, setAlertMessage] = useState();
  const [buttonLogin, setButtonLogin] = useState();
  const [linkClick, setLinkClick] = useState("#");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (pageValid === "signup") {
      setFormDisplay("form-display");
    } else {
      setFormDisplay("form-no-display");
    }
  });

  const register = async () => {
    const data = {
      username,
      email,
      password,
    };

    const res = await SignUpService(data);
    console.log("res status", res.data.status);
    if(res.data.message === "Email sudah terdaftar"){
      setMessageResponse("Email sudah terdaftar");
      setAlertMessageEmailExist("wrong-pass-display");
    }
    if (res.data.status === 201) {
      navigate("/create-pin");
    }
    console.log("Akun ter-registrasi: ", res);
  };

  const submitForm = (e) => {
    e.preventDefault();
    register();
    validationEmail(e);
    validationUsername();
    validationPassword();
  };

  function inputHandlerUserName(e) {
    if (e.target.value === "") {
      setIconUsername("icon-gray");
      setInputValidUser("input-empty");
    } else {
      setIconUsername("icon-blue");
      setInputValidUser("input-valid");
      setAlertMessageUsername("wrong-pass-no-display");
      setUsername(e.target.value);
    }
    btnChange(e);
  }

  function validationUsername() {
    if (username == null) {
      setInputValidUser("input-failed");
      setIconUsername("icon-red");
      setAlertMessageUsername("wrong-pass-display");
    }
  }

  function inputHandlerEmail(e) {
    if (e.target.value === "") {
      setIconClassEmail("icon-gray");
      setInputValidEmail("input-empty");
      setAlertMessageEmailExist("wrong-pass-no-display");
    } else {
      setIconClassEmail("icon-blue");
      setInputValidEmail("input-valid");
      setEmailValue(e.target.value);
      setEmail(e.target.value);
    }
    btnChange(e);
  }

  function inputHandlerPass(e) {
    if (e.target.value === "") {
      setIconClassPass("icon-gray");
      setInputValidPass("input-empty");
      setBtnEyes("icon-gray");
      setAlertMessagePassword("wrong-pass-no-display");
    } else {
      setIconClassPass("icon-blue");
      setInputValidPass("input-valid");
      setBtnEyes("icon-blue");
      setPassword(e.target.value);
    }
    btnChange(e);
  }

  function validationPassword(){
    if(password != null){
      if(password.length < 8){
        setIconClassPass("icon-red");
        setInputValidPass("input-failed");
        setAlertMessagePassword("wrong-pass-display");
      }
    }
  }

  function buttonEyes(e) {
    if (passType === "password") {
      setPassType("text");
    } else {
      setPassType("password");
    }
    if (e.target.classList.contains(`fa-eye-slash`)) {
      setIconEyes("fa-eye");
    } else {
      setIconEyes("fa-eye-slash");
    }
  }

  function validationEmail(e) {
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    e.preventDefault();
    if (emailValue != null) {
      if (emailValue.match(format)) {
        setLinkClick("/create-pin");
      } else {
        e.preventDefault();
        setIconClassEmail("icon-red");
        setInputValidEmail("input-failed");
        setAlertMessage("wrong-pass-display");
      }
    }
  }

  function btnChange(e) {
    if (e.target.value === "") {
      setButtonLogin("btn-login-no-valid");
      setAlertMessage("wrong-pass-no-display");
    } else {
      setButtonLogin("btn-login-valid");
    }
  }
  return (
    <div className={formDisplay}>
      <form>
        <BorderInput className={inputValidUser}>
          <i id="user" className={`fa fa-user ${iconUsername}`}></i>
          <input
            className={`form`}
            id="username"
            type="text"
            placeholder="enter your username"
            onChange={inputHandlerUserName}
          />
        </BorderInput>
        <br />
        <br />
        <br />
        <BorderInput className={inputValidEmail}>
          <i id="envelope" className={`fa fa-envelope ${iconClassEmail}`}></i>
          <input
            className={`form`}
            id="email"
            type="text"
            placeholder="enter your e-mail"
            onChange={inputHandlerEmail}
          />
        </BorderInput>
        <br />
        <br />
        <br />
        <BorderInput className={inputValidPass}>
          <i id="lock" className={`fa fa-lock ${iconClassPass}`}></i>
          <input
            className="form"
            id="password"
            type={passType}
            placeholder="enter your password"
            onInput={inputHandlerPass}
          />
          <button type="button" id="btnEye" className="buttonEye">
            <i
              id="iconBtn"
              className={`fa ${iconEyes} ${btnEyes}`}
              onClick={buttonEyes}
            ></i>
          </button>
        </BorderInput>
        <br />
        <br />
        <p id="alert" className={`WrongPassword ${alertMessage}`}>
          Email Invalid
        </p>
        <p id="alert" className={`WrongPassword ${alertMessageUsername}`}>
          Username cannot empty
        </p>
        <p id="alert" className={`WrongPassword ${alertMessagePassword}`}>
          Password minimal harus 8 karakter
        </p>
        <p id="alert" className={`WrongPassword ${alertMessageEmailExist}`}>
          Email Sudah terdaftar
        </p>
        <button
          id="btnLogin"
          className={`btn-Login ${buttonLogin}`}
          onClick={submitForm}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default FormSignUp;
