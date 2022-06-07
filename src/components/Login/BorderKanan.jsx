import React, { useEffect, useState } from "react";
import {
  BorderJudul,
  BoxKanan,
  BoxKananDalam,
} from "../../styles/Login/StyleLogin";
import { FormLogin } from "../FormAuth/FormLogin";
import { FormSignUp } from "../FormAuth/FormSignUp";
import FormCreatePin from "../FormAuth/FormCreatePin";
import "../../styles/Form/FormLogin.css";
import { Link } from "react-router-dom";
import SuccessImage from "../../Assets/success.png";
import FormForgetPass from "../FormAuth/FormForgetPass";


const BorderKanan = (props) => {
  const { linking, linkPage, judul, subJudul, page } = props;
  const [formValidation, setFormValidation] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [linkDisplay, setLinkDisplay] = useState();
  const [judulBorder, setJudulBorder] = useState(judul);
  const [subJudulBorder, setSubJudulBorder] = useState(subJudul);
  const [successDisplay, setSuccessDisplay] = useState("logo-sucess-no-valid");

  useEffect(() => {
    // page berada di signUp
    if (linkPage === "/signin") {
      setFormValidation(false);
    } else if (linkPage === "/signup") {
      // page berada di login
      setFormValidation(true);
    }
    setCurrentPage(page);
    // menghilangkan pilihan untuk login atau signup
    if (currentPage === "create-pin" || currentPage === "forget-pass") {
      setLinkDisplay("form-valid");
    }
  });

  function successHandler(display, title, subTitle){
    setSuccessDisplay(display);
    setJudulBorder(title);
    setSubJudulBorder(subTitle);
  }
    
  return (
    <BoxKanan>
      <BoxKananDalam>
        <BorderJudul>
          <div id="titleImage" className={successDisplay}>
            <img src={SuccessImage} alt="success" />
          </div>
          <h2>{judulBorder}</h2>
          <br />
          <p>{subJudulBorder}</p>
        </BorderJudul>
        <div>
          <div className="form-box">
            <FormLogin formValid={formValidation} pageValid={currentPage} />
            <FormSignUp formValid={formValidation} pageValid={currentPage} />
            <FormCreatePin pageValid={currentPage} logoSuccess={successHandler}></FormCreatePin>
            <FormForgetPass pageValid={currentPage}></FormForgetPass>
            <br />
            <br />
            <p className={`form-subtext ${linkDisplay}`}>
              Don't have an account? Lets
              <Link className="signup" to={linkPage}>
                {linking}
              </Link>
            </p>
          </div>
        </div>
      </BoxKananDalam>
    </BoxKanan>
  );
};

export default BorderKanan;
