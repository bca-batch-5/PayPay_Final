import React from "react";
import {
  BorderLogo,
  BorderTitle,
  LeftImage,
  LeftSubText,
} from "../../styles/Login/StyleLogin";
import MaskGroup from "../../Assets/MaskGroup.svg";
import phoneOne from "../../Assets/png-phone.png";
import phoneTwo from "../../Assets/png-phone2.png";
import "../../styles/Login/CssLogin.css";
import { Link } from "react-router-dom";

const BorderKiri = () => {
  return (
    <BorderLogo image={MaskGroup}>
      <Link to="/" className="border-title">
        PayPay
      </Link>
      <LeftImage>
        <img src={phoneTwo} alt="gambar phone 2" className="image-phone2" />
        <img src={phoneOne} alt="gambar phone 1" className="image-phone1" />
      </LeftImage>
      <LeftSubText>
        <h2>App that Covering Banking Needs.</h2>
        <br />
        <p>
          Pay Pay is an application that focussing in banking needs for all
          users in the world. Always updated and always following world trends.
          5000+ users registered in PayPay everyday with worldwide users
          coverage.
        </p>
      </LeftSubText>
    </BorderLogo>
  );
};

export default BorderKiri;
