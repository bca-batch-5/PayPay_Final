import React, { useEffect, useState } from "react";
import ButtonComp from "../components/Button/ButtonComp";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import people1 from "../Assets/Ragil.png";
import netflix from "../Assets/Netflix.png";
import TransactionBox1 from "../components/TransactionBox/TransactionBox1";
import "../styles/Home/styleHome.css";
import { Link } from "react-router-dom";
import Chart from "../components/Chart/Chart";
import arrowGreen from "../Assets/arrow-up-hijau.png";
import arrowRed from "../Assets/arrow-up-merah.png";
import { getUserbyEmail } from "../services/UserService";
import {
  HistoryHomeService,
  transactionDebit,
  transactionKredit,
} from "../services/TransactionService";
import { getEmail } from "../API/Api";
import { getPhotoByEmail } from "../services/ProfilService";
import NumberFormat from "react-number-format";

const Home = () => {
  const [balance, setBalance] = useState();
  const [noTelp, setNoTelp] = useState("Phone Number is not exist");
  const [foto, setFoto] = useState("");
  const [history, setHistory] = useState([]);
  const [transaksiKredit, setTransaksiKredit] = useState([]);
  const [transaksiDebit, setTransaksiDebit] = useState([]);
  const [kreditTotal, setKreditTotal] = useState();
  const [debitTotal, setDebitTotal] = useState();
  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      getUserData();
      getHistory();
      getTransactionKredit();
      getTransactionDebit();
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
    kreditLoop();
    debitLoop();
    }
  });

  const getTransactionKredit = async () => {
    
      const res = await transactionKredit();
      setTransaksiKredit(res.data.data);
    
  };

  const getTransactionDebit = async () => {
   
      const res = await transactionDebit();
      setTransaksiDebit(res.data.data);
    
  };
  const mappingKredit = [
    transaksiKredit.map((el) => {
      return el.nominal;
    }),
  ];

  const mappingDebit = [
    transaksiDebit.map((el) => {
      return el.nominal;
    }),
  ];

  const historyBox = () =>{
    
  }

  function kreditLoop() {
    let total = 0;
    for (let i = 0; i < mappingKredit[0].length; i++) {
      total = total + mappingKredit[0][i];
    }
    setKreditTotal(total);
  }

  function debitLoop() {
    let total = 0;
    for (let i = 0; i < mappingDebit[0].length; i++) {
      total = total + mappingDebit[0][i];
    }
    setDebitTotal(total);
  }

  const getUserData = async () => {
    
      const response = await getUserbyEmail();

        setBalance(response.data.data.saldo);
      
      if (response.data.data.noTelp != null) {
        setNoTelp(response.data.data.noTelp);
      }
    
  };

  const getHistory = async () => {
    if (localStorage.getItem("user") != null) {
      const response = await HistoryHomeService();
      setHistory(response.data.data);
    }
  };

  return (
    <HomeLayouts halaman="home" photoProfile={foto}>
      <div className="box-kanan-all">
        <div className="box-kanan-biru">
          <div className="in-box-kanan-biru">
            <div>
              <p style={{ color: "#E0E0E0", fontSize: "25px" }}>Balance</p>
              <br />
              <p style={{ color: "White", fontSize: "40px" }}>
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
              </p>
              <br />
              <p style={{ color: "#E0E0E0", fontSize: "15px" }}>{noTelp}</p>
            </div>
            <div className="box-biru-button">
              <Link to={"/transfer"}>
              <ButtonComp
                color="white"
                backgroundColor="#FFFFFF33"
                width="150px"
                bgHover="white"
                colorHover="#6379F4"
                border="2px solid white"
                borderHover="2px solid black"
              >
                Transfer
              </ButtonComp>
              </Link>
              <br />
              <Link to={"/topup"}>
              <ButtonComp
                color="white"
                backgroundColor="#FFFFFF33"
                width="150px"
                bgHover="white"
                colorHover="#6379F4"
                border="2px solid white"
                borderHover="2px solid black"
              >
                Top Up
              </ButtonComp>
              </Link>
            </div>
          </div>
        </div>
        <div className="box-kanan-bawah-all">
          <div className="box-bawah-kiri">
            <div className="in-box-bawah-kiri">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "50px",
                }}
              >
                <div className="Kredit">
                  <img src={arrowGreen} alt="green" />
                  <br />
                  <p>Kredit</p>
                  <br />
                  <p style={{ color: "green", fontWeight: "bolder" }}>
                    <NumberFormat
                      thousandsGroupStyle="thousand"
                      value={kreditTotal}
                      prefix="Rp "
                      decimalSeparator=","
                      displayType="text"
                      type="text"
                      thousandSeparator="."
                      allowNegative={true}
                    />
                  </p>
                </div>
                <div style={{ textAlign: "right" }} className="Debit">
                  <img src={arrowRed} alt="red" />
                  <br />
                  <p>Debit</p>
                  <br />
                  <p style={{ color: "red", fontWeight: "bolder" }}>
                    <NumberFormat
                      thousandsGroupStyle="thousand"
                      value={debitTotal}
                      prefix="Rp "
                      decimalSeparator=","
                      displayType="text"
                      type="text"
                      thousandSeparator="."
                      allowNegative={true}
                    />
                  </p>
                </div>
              </div>
              <Chart />
            </div>
          </div>
          <div className="box-bawah-kanan">
            <div className="in-box-bawah-kanan">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ fontWeight: "bold" }}>Transaction History</p>
                <Link
                  to={"/home/history"}
                  style={{
                    color: "#6379F4",
                    textDecoration: "none",
                    fontSize: "12px",
                  }}
                >
                  <p>See all</p>
                </Link>
              </div>
              {history.length > 0 ? (
                history.map((el) => {
                  if (el.from == null) {
                    return (
                      <TransactionBox1
                        key={el.id}
                        imgSrc={people1}
                        nama={el.to.userName}
                        tipe={el.transactionType}
                        nominal={el.nominal}
                      />
                    );
                  } else if (el.to == null) {
                    return (
                      <TransactionBox1
                        key={el.id}
                        imgSrc={people1}
                        nama={el.from.userName}
                        tipe={el.transactionType}
                        nominal={el.nominal}
                      />
                    );
                  }
                })
              ) : (
                <p>no transaction available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </HomeLayouts>
  );
};

export default Home;
