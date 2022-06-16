import React from "react";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import { BorderText } from "../styles/TopUp/StyleTopUp";
import "../styles/TopUp/CssTopUp.css";
import logoBCA from "../Assets/BCA.png";
import logoOVO from "../Assets/OVO.jpg";
import logoDANA from "../Assets/DANA.png";
import logoGOPAY from "../Assets/GOPAY.png";
import { Link } from "react-router-dom";

export const TopUp = () => {
  return (
    <HomeLayouts halaman="topup">
      <RightBox>
        <p>
          <h3>Top Up</h3>
        </p>
        <Link to={"/topup/payment"} className="text-link">
          <BorderText>
            <span className="text-angka">1 </span>
            <img className="image-logo" src={logoBCA} alt="foto" />
            <span className="text-description">M-BCA</span>
          </BorderText>
        </Link>
        <Link to={"/topup/payment"} className="text-link">
          <BorderText>
            <span className="text-angka">2 </span>
            <img className="image-logo" src={logoOVO} alt="foto" />
            <span className="text-description">OVO</span>
          </BorderText>
        </Link>
        <Link to={"/topup/payment"} className="text-link">
          <BorderText>
            <span className="text-angka">3 </span>
            <img className="image-logo" src={logoDANA} alt="foto" />
            <span className="text-description">DANA</span>
          </BorderText>
        </Link>
        <Link to={"/topup/payment"} className="text-link">
        <BorderText>
          <span className="text-angka">4 </span>
          <img className="image-logo" src={logoGOPAY} alt="foto" />
          <span className="text-description">GOPAY</span>
        </BorderText>
        </Link>
      </RightBox>
    </HomeLayouts>
  );
};
