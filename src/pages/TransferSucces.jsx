import React, { useEffect, useState } from 'react'
import Card6 from "../components/Card/Card6";
import Card5 from "../components/Card/Card5";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import people1 from "../Assets/Ragil.png";
import { Link, useNavigate } from "react-router-dom";
import ButtonComp from "../components/Button/ButtonComp";
import succesImg from '../Assets/success.png'
import '../styles/Transfer/styleTransferSucces.css'
import { getUserbyEmail, getUserReceiverbyEmail } from '../services/UserService';
import NumberFormat from 'react-number-format';
const TransferSucces = () => {
  const [date, setDate] = useState();
  const [nama, setNama] = useState();
  const [email, setEmail] = useState();
  const [lastBalance,setLastBalance] = useState();


  function getCurrentDate() {
    var today = new Date();
     var dateNow = today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();
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
    setLastBalance(res.data.data.saldo);
  }
  return (
    <HomeLayouts halaman="transfer">
      <RightBox>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}}>
              <img style={{width:'100px', height:'100px'}} src={succesImg} alt="succes" />
              <br />
              <h2>Transfer Succes</h2>
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
          />}/>
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
        <Card6 cardTitle="Date & Times" cardSubtitle={date} />
        <Card6 cardTitle="Notes" cardSubtitle={localStorage.getItem("notes")} />
        <br />
        <h4>Transfer To</h4>
        <Card5
          image={people1}
          cardTitle={nama}
          cardSubtitle={email}
        />
        <br />
        <div className="button-box-succes">
              <ButtonComp
                color="white"
                backgroundColor="rgba(99, 121, 244, 0.15)"
                width="50px"
                bgHover="white"
                colorHover="#6379F4"
                border="1px solid black"
                borderHover="1px solid black"
              >
                <i className='fa fa-share' style={{color:'#6379F4'}}></i>
              </ButtonComp>
              <ButtonComp
                color="#6379F4"
                backgroundColor="rgba(99, 121, 244, 0.15);"
                width="150px"
                bgHover="white"
                colorHover="#6379F4"
                border="1px solid black"
                borderHover="1px solid black"
              >
                <i className='fa fa-download' style={{marginRight: "10px",color:"#6379F4"}}></i>
                Download PDF
              </ButtonComp>
                <Link to={'/home'}>
              <ButtonComp
                color="white"
                backgroundColor="#6379F4"
                width="150px"
                bgHover="white"
                colorHover="#6379F4"
                border="1px solid black"
                borderHover="1px solid black"
              >
                Back to Home
              </ButtonComp>
                </Link>
            </div>
      </RightBox>
    </HomeLayouts>
  )
}

export default TransferSucces