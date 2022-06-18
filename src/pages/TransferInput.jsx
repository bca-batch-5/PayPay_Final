import React, { useState, useEffect } from "react";
import Card5 from "../components/Card/Card5";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import people1 from "../Assets/Ragil.png";
import "../styles/Transfer/styleTransferInput.css";
import { Button } from "../styles/Button/buttonStyle";
import { Link } from "react-router-dom";
import ButtonComp from "../components/Button/ButtonComp";
import { getUserbyEmail, getUserReceiverbyEmail } from "../services/UserService";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import NumberFormat from "react-number-format";
const TransferInput = () => {
  const [color, setColor] = useState();
  const [textColor, setTextColor] = useState();
  const [nama, setNama] = useState();
  const [email, setEmail] = useState();
  const [nominal, setNominal] = useState();
  const [balance,setBalance] = useState();
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
      setNominal(e.target.value.replace(/[^0-9]+/g,""));
      console.log(nominal);
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

  function setLocal() {
    localStorage.setItem("nominalTransfer", nominal);
  }

  useEffect(() => {
    getUser();
    User();
  }, []);

  const User = async () => {
    const res = await getUserbyEmail();
    console.log("userdetail res", res);
    setBalance(res.data.data.saldo);
  }


  const getUser = async () => {
    const email = localStorage.getItem("emailReceiver");
    const res = await getUserReceiverbyEmail(email);
    console.log(res);
    setNama(res.data.data.nama);
    setEmail(res.data.data.user.email);
  };

  return (
    <HomeLayouts halaman="transfer">
      <RightBox>
        <h4>Transfer Money</h4>
        <Card5 image={people1} cardTitle={nama} cardSubtitle={email} />
        <p style={{ color: "#7A7886", width: "45%", marginTop: "30px" }}>
          Type the amount you want to transfer and then press continue to the
          next steps.
        </p>
        <div className="transfer-input-box">
          <div className="in-transfer-input-box">
            <div className="input-nominal-box">
              {/* <input
                style={{ color: color }}
                className="input-nominal"
                type="text"
                value={nominal}
                placeholder="0.00"
                onChange={inputNominal}
              /> */}
              <NumberFormat
                style={{color:color}}
                className="input-nominal"
                thousandsGroupStyle="thousand"
                value={nominal}
                prefix="Rp"
                decimalSeparator=","
                displayType="input"
                type="text"
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
                /><span> Available</span>
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
              <Link to={"/transfer/confirmation"}>
                <ButtonComp
                  color="white"
                  backgroundColor="#6379F4"
                  width="150px"
                  bgHover="white"
                  colorHover="#6379F4"
                  border="1px solid black"
                  borderHover="1px solid black"
                  onClick = {setLocal}
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
