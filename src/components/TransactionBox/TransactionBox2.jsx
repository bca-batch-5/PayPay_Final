import React, { useState, useEffect } from "react";
import { NominalBox } from "../../styles/TransactionBox/StyleTransaction";
import '../../styles/TransactionBox/StyleTransaction.css'
import arrowGreen from '../../Assets/arrow-up-hijau.png'
import arrowRed from '../../Assets/arrow-up-merah.png'
const TransactionBox2 = (props) => {
    const {tipe, description, nominal} = props;
    const [arrowImg, setArrowImg]=useState();

    function setArrow(){
        if(tipe === "Debit"){
            setArrowImg(arrowRed)
        }else if(tipe === "Kredit"){
            setArrowImg(arrowGreen)
        }
    }
    
    useEffect(() => {
        setArrow()
    },[])
    

  return (
    <div className="transaction-box2">
        <div className="inside-transaction-box2">
        <img id={tipe} src={arrowImg} alt="arrow" />
      <div className="transaction-box-detail2">
        <p style={{ color:'#7A7A7A', fontSize: "18px" }}>{description}</p>
        <NominalBox color='black'>{nominal}</NominalBox>
      </div>
        </div>
    </div>
  );
};

export default TransactionBox2;
