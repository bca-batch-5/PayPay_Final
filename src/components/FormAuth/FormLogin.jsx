import React, { useEffect, useState } from "react";
import "../../styles/Form/FormLogin.css";
import { BorderInput } from "./FormLoginStyle";
import "../../styles/Form/ManipulationForm.css";
import { Link } from "react-router-dom";

export const FormLogin = (props) => {
  const { formValid , pageValid} = props;
  const [emailValue, setEmailValue] = useState();
  const [formDisplay, setFromDisplay] = useState();
  const [iconClassEmail, setIconClassEmail] = useState();
  const [iconClassPass, setIconClassPass] = useState();
  const [inputValidEmail, setInputValidEmail] = useState();
  const [inputValidPass, setInputValidPass] = useState();
  const [btnEyes, setBtnEyes] = useState();
  const [passType, setPassType] = useState("password");
  const [iconEyes, setIconEyes] = useState("fa-eye-slash");
  const [alertMessage, setAlertMessage] = useState();
  const [buttonLogin, setButtonLogin] = useState();
  const [linkClick, setLinkClick] = useState("#");

  useEffect(() => {
    if (formValid === false) {
      setFromDisplay("form-valid");
    }
    if(pageValid === "create-pin" || pageValid === "forget-pass"){
      setFromDisplay("form-valid");
    }
  });

  function inputHandlerEmail(e) {
    if (e.target.value === "") {
      setIconClassEmail("icon-gray");
      setInputValidEmail("input-empty");
    } else {
      setIconClassEmail("icon-blue");
      setInputValidEmail("input-valid");
      setEmailValue(e.target.value);
    }
    btnChange(e);
  }

  function inputHandlerPass(e) {
    if (e.target.value === "") {
      setIconClassPass("icon-gray");
      setInputValidPass("input-empty");
      setBtnEyes("icon-gray");
    } else {
      setIconClassPass("icon-blue");
      setInputValidPass("input-valid");
      setBtnEyes("icon-blue");
    }
    btnChange(e);
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
    if (emailValue.match(format)) {
      e.preventDefault();
      setLinkClick("#");
    } else {
      e.preventDefault();
      setIconClassEmail("icon-red");
      setInputValidEmail("input-failed");
      setIconClassPass("icon-red");
      setInputValidPass("input-failed");
      setBtnEyes("icon-red");
      setAlertMessage("wrong-pass-display");
    }
  }

  function btnChange(e) {
    console.log("ini pass value" + e.target.value);
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
        <Link className="forgot-pass" to="/forget-password">
          Forgot password?
        </Link>
        <br />
        <br />
        <p id="alert" className={`WrongPassword ${alertMessage}`}>
          Email or Password Invalid
        </p>
        {/* ini harusnya pake Link React Router */}
        <a id="aHref" href={linkClick}>
          <button id="btnLogin" className={`btn-Login ${buttonLogin}`} onClick={validationEmail}>
            Login
          </button>
        </a>
      </form>
    </div>
  );
};
