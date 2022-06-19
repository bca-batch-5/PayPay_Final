import React from "react";
import { FormAddNumber } from "../components/FormAddPhone/FormAddNumber";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import { BorderFormTelpon } from "../styles/AddPhoneNumber/StyleAddPhone";
import "../styles/AddPhoneNumber/CssManage.css";

export const AddPhoneNumber = () => {
  return (
    <HomeLayouts>
      <RightBox>
        <div className="text-info">Personal Information</div>
        <div className="text-manage-desc">
          Add at least one phone number for the transfer ID so you can start
          transfering your money to another user.
        </div>
        <BorderFormTelpon>
          <FormAddNumber/>
        </BorderFormTelpon>
      </RightBox>
    </HomeLayouts>
  );
};
