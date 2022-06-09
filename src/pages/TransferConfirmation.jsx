import React, { useState } from "react";
import Card6 from "../components/Card/Card6";
import Card5 from "../components/Card/Card5";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import people1 from "../Assets/Ragil.png";
import { Link } from "react-router-dom";
import '../styles/Transfer/styleTransferConfirmation.css'
import ButtonComp from "../components/Button/ButtonComp";
import Pin from "../components/PinForm/Pin";
const TransferConfirmation = () => {
    const[confirmPin, setConfirmPin]= useState('confirm-pin')
    function openPin(){
        if (confirmPin == 'confirm-pin') {
            setConfirmPin('confirm-pin-open')
        }
    }

    function closePin() {
        if (confirmPin == 'confirm-pin-open') {
            setConfirmPin('confirm-pin')
        }
    }

  return (
    <HomeLayouts halaman="transfer">
      <div className={confirmPin}>
        <div className='confirm-pin-box'>
          <div className='in-confirm-pin-box'>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h4>Enter Pin to Transfer</h4>
                <button style={{background:'none',border:'none',cursor:'pointer'}} onClick={closePin}>&#9587;</button>
            </div>
            <br />
            <p style={{width:'50%'}}>Enter your 6 digits PIN for confirmation to continue transferring money. </p>
            <div style={{height:'50%',width:'100%', display:'flex', alignItems:'center'}}>
            <Pin/>
            </div>
            <div className="button-box">
                <Link to={'/transfer/confirmation/succes'}>
              <ButtonComp
                color="white"
                backgroundColor="#6379F4"
                width="150px"
                bgHover="white"
                colorHover="#6379F4"
                border="1px solid black"
                borderHover="1px solid black"
              >
                Continue
              </ButtonComp>
                </Link>
            </div>
          </div>
        </div>
      </div>
      <RightBox>
        <h4>Transfer To</h4>
        <Card5
          image={people1}
          cardTitle="Samuel Suhi"
          cardSubtitle="08990821922"
        />
        <br />
        <h4>Details</h4>
        <Card6 cardTitle="Amount" cardSubtitle="Rp.100.000" />
        <Card6 cardTitle="Balance Left" cardSubtitle="Rp.20.000" />
        <Card6 cardTitle="Date & Times" cardSubtitle="11 Mei 2022" />
        <Card6 cardTitle="Notes" cardSubtitle="Beli Kaos Kaki" />
        <div className="button-box">
                <Link to={'#'}>
              <ButtonComp
                onClick={openPin}
                color="white"
                backgroundColor="#6379F4"
                width="150px"
                bgHover="white"
                colorHover="#6379F4"
                border="1px solid black"
                borderHover="1px solid black"
              >
                Continue
              </ButtonComp>
                </Link>
            </div>
      </RightBox>
    </HomeLayouts>
  );
};

export default TransferConfirmation;
