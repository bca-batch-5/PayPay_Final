import React, { useEffect, useState } from "react";
import Card4 from "../components/Card/Card4";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import people1 from "../Assets/Ragil.png";
import "../styles/Transfer/styleTransfer.css";
import { getAllUser } from "../services/ProfilService";
const Transfer = () => {
  const [userDetail, setUserDetail] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      getUser();
    }
  }, []);

  const getUser = async () => {
    const res = await getAllUser();
    console.log(res);
    setUserDetail(res.data.data);
  };

  return (
    <HomeLayouts halaman="transferSearch">
      <RightBox>
        <h4>Search Receiver</h4>
        <div className="search-box">
          <div className="in-search-box">
            <i className="fa fa-search"></i>
            <input
              className="input-search"
              type="text"
              placeholder="Search receiver here"
            />
          </div>
        </div>
        <div className="receiver-box">
          {userDetail.map((el) => {
            return (
              <Card4
                image={people1}
                cardTitle={el.nama}
                cardSubtitle={el.user.email}
                link="/transfer/input"
              />
            );
          })}
        </div>
      </RightBox>
    </HomeLayouts>
  );
};

export default Transfer;
