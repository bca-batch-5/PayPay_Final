import React, { useState } from "react";
import "../../styles/AddPhoneNumber/CssManage.css";
import gambarTelp from "../../Assets/phone-black.png";
import gambarTelpBiru from "../../Assets/PhoneVector.png";
import { Link, useNavigate } from "react-router-dom";
import { addPhoneNumber } from "../../services/ProfilService";

export const FormAddNumber = () => {
  const [gambarTelpon, setGambarTelpon] = useState(gambarTelp);
  const [borderInput, setBorderInput] = useState();
  const [buttonAddPhone, setButtonAddPhone] = useState();
  const [nextLink, setNextLink] = useState("#");
  const [nomorTelpon, setNomorTelpon] = useState();
  const navigate = useNavigate();

  const noTelpHandler = () => {
    setGambarTelpon(gambarTelpBiru);
    setBorderInput("border-form-telp-dalam-clicked");
  };

  const inputNoTelpon = async () => {
    const data = {
      noTelp: nomorTelpon,
    };
    const res = await addPhoneNumber(data);
    if(res.data.status === 201){
      navigate("/manage-phone");
    }
    console.log("response dari form: ", res);
  };

  const addPhoneSubmit = (e) => {
    e.preventDefault();
    inputNoTelpon();
  };

  const noTelpOnChange = (e) => {
    if (e.target.value != "") {
      setButtonAddPhone("border-menu-button-add-exist");
      setNextLink("/manage-phone");
      setNomorTelpon(e.target.value);
    } else {
      setGambarTelpon(gambarTelp);
      setBorderInput("");
      setNextLink("#");
      setButtonAddPhone("");
    }
  };
  function pressHandler(e) {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  }
  return (
    <div>
      <form>
        <div
          className={`border-form-telp-dalam ${borderInput}`}
          id="borderBawah"
        >
          <span className="space-form-telp">
            <img src={gambarTelpon} alt="" id="gambarPhone" />
          </span>
          <span className="space-form-telp text-62">+62</span>
          <span>
            <input
              className="input-telp"
              type="text"
              maxLength="12"
              name="phoneNumber"
              onKeyPress={pressHandler}
              placeholder="Enter Your Phone Number"
              id="inputNoTelp"
              onClick={noTelpHandler}
              onChange={noTelpOnChange}
            />
          </span>
        </div>
        <div
          className={`border-menu-button-add ${buttonAddPhone}`}
          id="buttonAddPhone"
          onClick={addPhoneSubmit}
        >
          Add Phone Number
        </div>
      </form>
    </div>
  );
};
