import React, { useState } from "react";
import { useEffect } from "react";
import FormPayTopUp from "../components/FormTopUp/FormPayTopUp";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import {
  BorderNominal,
  BorderPilihanNominal,
} from "../styles/TopUp/StyleTopUpPayment";

export const PayTopUp = () => {
  const [nominal, setNominal] = useState();

  function limaPuluhHandler(e) {
    e.preventDefault();
    setNominal(50000 + "?" + Math.random());
    console.log("test");
  }
  function seratusRibuHandler(e) {
    e.preventDefault();
    setNominal(100000 + "?" + Math.random());
    console.log("test");
  }
  function seratusLimaPuluhHandler(e) {
    e.preventDefault();
    setNominal(150000 + "?" + Math.random());
    console.log("test");
  }
  function duaRatusHandler(e) {
    e.preventDefault();
    setNominal(200000 + "?" + Math.random());
    console.log("test");
  }
  function tigaRatusHandler(e) {
    e.preventDefault();
    setNominal(300000 + "?" + Math.random());
    console.log("test");
  }
  function limaRatusHandler(e) {
    e.preventDefault();
    setNominal(500000 + "?" + Math.random());
    console.log("test");
  }
  return (
    <HomeLayouts>
      <RightBox>
        <p>
          <h3>Top Up</h3>
        </p>
        <BorderPilihanNominal>
          <BorderNominal onClick={limaPuluhHandler}>50.000</BorderNominal>
          <BorderNominal onClick={seratusRibuHandler}>100.000</BorderNominal>
          <BorderNominal onClick={seratusLimaPuluhHandler}>150.000</BorderNominal>
          <BorderNominal onClick={duaRatusHandler}>200.000</BorderNominal>
        </BorderPilihanNominal>
        <BorderPilihanNominal>
          <BorderNominal onClick={tigaRatusHandler}>300.000</BorderNominal>
          <BorderNominal onClick={limaRatusHandler}>500.000</BorderNominal>
        </BorderPilihanNominal>
        <FormPayTopUp nominalPilihan={nominal}></FormPayTopUp>
      </RightBox>
    </HomeLayouts>
  );
};
