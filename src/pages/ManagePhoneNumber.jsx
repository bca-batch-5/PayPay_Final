import React, { useState } from "react";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import { BorderInfo } from "../styles/PersonalInformation/StylePersonalInfo";
import deleteTrash from "../Assets/trash.png";
import "../styles/ManagePhoneNumber/CssManagePhone.css";

export const ManagePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("085920359733");

  function deleteHandler() {
    setPhoneNumber("Phone Number is Empty, Please Fill your Phone Number");
  }
  return (
    <HomeLayouts>
      <RightBox>
        <div className="text-info">Manage Phone Number</div>
        <div className="text-manage-desc">
          You can only delete the phone number and then you must add another
          phone number.
        </div>
        <BorderInfo>
          <div className="text-placeholder">Phone Number</div>
          <div className="border-text-notelp-profil">
            <div className="text-value">{phoneNumber}</div>
            <div className="trash-logo" onClick={deleteHandler}>
              <img src={deleteTrash} alt="trash" />
            </div>
          </div>
        </BorderInfo>
      </RightBox>
    </HomeLayouts>
  );
};
