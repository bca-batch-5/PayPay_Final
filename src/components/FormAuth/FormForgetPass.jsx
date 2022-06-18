import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BorderInput } from "./FormLoginStyle";
import "../../styles/Form/ManipulationForm.css";
import {
  ForgetPassService,
  newPassService,
  sendEmailForgetPass,
} from "../../services/ForgetPassService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormForgetPass = (props) => {
  const { pageValid } = props;
  const [formDisplay, setFormDisplay] = useState();
  const [iconClassEmail, setIconClassEmail] = useState();
  const [inputValidEmail, setInputValidEmail] = useState();

  const [emailValue, setEmailValue] = useState();
  const [alertMessage, setAlertMessage] = useState();
  const [alertMessageEmailNotFound, setAlertMessageEmailNotFound] = useState();
  const [buttonLogin, setButtonLogin] = useState();
  const [emailSumbit, setEmailSubmit] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (pageValid === "forget-pass") {
      setFormDisplay("form-display");
    } else {
      setFormDisplay("form-no-display");
    }
  });

  const sendEmail = async () => {
    const data = {
      to: emailValue,
      subject: "Link forget password for your account",
    };
    if (emailValue != null) {
      const res = await sendEmailForgetPass(data);
      console.log(res);
    }
  };

  const inputEmailResetPass = async () => {
    const data = {
      email: emailValue,
    };
    const res = await ForgetPassService(data);
    if (res.data.status === 200) {
      sendEmail();
      setTimeout(() => navigate("/signin"), 3000);
      toast.success("Check your email to change pass", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      setIconClassEmail("icon-red");
      setInputValidEmail("input-failed");
      setAlertMessageEmailNotFound("wrong-pass-display");
    }
  };

  function forgetPassEmailForm(e) {
    e.preventDefault();
    inputEmailResetPass(e);
  }

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
      setAlertMessageEmailNotFound("wrong-pass-no-display");
    } else {
      setButtonLogin("btn-login-valid");
    }
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
        <p id="alert" className={`WrongPassword ${alertMessageEmailNotFound}`}>
          Email Tidak Terdaftar
        </p>
        <button
          id="btnLogin"
          className={`btn-Login ${buttonLogin}`}
          onClick={validationEmail}
        >
          Confirm
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={2000}
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

export default FormForgetPass;
