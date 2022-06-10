import React, { useState, useEffect } from "react";
import Card5 from "../components/Card/Card5";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import people1 from "../Assets/Ragil.png";
import "../styles/Transfer/styleTransferInput.css";
import { Button } from "../styles/Button/buttonStyle";
import { Link } from "react-router-dom";
import ButtonComp from "../components/Button/ButtonComp";
const TransferInput = () => {
  const [color, setColor] = useState();
  const [textColor, setTextColor] = useState();
    
  function inputText(e){
      if (e.target.value !="") {
          setTextColor("#6379F4")
          console.log('tes');
      }else{
          setTextColor('grey')
      }
  }
    
  function inputNominal(e) {
    if (e.target.value != "") {
      setColor("#6379F4");
      e.target.value = formatRupiah(e.target.value, "Rp. ");
    }
  }

  function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka satuan ribuan
    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
  }

  return (
    <HomeLayouts halaman="transfer">
      <RightBox>
        <h4>Transfer Money</h4>
        <Card5
          image={people1}
          cardTitle="Samuel Suhi"
          cardSubtitle="08990821922"
        />
        <p style={{ color: "#7A7886", width: "45%", marginTop: "30px" }}>
          Type the amount you want to transfer and then press continue to the
          next steps.
        </p>
        <div className="transfer-input-box">
          <div className="in-transfer-input-box">
            <div className="input-nominal-box">
              <input
                style={{ color: color }}
                className="input-nominal"
                type="text"
                placeholder="0.00"
                onChange={inputNominal}
              />
              <h4 style={{ fontSize: "20px" }}>
                Rp.20.000<span> Available</span>
              </h4>
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
                <Link to={'/transfer/confirmation'}>
              <ButtonComp
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
          </div>
        </div>
      </RightBox>
    </HomeLayouts>
  );
};

export default TransferInput;
