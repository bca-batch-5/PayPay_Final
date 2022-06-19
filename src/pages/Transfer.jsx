import React, { useEffect, useState } from "react";
import Card4 from "../components/Card/Card4";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import people1 from "../Assets/defaultPhoto.jpg";
import "../styles/Transfer/styleTransfer.css";
import { getAllUser, getPhotoByEmail } from "../services/ProfilService";
import { getEmail } from "../API/Api";
import { getReceiverProfil } from "../services/TransactionService";
const Transfer = () => {
  const [userDetail, setUserDetail] = useState([]);
  const [imagePeople, setImagePeople] = useState();

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      getUser();
      getImageUser();
    }
    console.log(imagePeople);
  });

  // useEffect(() => {
  //   if (localStorage.getItem("user") != null) {
  //     getImageUser();
  //   }

  //   console.log(imagePeople);
  // });

  const getImageUser = async () => {
    const res = await getReceiverProfil();
    setImagePeople(res.data.data);
    
  };

  const getUser = async () => {
    const res = await getAllUser();
    console.log(res);
    setUserDetail(res.data.data);
  };

  return (
    <HomeLayouts halaman="transferSearch">
      <RightBox>
        <h4>List Receiver</h4>
        <div className="receiver-box">
          {imagePeople && imagePeople.map((e) => {
            return (
              <Card4
                image={e.image ? e.image : people1}
                cardTitle={e.nama}
                cardSubtitle={e.email}
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
