import React from "react";
import ButtonComp from "../components/Button/ButtonComp";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import people1 from '../Assets/Ragil.png'
import netflix from '../Assets/Netflix.png'
import TransactionBox1 from '../components/TransactionBox/TransactionBox1'
import "../styles/Home/styleHome.css";
import { Link } from "react-router-dom";
import Chart from "../components/Chart/Chart";
import arrowGreen from '../Assets/arrow-up-hijau.png'
import arrowRed from '../Assets/arrow-up-merah.png'
const Home = () => {
  return (
    <HomeLayouts halaman='home'>
      <div className="box-kanan-all">
        <div className="box-kanan-biru">
          <div className="in-box-kanan-biru">
            <div>
              <p style={{ color: "#E0E0E0", fontSize: "25px" }}>Balance</p>
              <br />
              <p style={{ color: "White", fontSize: "40px" }}>
                <span>Rp.</span>10.000
              </p>
              <br />
              <p style={{ color: "#E0E0E0", fontSize: "15px" }}>087 655 78</p>
            </div>
            <div className="box-biru-button">
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
              <br />
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
            </div>
          </div>
        </div>
        <div className="box-kanan-bawah-all">
          <div className="box-bawah-kiri">
            <div className="in-box-bawah-kiri">
                <div style={{display:'flex', justifyContent:'space-between',marginBottom:'50px'}}>
                    <div className="Kredit">
                        <img src={arrowGreen} alt="green" />
                        <br />
                        <p>Kredit</p>
                        <br />
                        <p style={{color:'green',fontWeight:'bolder'}}><span>Rp.</span>20.000.000.000</p>
                    </div>
                    <div style={{textAlign:'right'}} className="Debit">
                        <img  src={arrowRed} alt="red" />
                        <br />
                        <p>Debit</p>
                        <br />
                        <p style={{color:'red',fontWeight:'bolder'}}><span>Rp.</span>20.000.000.000</p>
                    </div>  
                </div>
                <Chart/>
            </div>
          </div>
          <div className="box-bawah-kanan">
            <div className="in-box-bawah-kanan">
                <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                    <p style={{ fontWeight: "bold" }}>Transaction History</p>
                    <Link to={'/home/history'} style={{color:'#6379F4',textDecoration:'none',fontSize:'12px'}}>
                        <p >See all</p>
                    </Link>
                </div>
              <TransactionBox1
                imgSrc={people1}
                nama="Samuel Suhi"
                tipe="Kredit"
                nominal="+10.000"
              />
              <TransactionBox1
                imgSrc={netflix}
                nama="Netflix"
                tipe="Debit"
                nominal="+10.000"
              />
              <TransactionBox1
                imgSrc={netflix}
                nama="Netflix"
                tipe="Debit"
                nominal="+10.000"
              />
              <TransactionBox1
                imgSrc={netflix}
                nama="Netflix"
                tipe="Debit"
                nominal="+10.000"
              />
              <TransactionBox1
                imgSrc={netflix}
                nama="Netflix"
                tipe="Debit"
                nominal="+10.000"
              />
            </div>
          </div>
        </div>
      </div>
    </HomeLayouts>
  );
};

export default Home;
