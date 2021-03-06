import React, { useEffect, useState } from "react";
import { NominalBox } from "../../styles/TransactionBox/StyleTransaction";
import '../../styles/TransactionBox/StyleTransaction.css'
const TransactionBox1 = (props) => {
const {imgSrc,nama,tipe,nominal} = props;

const [warna, setWarna]= useState();
const [plusmin, setPlusmin]= useState();
function tipeInput(){
    if(tipe === "Debit"){
        setWarna('red')
        setPlusmin("-")
    }else if(tipe === "Kredit"){
        setWarna('green')
        setPlusmin('+')
    }
}

useEffect(()=> {
    tipeInput();
},[])

  return (
    <div className="transaction-box">
      <div className="transaction-box-left">
        <img src={imgSrc} alt="foto-orang" style={{ width: "80px",height: "80px",borderRadius:" 20px"}} />
        <div className="transaction-box-detail">
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>{nama}</p>
          <p style={{ fontSize: "12px", color: "#7A7886" } }>{tipe}</p>
        </div>
      </div>
      <NominalBox color={warna}>{plusmin}{nominal}</NominalBox>
    </div>
  );
};

export default TransactionBox1;
