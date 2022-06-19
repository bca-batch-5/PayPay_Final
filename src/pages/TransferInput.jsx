import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Card5 from "../components/Card/Card5";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import people1 from "../Assets/defaultPhoto.jpg";
import "../styles/Transfer/styleTransferInput.css";
import ButtonComp from "../components/Button/ButtonComp";
import {
  getUserbyEmail,
  getUserReceiverbyEmail,
} from "../services/UserService";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import NumberFormat from "react-number-format";
import { useCallback } from "react";
import { getReceiverProfilByEmail } from "../services/TransactionService";
const TransferInput = () => {
  const [color, setColor] = useState();
  const [textColor, setTextColor] = useState();
  const [nama, setNama] = useState();
  const [email, setEmail] = useState();
  const [nominal, setNominal] = useState();
  const [balance, setBalance] = useState();
  const [direction,setDirection] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");
  const [image, setImage] = useState();

  const navigate = useNavigate();
  function inputText(e) {
    if (e.target.value != "") {
      setTextColor("#6379F4");
      localStorage.setItem("notes", e.target.value);
      console.log("tes");
    } else {
      setTextColor("grey");
    }
  }
  
  function inputNominal(e) {
    if (e.target.value != toBeEmpty) {
      setColor("#6379F4");
      setNominal(e.target.value.replace(/[^0-9]+/g, ""));
    }
  }
  
  localStorage.setItem("nominalTransfer", nominal);

  function setLocal() {
    if (nominal != null && localStorage.getItem("nominalTransfer") <= balance) {
      setTimeout(() => {
          
        navigate("/transfer/confirmation")
      }, 0);
    } else if(nominal == null && localStorage.getItem("nominalTransfer") > balance) {
      setDirection("#");
    }
    checkSaldo();
  }

  function checkSaldo(){
    if (localStorage.getItem("nominalTransfer") <= balance) {
      setErrorDisplay("none")
    }else if (localStorage.getItem("nominalTransfer") > balance) {
      setErrorDisplay("block")
    }
  }

  useEffect(() => {
    // getUser();
    User();
    getImageUser();
  }, []);

  const User = async () => {
    const res = await getUserbyEmail();
    console.log("userdetail res", res);
    setBalance(res.data.data.saldo);
  };

  // const getUser = async () => {
  //   const email = localStorage.getItem("emailReceiver");
  //   const res = await getUserReceiverbyEmail(email);
  //   console.log(res);
  //   setNama(res.data.data.nama);
  //   setEmail(res.data.data.user.email);
  // };

  const getImageUser = async () => {
    const res = await getReceiverProfilByEmail(localStorage.getItem("emailReceiver"));
    console.log(res);
    setNama(res.data.data.nama);
    setEmail(res.data.data.email);
    setImage(res.data.data.image ? res.data.data.image : people1)
    
  };

  return (
    <HomeLayouts halaman="transfer">
      <RightBox>
        <h4>Transfer Money</h4>
        <Card5 image={image} cardTitle={nama} cardSubtitle={email} />
        <p style={{ color: "#7A7886", width: "45%", marginTop: "30px" }}>
          Type the amount you want to transfer and then press continue to the
          next steps.
        </p>
        <div className="transfer-input-box">
          <div className="in-transfer-input-box">
            <div className="input-nominal-box">
              <NumberFormat
                style={{ color: color }}
                className="input-nominal"
                thousandsGroupStyle="thousand"
                value={nominal}
                prefix="Rp"
                decimalSeparator=","
                displayType="input"
                type="input"
                thousandSeparator="."
                maxLength="13"
                placeholder="0.00"
                onChange={inputNominal}
                allowNegative={true}
              />
              <h4 style={{ fontSize: "20px" }}>
                <NumberFormat
                  thousandsGroupStyle="thousand"
                  value={balance}
                  prefix="Rp "
                  decimalSeparator=","
                  displayType="text"
                  type="text"
                  thousandSeparator="."
                  allowNegative={true}
                />
                <span> Available</span>
              </h4>
              <h4 style={{color:"red", display:errorDisplay}}>Saldo Anda tidak mencukupi</h4>
            </div>
            <div
              style={{ borderBottomColor: textColor }}
              className="input-text-box"
            >
              <i style={{ color: textColor }} className="fa fa-pen"></i>
              <input
                style={{ color: textColor }}
                className="input-text"
                type="text"
                placeholder="Add Some Message"
                onChange={inputText}
              />
            </div>
            <div className="button-box">
              <Link to={direction} >
              <ButtonComp
                color="white"
                backgroundColor="#6379F4"
                width="150px"
                bgHover="white"
                colorHover="#6379F4"
                border="1px solid black"
                borderHover="1px solid black"
                onClick={setLocal}
                
              >
                Continue
              </ButtonComp>
              </Link>
            </div>
          </div>
        </div>
      </RightBox>
    </HomeLayouts>
  );
};

export default TransferInput;
