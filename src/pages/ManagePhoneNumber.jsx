import { useEffect, useState } from "react";
import deleteTrash from "../Assets/trash.png";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import { deletePhoneNumber } from "../services/ProfilService";
import { getUserbyEmail } from "../services/UserService";
import "../styles/ManagePhoneNumber/CssManagePhone.css";
import { BorderInfo } from "../styles/PersonalInformation/StylePersonalInfo";

export const ManagePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("Phone Number is not exist");

  useEffect(() => {
    getUserData();
  });

  const deleteHandler= async(e) => {
    e.preventDefault();
   const res = await deletePhoneNumber();
   setPhoneNumber("Phone Number is not exist");
   console.log("dari manage phone", res);
  }

  const getUserData = async () => {
    const response = await getUserbyEmail();
    if (response.data.data.noTelp != null) {
      setPhoneNumber("+62" + response.data.data.noTelp);
    }
  };
  return (
    <HomeLayouts nomorTelfon ={phoneNumber}>
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
