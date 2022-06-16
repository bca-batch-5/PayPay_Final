import React, { useCallback } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import defaultFoto from "../Assets/defaultPhoto.jpg";
import { useState } from "react";
import { getPhoto, ProfilService } from "../services/ProfilService";
import { useEffect } from "react";
import { getUserbyEmail } from "../services/UserService";
import { ToastContainer, toast } from "react-toastify";

export const Profile = () => {
  const [editClicked, setEditClicked] = useState();
  const [clicked, setClicked] = useState(false);
  const [fileValue, setFileValue] = useState();
  const [foto, setFoto] = useState("");
  const [nama, setNama] = useState();
  const [noTelp, setNoTelp] = useState("nomor Telpon belum ada");
  const navigate = useNavigate();

  useEffect(() => {
    getPhotoProfil();
    getUserData();
  }, []);

  // const setFotoToLocal = () => {
  //   localStorage.setItem("photo", foto);
  // };

  const editHandler = () => {
    if (clicked == false) {
      setEditClicked("border-file-input-clicked");
      setClicked(true);
    } else {
      setEditClicked("");
      setClicked(false);
    }
  };

  const getUserData = async () => {
    const response = await getUserbyEmail();
    setNama(response.data.data.nama);
    if (response.data.data.noTelp != null) {
      setNoTelp(response.data.data.noTelp);
    }
  };

  const getPhotoProfil = useCallback(async () => {
    const url = await getPhoto();
    if (url === null) {
      setFoto(defaultFoto);
      localStorage.setItem("photo", defaultFoto);
    } else {
      setFoto(url);
    }
  }, []);

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
    setFoto(res.data.data.url + "?" + Math.random());
    localStorage.setItem("photo", res.data.data.url + "?" + Math.random());
    console.log(foto);
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("photo");
    setTimeout(() => navigate("/"), 2000);
    toast.error("Thank you! dont forget to come back", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };


  return (
    <HomeLayouts photoProfile={foto}>
      <RightBox>
        <div className="border-mid">
          <BorderDalamProfil>
            <BorderGambar photo={foto}></BorderGambar>
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
          <BorderPilihan className="border-pilihan" onClick={logoutHandler}>
            <BorderDalamPilihan>
              <div>Logout</div>
              <div className="border-arrow">
                <img src={arrow} alt="Arrow Left" />
              </div>
            </BorderDalamPilihan>
          </BorderPilihan>
        </div>
      </RightBox>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </HomeLayouts>
  );
};
