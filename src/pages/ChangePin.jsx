import React, { useState } from "react";
import Pin from "../components/PinForm/Pin";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import '../styles/ChangePin/styleChangePin.css'
const ChangePin = () => {
const [display1,setDisplay1]=useState('block')
const [display2,setDisplay2]=useState('none')

function continueButton(){
    if(display1 == 'block'){
        setDisplay1('none')
        setDisplay2('block')
    }
}

  return (
    <HomeLayouts halaman="profile">
      <RightBox>
        <h4 style={{display:display1}}>Change Pin</h4>
        <br />
        <p style={{ width: "50%",display:display1 }}>
        Enter your current 6 digits PayPay PIN below to continue to the next steps.
        </p>
        <div style={{display:display1}} className="pin-box">
        <Pin/>
        <br />
          <button onClick={continueButton} style={{display:display1}} className='change-button-pin'>Continue</button>
        </div>
        {/* bagian kedua yang di hide */}
        <h4 style={{display:display2}}>Change Pin</h4>
        <br />
        <p style={{ width: "50%",display:display2 }}>
        Type your new 6 digits security PIN to use in PayPay.
        </p>
        <div style={{display:display2}} className="pin-box">
        <Pin/>
        <br />
          <button style={{display:display2}} className='change-button-pin'>Change Pin</button>
        </div>
      </RightBox>
    </HomeLayouts>
  );
};

export default ChangePin;
