import React, { useEffect, useState } from "react";
import Card6 from "../components/Card/Card6";
import Card5 from "../components/Card/Card5";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import people1 from "../Assets/Ragil.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Transfer/styleTransferConfirmation.css";
import ButtonComp from "../components/Button/ButtonComp";
import Pin from "../components/PinForm/Pin";
import { getUserbyEmail, getUserReceiverbyEmail } from "../services/UserService";
import { checkPin } from "../services/ProfilService";
import { transferService, updateBalance } from "../services/TransactionService";
import { getEmail } from "../API/Api";
import NumberFormat from "react-number-format";
const TransferConfirmation = () => {
  const [date, setDate] = useState();
  const [confirmPin, setConfirmPin] = useState("confirm-pin");
  const [nama, setNama] = useState();
  const [email, setEmail] = useState();
  const [pin, setPin] = useState([]);
  const [lastBalance,setLastBalance] = useState();

  const navigate = useNavigate();

  function openPin() {
    if (confirmPin == "confirm-pin") {
      setConfirmPin("confirm-pin-open");
    }
  }

  function closePin() {
    if (confirmPin == "confirm-pin-open") {
      setConfirmPin("confirm-pin");
    }
  } 

  function getCurrentDate() {
    var today = new Date();
    var monthTemp = parseInt(today.getMonth());
    var monthNow = monthTemp + 1;
    if(monthNow > 12){
      monthNow = 1;
    }
     var dateNow = today.getDate() + "-" + monthNow + "-" + today.getFullYear();
     console.log(dateNow);
    setDate(dateNow);
  }

  useEffect(() => {
    getUser();
    getCurrentDate();
    User();
  }, []);

  const getUser = async () => {
    const email = localStorage.getItem("emailReceiver");
    const res = await getUserReceiverbyEmail(email);
    console.log(res);
    setNama(res.data.data.nama);
    setEmail(res.data.data.user.email);
  };

  const User = async () =>{
    const res = await getUserbyEmail();
    const nominalTransfer = +localStorage.getItem("nominalTransfer");
    setLastBalance(res.data.data.saldo - nominalTransfer );
  }

  function getValue(e) {
    if (e.target.value != "") {
      setPin([...pin, e.target.value]);
    }
  }

  const checkPinButton = async () => {
    const data = {
      pin,
    };

    const addNominal = +localStorage.getItem("nominalTransfer")
    const transaksi ={
      nominal: addNominal,
      note: localStorage.getItem("notes"),
      emailTo: localStorage.getItem("emailReceiver")
    }
    const res = await checkPin(data);
    console.log("checkpin res", res);
    if (res.data.message == "Pin yang anda masukkan benar") {
      const transfer = await transferService(transaksi);
      console.log(transfer);
      const updateBalance1 = await updateBalance(getEmail())
      console.log(updateBalance1);
      const updateBalance2 = await updateBalance(localStorage.getItem("emailReceiver"))
      console.log(updateBalance2);
      navigate("/transfer/confirmation/succes")
    }else{
      navigate("/transfer/confirmation/failed")
    }
  };

  return (
    <HomeLayouts halaman="transfer">
      <div className={confirmPin}>
        <div className="confirm-pin-box">
          <div className="in-confirm-pin-box">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Enter Pin to Transfer</h4>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={closePin}
              >
                &#9587;
              </button>
            </div>
            <br />
            <p style={{ width: "50%" }}>
              Enter your 6 digits PIN for confirmation to continue transferring
              money.{" "}
            </p>
            <div
              style={{
                height: "50%",
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Pin onInput={getValue} />
            </div>
            <div className="button-box">
                <ButtonComp
                  color="white"
                  backgroundColor="#6379F4"
                  width="150px"
                  bgHover="white"
                  colorHover="#6379F4"
                  border="1px solid black"
                  borderHover="1px solid black"
                  onClick={checkPinButton}
                >
                  Continue
                </ButtonComp>
            </div>
          </div>
        </div>
      </div>
      <RightBox>
        <h4>Transfer To</h4>
        <Card5 image={people1} cardTitle={nama} cardSubtitle={email} />
        <br />
        <h4>Details</h4>
        <Card6
          cardTitle="Amount"
          cardSubtitle={<NumberFormat
            thousandsGroupStyle="thousand"
            value={localStorage.getItem("nominalTransfer")}
            prefix="Rp "
            decimalSeparator=","
            displayType="text"
            type="text"
            thousandSeparator="."
            allowNegative={true}
          />}
        />
        <Card6 cardTitle="Balance Left" cardSubtitle={
        <NumberFormat
            thousandsGroupStyle="thousand"
            value={lastBalance}
            prefix="Rp "
            decimalSeparator=","
            displayType="text"
            type="text"
            thousandSeparator="."
            allowNegative={true}
          />
          } />
        <Card6
          cardTitle="Date & Times"
          cardSubtitle={date}
        />
        <Card6 cardTitle="Notes" cardSubtitle={localStorage.getItem("notes")} />
        <div className="button-box">
          <Link to={"#"}>
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
