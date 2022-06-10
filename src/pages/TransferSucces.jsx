import React from 'react'
import Card6 from "../components/Card/Card6";
import Card5 from "../components/Card/Card5";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import people1 from "../Assets/Ragil.png";
import { Link } from "react-router-dom";
import ButtonComp from "../components/Button/ButtonComp";
import succesImg from '../Assets/success.png'
import '../styles/Transfer/styleTransferSucces.css'
const TransferSucces = () => {
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
        <Card6 cardTitle="Amount" cardSubtitle="Rp.100.000" />
        <Card6 cardTitle="Balance Left" cardSubtitle="Rp.20.000" />
        <Card6 cardTitle="Date & Times" cardSubtitle="11 Mei 2022" />
        <Card6 cardTitle="Notes" cardSubtitle="Beli Kaos Kaki" />
        <br />
        <h4>Transfer To</h4>
        <Card5
          image={people1}
          cardTitle="Samuel Suhi"
          cardSubtitle="08990821922"
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