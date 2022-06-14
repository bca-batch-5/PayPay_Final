import React from "react";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import { BorderText } from "../styles/TopUp/StyleTopUp";
import "../styles/TopUp/CssTopUp.css"

export const TopUp = () => {
  return (
    <HomeLayouts halaman="topup">
      <RightBox>
        <p>
          <h3>How To Top Up</h3>
        </p>
        <BorderText>
          <span className="text-angka">1 </span>
          <span className="text-description">Go to the nearest ATM or you can use E-Banking</span>
        </BorderText>
        <BorderText>
          <span className="text-angka">2 </span>
          <span className="text-description">Type your security number on the ATM or E-Banking.</span>
        </BorderText>
        <BorderText>
          <span className="text-angka">3 </span>
          <span className="text-description">Type your security number on the ATM or E-Banking.</span>
        </BorderText>
        <BorderText>
          <span className="text-angka">4 </span>
          <span className="text-description">Type your security number on the ATM or E-Banking.</span>
        </BorderText>
        <BorderText>
          <span className="text-angka">5 </span>
          <span className="text-description">Type your security number on the ATM or E-Banking.</span>
        </BorderText>
        <BorderText>
          <span className="text-angka">6 </span>
          <span className="text-description">Type your security number on the ATM or E-Banking.</span>
        </BorderText>
        <BorderText>
          <span className="text-angka">7 </span>
          <span className="text-description">Type your security number on the ATM or E-Banking.</span>
        </BorderText>
        <BorderText>
          <span className="text-angka">8 </span>
          <span className="text-description">Type your security number on the ATM or E-Banking.</span>
        </BorderText>
      </RightBox>
    </HomeLayouts>
  );
};
