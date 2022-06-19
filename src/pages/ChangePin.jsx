import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import Pin from "../components/PinForm/Pin";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import { changePin, checkPin } from "../services/ProfilService";
import "../styles/ChangePin/styleChangePin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ChangePin = () => {
  const [display1, setDisplay1] = useState("block");
  const [display2, setDisplay2] = useState("none");
  const [pin, setPin] = useState([]);
  const [newPin, setNewPin] = useState([]);
  const navigate = useNavigate();
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
    if (res.data.status == 400) {
      toast.error("Your Pin is Wrong", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
          
        navigate("/profil")
      },2000);
    }else if(res.data.status == 200){
      if (display1 == "block") {
        setDisplay1("none");
        setDisplay2("block");
      }
    }
  };

  const changePinButton = async () => {
    const data = {
      newPin,
    };
    const res = await changePin(data);
    console.log("change pin res", res);
    if (res.data.status == 200) {
      toast.success("Your Pin has been changed", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/profil")
      },2000);
  };
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
            onClick={checkPinButton}
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
            <button
              style={{ display: display2 }}
              className="change-button-pin"
              onClick={changePinButton}
            >
              Change Pin
            </button>
        </div>
      </RightBox>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </HomeLayouts>
  );
};

export default ChangePin;
