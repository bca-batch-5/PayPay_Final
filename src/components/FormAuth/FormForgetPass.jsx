import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BorderInput } from "./FormLoginStyle";
import "../../styles/Form/ManipulationForm.css";

const FormForgetPass = (props) => {
  const { pageValid } = props;
  const [formDisplay, setFormDisplay] = useState();
  const [iconClassEmail, setIconClassEmail] = useState();
  const [iconClassPass, setIconClassPass] = useState();
  const [iconClassPass2, setIconClassPass2] = useState();
  const [inputValidEmail, setInputValidEmail] = useState();
  const [inputValidPass, setInputValidPass] = useState();
  const [inputValidPass2, setInputValidPass2] = useState();
  const [btnEyes, setBtnEyes] = useState();
  const [btnEyes2, setBtnEyes2] = useState();
  const [passType, setPassType] = useState("password");
  const [passType2, setPassType2] = useState("password");
  const [iconEyes, setIconEyes] = useState("fa-eye-slash");
  const [iconEyes2, setIconEyes2] = useState("fa-eye-slash");
  const [emailValue, setEmailValue] = useState();
  const [alertMessage, setAlertMessage] = useState();
  const [buttonLogin, setButtonLogin] = useState();
  const [emailSumbit, setEmailSubmit] = useState();
  const [passSubmit, setPassSubmit] = useState("form-no-display");
  const [passValue, setPassValue] = useState();
  const [passValue2, setPassValue2] = useState();

  useEffect(() => {
    if (pageValid === "forget-pass") {
      setFormDisplay("form-display");
    } else {
      setFormDisplay("form-no-display");
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
      setPassValue(e.target.value);
    }
    btnChange(e);
  }
  function inputHandlerPass2(e) {
    if (e.target.value === "") {
      setIconClassPass2("icon-gray");
      setInputValidPass2("input-empty");
      setBtnEyes2("icon-gray");
    } else {
      setIconClassPass2("icon-blue");
      setInputValidPass2("input-valid");
      setBtnEyes2("icon-blue");
      setPassValue2(e.target.value);
    }
    btnChange(e);
  }

  function validationEmail(e) {
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailValue.match(format)) {
      e.preventDefault();
      setIconClassEmail("icon-red");
      setInputValidEmail("input-failed");
      setAlertMessage("wrong-pass-display");
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

  function forgetPassEmailForm(e) {
    e.preventDefault();
    setEmailSubmit("form-no-display");
    setPassSubmit("form-display");
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
  function buttonEyes2(e) {
    if (passType2 === "password") {
      setPassType2("text");
    } else {
      setPassType2("password");
    }
    if (e.target.classList.contains(`fa-eye-slash`)) {
      setIconEyes2("fa-eye");
    } else {
      setIconEyes2("fa-eye-slash");
    }
  }

  function passwordResetSubmit(){
      alert("Password Terganti");
  }
  return (
    <div className={formDisplay}>
      {/* form email */}
      <form className={emailSumbit} onSubmit={forgetPassEmailForm}>
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
        <p id="alert" className={`WrongPassword ${alertMessage}`}>
          Email Invalid
        </p>
        <button
          id="btnLogin"
          className={`btn-Login ${buttonLogin}`}
          onClick={validationEmail}
        >
          Confirm
        </button>
      </form>
      <form className={passSubmit}>
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
        <br />
        <BorderInput className={inputValidPass2}>
          <i id="lock" className={`fa fa-lock ${iconClassPass2}`}></i>
          <input
            className="form"
            id="password"
            type={passType2}
            placeholder="enter your password"
            onInput={inputHandlerPass2}
          />
          <button type="button" id="btnEye" className="buttonEye">
            <i
              id="iconBtn"
              className={`fa ${iconEyes2} ${btnEyes2}`}
              onClick={buttonEyes2}
            ></i>
          </button>
        </BorderInput>
        <br />
        <br />
        <Link to="/signin" onClick={passwordResetSubmit}>
          <button
            id="btnLogin"
            className={`btn-Login ${buttonLogin}`}
          >
            Reset Password
          </button>
        </Link>
      </form>
    </div>
  );
};

export default FormForgetPass;
