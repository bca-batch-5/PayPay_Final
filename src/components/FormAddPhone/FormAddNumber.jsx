import React, { useState } from "react";
import "../../styles/AddPhoneNumber/CssManage.css";
import gambarTelp from "../../Assets/phone-black.png";
import gambarTelpBiru from "../../Assets/PhoneVector.png";
import { Link } from "react-router-dom";

export const FormAddNumber = () => {
  const [gambarTelpon, setGambarTelpon] = useState(gambarTelp);
  const [borderInput, setBorderInput] = useState();
  const [buttonAddPhone, setButtonAddPhone] = useState();
  const [nextLink, setNextLink] = useState("#");

  const noTelpHandler = () => {
    setGambarTelpon(gambarTelpBiru);
    setBorderInput("border-form-telp-dalam-clicked");
  };

  const noTelpOnChange = (e) =>{
    if (e.target.value != "") {
        setButtonAddPhone("border-menu-button-add-exist");
        setNextLink("/manage-phone");
      } else {
        setGambarTelpon(gambarTelp);
        setBorderInput("");
        setNextLink("#");
        setButtonAddPhone("");
      }
  }
  function pressHandler(e) {
    console.log(e.key);
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
              maxLength="11"
              name="phoneNumber"
              onKeyPress={pressHandler}
              placeholder="Enter Your Phone Number"
              id="inputNoTelp"
              onClick={noTelpHandler}
              onChange={noTelpOnChange}
            />
          </span>
        </div>
        <Link to={nextLink} className="text-link">
          <div className={`border-menu-button-add ${buttonAddPhone}`} id="buttonAddPhone">
            Add Phone Number
          </div>
        </Link>
      </form>
    </div>
  );
};
