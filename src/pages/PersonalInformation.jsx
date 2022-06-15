import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import { getUserbyEmail } from "../services/UserService";
import "../styles/PersonalInformation/CssPersonalInfo.css";
import { BorderInfo } from "../styles/PersonalInformation/StylePersonalInfo";

export const PersonalInformation = () => {
  const [nama, setNama] = useState();
  const [noTelp, setNoTelp] = useState("nomor Telpon belum ada");
  const [email, setEmail] = useState();
  useEffect(() => {
    getUserData();
  });
  const getUserData = async () => {
    const response = await getUserbyEmail();
    setNama(response.data.data.nama);
    setEmail(response.data.data.user.email);
    if (response.data.data.noTelp != null) {
      setNoTelp("+62" + response.data.data.noTelp);
    }
  };
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
          <div className="text-value">{nama}</div>
        </BorderInfo>
        <BorderInfo>
          <div className="text-placeholder">Verified Email</div>
          <div className="text-value">{email}</div>
        </BorderInfo>
        <BorderInfo>
          <div className="text-placeholder">Phone Number</div>
          <div className="border-text-notelp-profil">
            <div className="text-value">{noTelp}</div>
            <Link to={"/add-phone"} className="text-link">
              <div className="text-manage">Manage</div>
            </Link>
          </div>
        </BorderInfo>
      </RightBox>
    </HomeLayouts>
  );
};
