import React, { useEffect, useState } from 'react'
import Card6 from "../components/Card/Card6";
import Card5 from "../components/Card/Card5";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import people1 from "../Assets/defaultPhoto.jpg";
import { Link } from "react-router-dom";
import '../styles/Transfer/styleTransferConfirmation.css'
import ButtonComp from "../components/Button/ButtonComp";
import failedImg from '../Assets/failed.png'
import '../styles/Transfer/styleTransferSucces.css'
import { getUserbyEmail, getUserReceiverbyEmail } from '../services/UserService';
import NumberFormat from 'react-number-format';
import { getReceiverProfilByEmail } from '../services/TransactionService';
const TransferFailed = () => {
  const [date, setDate] = useState();
  const [nama, setNama] = useState();
  const [image, setImage] = useState();
  const [email, setEmail] = useState();
  const [lastBalance,setLastBalance] = useState();


  function getCurrentDate() {
    var today = new Date();
     var dateNow = today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();
     console.log(dateNow);
    setDate(dateNow);
  }

  useEffect(() => {
    getImageUser();
    getCurrentDate();
    User();
    clearNotes();
  }, []);

  const getImageUser = async () => {
    const res = await getReceiverProfilByEmail(localStorage.getItem("emailReceiver"));
    console.log(res);
    setNama(res.data.data.nama);
    setEmail(res.data.data.email);
    setImage(res.data.data.image ? res.data.data.image : people1)
    
  };

  function clearNotes() {
    localStorage.removeItem("notes")
    localStorage.removeItem("nominalTransfer")
  }

  const User = async () =>{
    const res = await getUserbyEmail();
    setLastBalance(res.data.data.saldo);
  }
  return (
    <HomeLayouts halaman="transfer">
      <RightBox>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}}>
              <img style={{width:'100px', height:'100px'}} src={failedImg} alt="succes" />
              <br />
              <h2>Transfer Failed</h2>
              <br />
              <p style={{width:'80%', textAlign:'center'}}>We can't transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
          </div>
          <br />
        <h4>Details</h4>
        <Card6 cardTitle="Amount" cardSubtitle={<NumberFormat
            thousandsGroupStyle="thousand"
            value={localStorage.getItem("nominalTransfer")}
            prefix="Rp "
            decimalSeparator=","
            displayType="text"
            type="text"
            thousandSeparator="."
            allowNegative={true}
          />} />
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
          }/>
        <Card6 cardTitle="Date & Times" cardSubtitle={date}/>
        <Card6 cardTitle="Notes" cardSubtitle={localStorage.getItem("notes")} />
        <br />
        <h4>Transfer To</h4>
        <Card5
          image={image}
          cardTitle={nama}
          cardSubtitle={email}
        />
        <br />
        <div className="button-box">
                <Link to={'/transfer/input'}>
              <ButtonComp
                color="white"
                backgroundColor="#6379F4"
                width="150px"
                bgHover="white"
                colorHover="#6379F4"
                border="1px solid black"
                borderHover="1px solid black"
              >
                Try Again
              </ButtonComp>
                </Link>
            </div>
      </RightBox>
    </HomeLayouts>
  )
}

export default TransferFailed