import React from "react";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import { BorderPilihanNominal } from "../styles/TopUp/StyleTopUpPayment";

export const PayTopUp = () => {
  return (
    <HomeLayouts>
      <RightBox>
        <p>
          <h3>Top Up</h3>
        </p>
        <BorderPilihanNominal>
          <div>50.000</div>
          <div>100.000</div>
          <div>150.000</div>
          <div>200.000</div>
        </BorderPilihanNominal>
        <BorderPilihanNominal>
          <div>300.000</div>
          <div>500.000</div>
        </BorderPilihanNominal>
      </RightBox>
    </HomeLayouts>
  );
};
