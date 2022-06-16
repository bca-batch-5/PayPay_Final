import React, { useState, useEffect } from "react";
import { Navbox, InNavbox } from "../../styles/HomeLayouts/Navbar/StyleNavbar";
import people3 from "../../Assets/Foto3.jpg";
import "../../styles/HomeLayouts/Navbar/styleNavbar.css";
import {
  InLeftBox,
  LeftBox,
  LeftBoxTextRange,
} from "../../styles/HomeLayouts/Box/LeftBoxStyle";
import "../../styles/HomeLayouts/homeLayouts.css";
import dashboardImg from "../../Assets/grid-hitam.png";
import dashboardImgBlue from "../../Assets/grid.png";
import transferImg from "../../Assets/arrow-up-black.png";
import transferImgBlue from "../../Assets/arrow-up-biru.png";
import topupImg from "../../Assets/plus-black.png";
import topupImgBlue from "../../Assets/plus-biru.png";
import profileImg from "../../Assets/user.png";
import profileImgBlue from "../../Assets/user-biru.png";
import logoutImg from "../../Assets/log-out.png";
import { Link, useNavigate } from "react-router-dom";
import { InNotifBox, NotifBox } from "../../styles/HomeLayouts/Box/NotifStyle";
import TransactionBox2 from "../../components/TransactionBox/TransactionBox2";
import defaultPhoto from "../../Assets/defaultPhoto.jpg";
import { getPhoto } from "../../services/ProfilService";
import { getUserbyEmail } from "../../services/UserService";
import { NotifService } from "../../services/TransactionService";
import { useCallback } from "react";

const HomeLayouts = (props) => {
  const { children, halaman, nomorTelfon, photoProfile } = props;
  const [dashboard, setDashboard] = useState(dashboardImg);
  const [transfer, setTransfer] = useState(transferImg);
  const [topup, setTopup] = useState(topupImg);
  const [profile, setProfile] = useState(profileImg);
  const [logout, setLogout] = useState(logoutImg);
  const [leftTextDashboard, setLeftTextDashboard] = useState("left-text");
  const [leftTextTransfer, setLeftTextTransfer] = useState("left-text");
  const [leftTextTopup, setLeftTextTopup] = useState("left-text");
  const [leftTextProfile, setLeftTextProfile] = useState("left-text");
  const [leftTextLogout, setLeftTextLogout] = useState("left-text");
  const [display, setDisplay] = useState("none");
  const [foto, setFoto] = useState("");
  const [nama, setNama] = useState();
  const [noTelp, setNoTelp] = useState("Nomor Telpon belum ada");
  const [transaction, setTransaction]= useState([]);
  // const [tipe, setTipe] = useState("");
  // const [description,setDescription] = useState("");
  // const [nominal,setNominal] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    checkHalaman();
    getUserData();
    getPhotoProfil();
    checkingTokenAvailable();
    console.log(photoProfile);
    notification();
  }, []);

  const getPhotoProfil = async () => {
    const url = await getPhoto();
    if (url === null) {
      setFoto(defaultPhoto);
    } else {
      setFoto(url + "?" + Math.random());
    }
  };

  function notifButton() {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }
  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("photo");
  };

  const getUserData = async () => {
    const response = await getUserbyEmail();
    setNama(response.data.data.nama);
    if (response.data.data.noTelp != null) {
      setNoTelp("+62" + response.data.data.noTelp);
    }
  };

  function dashboardEnter() {
    setDashboard(dashboardImgBlue);
    setLeftTextDashboard("left-text-color");
  }
  function dashboardLeave() {
    if (halaman != "home") {
      setDashboard(dashboardImg);
      setLeftTextDashboard("left-text");
    }
  }

  function transferEnter() {
    setTransfer(transferImgBlue);
    setLeftTextTransfer("left-text-color");
  }
  function transferLeave() {
    if (halaman != "transfer") {
      setTransfer(transferImg);
      setLeftTextTransfer("left-text");
    }
  }

  function topupEnter() {
    setTopup(topupImgBlue);
    setLeftTextTopup("left-text-color");
  }
  function topupLeave() {
    setTopup(topupImg);
    setLeftTextTopup("left-text");
  }

  function profileEnter() {
    setProfile(profileImgBlue);
    setLeftTextProfile("left-text-color");
  }
  function profileLeave() {
    setProfile(profileImg);
    setLeftTextProfile("left-text");
  }

  function logoutEnter() {
    setLeftTextLogout("left-text-color");
  }
  function logoutLeave() {
    setLogout(logoutImg);
    setLeftTextLogout("left-text");
  }

  function checkHalaman() {
    if (halaman === "home") {
      setDashboard(dashboardImgBlue);
      setLeftTextDashboard("left-text-color");
    } else if (halaman === "transfer") {
      setTransfer(transferImgBlue);
      setLeftTextTransfer("left-text-color");
    } else if (halaman === "profile") {
      setProfile(profileImgBlue);
      setLeftTextProfile("left-text-color");
    }
  }
  
  const notification = useCallback( async() =>{
      const response = await NotifService();
      console.log(response);
      setTransaction(response.data.data)
  },[navigate]);

  function checkingTokenAvailable() {
    const token = localStorage.getItem("user");
    if(token == null){
      navigate("/");
    }
  }


  return (
    <div className="layouts-box" id={halaman}>
      <Navbox>
        <InNavbox>
          <Link to={"/home"} className="title">
            PayPay
          </Link>
          <div className="identity-box">
            <img
              className="image-user"
              src={photoProfile ? photoProfile : foto}
              alt="foto"
            />
            <div className="text-box">
              <p className="name">{nama}</p>
              <p className="phone-number">
                {nomorTelfon ? nomorTelfon : noTelp}
              </p>
            </div>
            <button className="bell-button" onClick={notifButton}>
              <i className="fa fa-bell"></i>
            </button>
          </div>
        </InNavbox>
      </Navbox>
      <div className="main-layouts">
        <NotifBox display={display}>
          <InNotifBox>
            <p style={{ color: "#7A7886", fontSize: "15px" }}>Last Transaction</p>
            <div style={{ marginTop: "10px"}}>
              {transaction.length > 0 ?(transaction.map((el) =>{
                return (
                  <TransactionBox2 key={el.id}
                tipe={el.transactionType}
                description={el.note}
                nominal={el.nominal}
              />
                )
              })):(
                <p>No Transaction Available</p>
              )}
            </div>
          </InNotifBox>
        </NotifBox>
        <LeftBox>
          <InLeftBox>
            <div className="left-box-text">
              <img src={dashboard} alt="dashboard" />
              <Link
                to={"/home"}
                className={leftTextDashboard}
                onMouseEnter={dashboardEnter}
                onMouseLeave={dashboardLeave}
              >
                <p>Dashboard</p>
              </Link>
            </div>
            <br />
            <br />
            <div className="left-box-text">
              <img src={transfer} alt="transfer" />
              <Link
                to={"/transfer"}
                className={leftTextTransfer}
                onMouseEnter={transferEnter}
                onMouseLeave={transferLeave}
              >
                <p>Transfer</p>
              </Link>
            </div>
            <br />
            <br />
            <div className="left-box-text">
              <img src={topup} alt="top up" />
              <Link
                to={"/topup"}
                className={leftTextTopup}
                onMouseEnter={topupEnter}
                onMouseLeave={topupLeave}
              >
                <p>Top up</p>
              </Link>
            </div>
            <br />
            <br />
            <LeftBoxTextRange>
              <div className="left-box-text">
                <img src={profile} alt="" />
                <Link
                  to={"/profil"}
                  className={leftTextProfile}
                  onMouseEnter={profileEnter}
                  onMouseLeave={profileLeave}
                >
                  <p>Profile</p>
                </Link>
              </div>
              <br />
              <div className="left-box-text">
                <img src={logout} alt="" />
                <Link
                  to={"/"}
                  className={leftTextLogout}
                  onMouseEnter={logoutEnter}
                  onMouseLeave={logoutLeave}
                  onClick={logoutHandler}
                >
                  <p>Log out</p>
                </Link>
              </div>
            </LeftBoxTextRange>
          </InLeftBox>
        </LeftBox>
        {children}
      </div>
      <footer className="footer-box">
        <div className="footer-inbox">
          <span style={{ color: "#EFEFEF" }}>
            2022 PayPay. All right reserved.
          </span>
          <div className="right-footer-text">
            <span>+62 5637 8882 9901</span>
            <span>contact@paypay.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeLayouts;
