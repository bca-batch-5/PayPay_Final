import React from "react";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import pencil from "../Assets/pencil.png";
import "../styles/Profil/CssProfil.css";
import arrow from "../Assets/arrow-left.png";
import {
  BorderDalamPilihan,
  BorderDalamProfil,
  BorderGambar,
  BorderPilihan,
} from "../styles/Profil/StyleProfil";
import { Link } from "react-router-dom";
import defaultFoto from "../Assets/defaultPhoto.jpg";
import { useState } from "react";
import { getPhoto, ProfilService } from "../services/ProfilService";
import { useEffect } from "react";
import { getUserbyEmail } from "../services/UserService";

export const Profile = () => {
  const [editClicked, setEditClicked] = useState();
  const [clicked, setClicked] = useState(false);
  const [fileValue, setFileValue] = useState();
  const [foto, setFoto] = useState("");
  const [nama, setNama] = useState();
  const [noTelp, setNoTelp] = useState("nomor Telpon belum ada");

  useEffect(() => {
    getPhotoProfil();
    getUserData();
  });

  const editHandler = () => {
    if (clicked == false) {
      setEditClicked("border-file-input-clicked");
      setClicked(true);
    } else {
      setEditClicked("");
      setClicked(false);
    }
  };

  const getUserData = async() =>{
    const response = await getUserbyEmail();
    setNama(response.data.data.nama);
    if(response.data.data.noTelp != null){
      setNoTelp(response.data.data.noTelp);
    } 
  }

  const getPhotoProfil = async () => {
    const url = await getPhoto();
    console.log("link: ", url);
    setFoto(url);
  };

  const getImageValue = (e) => {
    const [f] = e.target.files;
    setFileValue(f);
    console.log("isi inputan", f.name);
  };

  const imageInput = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", fileValue);
    const res = await ProfilService(formData);
    getPhotoProfil();
  };

  return (
    <HomeLayouts>
      <RightBox>
        <div className="border-mid">
          <BorderDalamProfil>
            <BorderGambar photo={foto ? foto : defaultFoto}></BorderGambar>
            <div className="Border-Edit-text">
              <span>
                <img src={pencil} alt="Edit" />
              </span>
              <span className="edit-text" onClick={editHandler}>
                Edit
              </span>
            </div>
            <div className={`border-file-input ${editClicked}`}>
              <form onSubmit={imageInput}>
                <input type="file" multiple={false} onChange={getImageValue} />
                <button>Submit</button>
              </form>
            </div>
            <div className="name-text">{nama}</div>
            <div className="nomor-telpon">{noTelp}</div>
          </BorderDalamProfil>
          <Link to={"/personal-information"} className="text-link">
            <BorderPilihan className="border-pilihan">
              <BorderDalamPilihan>
                <div>Personal Information</div>
                <div className="border-arrow">
                  <img src={arrow} alt="Arrow Left" />
                </div>
              </BorderDalamPilihan>
            </BorderPilihan>
          </Link>
          <BorderPilihan className="border-pilihan">
            <BorderDalamPilihan>
              <div>Change Password</div>
              <div className="border-arrow">
                <img src={arrow} alt="Arrow Left" />
              </div>
            </BorderDalamPilihan>
          </BorderPilihan>
          <BorderPilihan className="border-pilihan">
            <BorderDalamPilihan>
              <div>Change Pin</div>
              <div className="border-arrow">
                <img src={arrow} alt="Arrow Left" />
              </div>
            </BorderDalamPilihan>
          </BorderPilihan>
          <BorderPilihan className="border-pilihan">
            <BorderDalamPilihan>
              <div>Logout</div>
              <div className="border-arrow">
                <img src={arrow} alt="Arrow Left" />
              </div>
            </BorderDalamPilihan>
          </BorderPilihan>
        </div>
      </RightBox>
    </HomeLayouts>
  );
};
