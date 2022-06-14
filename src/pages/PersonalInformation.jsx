import React from "react";
import { Link } from "react-router-dom";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import "../styles/PersonalInformation/CssPersonalInfo.css";
import { BorderInfo } from "../styles/PersonalInformation/StylePersonalInfo";

export const PersonalInformation = () => {
  return (
    <HomeLayouts>
      <RightBox>
        <div className="text-personal-info">Personal Information</div>
        <div className="text-personal-desc">
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </div>
        <BorderInfo>
          <div className="text-placeholder">Full Name</div>
          <div className="text-value">Robert</div>
        </BorderInfo>
        <BorderInfo>
          <div className="text-placeholder">Verified Email</div>
          <div className="text-value">ianbernard12@yahoo.com</div>
        </BorderInfo>
        <BorderInfo>
          <div className="text-placeholder">Phone Number</div>
          <div className="border-text-notelp-profil">
            <div className="text-value">085920359733</div>
            <Link to={"/add-phone"} className="text-link">
              <div className="text-manage">Manage</div>
            </Link>
          </div>
        </BorderInfo>
      </RightBox>
    </HomeLayouts>
  );
};
