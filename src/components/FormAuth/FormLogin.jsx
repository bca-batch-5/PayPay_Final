import React, { useEffect, useState } from "react";
import "../../styles/Form/FormLogin.css";
import { BorderInput } from "./FormLoginStyle";
import "../../styles/Form/ManipulationForm.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormLogin = (props) => {
  const { formValid, pageValid } = props;
  const [emailValue, setEmailValue] = useState();
  const [passwordValue, setPasswordValue] = useState();
  const [formDisplay, setFormDisplay] = useState();
  const [iconClassEmail, setIconClassEmail] = useState();
  const [iconClassPass, setIconClassPass] = useState();
  const [inputValidEmail, setInputValidEmail] = useState();
  const [inputValidPass, setInputValidPass] = useState();
  const [btnEyes, setBtnEyes] = useState();
  const [passType, setPassType] = useState("password");
  const [iconEyes, setIconEyes] = useState("fa-eye-slash");
  const [alertMessage, setAlertMessage] = useState();
  const [alertMessagePassword, setAlertMessagePassword] = useState();

  const [buttonLogin, setButtonLogin] = useState();
  const [linkClick, setLinkClick] = useState("#");
  const navigate = useNavigate();

  useEffect(() => {
    if (pageValid === "signin") {
      setFormDisplay("form-display");
    } else {
      setFormDisplay("form-no-display");
    }
    
  });

  const login = async () => {
    const data = {
      email: emailValue,
      password: passwordValue,
    };
    try {
      const res = await AuthService(data);
      if (res.data.status === 201) {
        setTimeout(() => navigate("/home"), 2000);
        toast.success("Login Success", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
      if (res.data.message === "Bad credentials") {
        setIconClassPass("icon-red");
        setInputValidPass("input-failed");
        setAlertMessagePassword("wrong-pass-display");
      }
      if (res.data.message === "Email tidak terdaftar") {
        setIconClassEmail("icon-red");
        setInputValidEmail("input-failed");
        setAlertMessage("wrong-pass-display");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    login();
  };

  function inputHandlerEmail(e) {
    if (e.target.value === "") {
      setIconClassEmail("icon-gray");
      setInputValidEmail("input-empty");
    } else {
      setIconClassEmail("icon-blue");
      setInputValidEmail("input-valid");
      setAlertMessage("wrong-pass-no-display");
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
      setPasswordValue(e.target.value);
      setAlertMessagePassword("wrong-pass-no-display");
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

  function btnChange(e) {
    if (e.target.value === "") {
      setButtonLogin("btn-login-no-valid");
      setAlertMessagePassword("wrong-pass-no-display");
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
          Email tidak di temukan
        </p>
        <p id="alert" className={`WrongPassword ${alertMessagePassword}`}>
          Password tidak sesuai
        </p>
        {/* ini harusnya pake Link React Router */}
        <button
          id="btnLogin"
          className={`btn-Login ${buttonLogin}`}
          onClick={loginSubmit}
        >
          Login
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};
