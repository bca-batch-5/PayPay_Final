import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pin from "../components/PinForm/Pin";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import { changePin, checkPin } from "../services/ProfilService";
import "../styles/ChangePin/styleChangePin.css";
const ChangePin = () => {
  const [display1, setDisplay1] = useState("block");
  const [display2, setDisplay2] = useState("none");
  const [pin, setPin] = useState([]);
  const [newPin, setNewPin] = useState([]);
  function continueButton() {
    if (display1 == "block") {
      setDisplay1("none");
      setDisplay2("block");
      checkPinButton();
    }
  }

  function getValue(e) {
    if (e.target.value != "") {
      setPin([...pin, e.target.value]);
    }
  }
  function getValue2(e) {
    if (e.target.value != "") {
      setNewPin([...newPin, e.target.value]);
    }
  }

  const checkPinButton = async () => {
    const data = {
      pin,
    };
    const res = await checkPin(data);
    console.log("checkpin res", res);
  };

  const changePinButton = async () => {
    const data = {
      newPin,
    };
    const res = await changePin(data);
    console.log("change pin res", res);
  };

  return (
    <HomeLayouts halaman="profile">
      <RightBox>
        <h4 style={{ display: display1 }}>Change Pin</h4>
        <br />
        <p style={{ width: "50%", display: display1 }}>
          Enter your current 6 digits PayPay PIN below to continue to the next
          steps.
        </p>
        <div style={{ display: display1 }} className="pin-box">
          <Pin onInput={getValue} />
          <br />
          <button
            onClick={continueButton}
            style={{ display: display1 }}
            className="change-button-pin"
          >
            Continue
          </button>
        </div>
        {/* bagian kedua yang di hide */}
        <h4 style={{ display: display2 }}>Change Pin</h4>
        <br />
        <p style={{ width: "50%", display: display2 }}>
          Type your new 6 digits security PIN to use in PayPay.
        </p>
        <div style={{ display: display2 }} className="pin-box">
          <Pin onInput={getValue2} />
          <br />
          <Link to={"/profil"} style={{textDecoration:"none"}}>
            <button
              style={{ display: display2 }}
              className="change-button-pin"
              onClick={changePinButton}
            >
              Change Pin
            </button>
          </Link>
        </div>
      </RightBox>
    </HomeLayouts>
  );
};

export default ChangePin;
