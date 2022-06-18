import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { topUp } from "../../services/TopUpService";
import { BorderLuarFormTopup } from "../../styles/TopUp/StyleTopUpPayment";
import NumberFormat from 'react-number-format';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormPayTopUp = (props) => {
  let {nominalPilihan} = props;
  const [submitTopUp, setSubmitTopUp] = useState();
  const [color, setColor] = useState();
  const [nominal, setNominal] = useState();
  const [textFailed, setTextFailed] = useState("text-failed-hidden");

    
//   useEffect(() => {

//   },[nominalPilihan]);

  useEffect(() => {
    if (nominalPilihan != null) {
      setNominal(nominalPilihan.replace(/\?(.*)/, ""));
      console.log(nominal);
      setSubmitTopUp("border-menu-button-topup-exist");
    }
  },[nominalPilihan]);

  const fetchTopUp = async () => {
    const data = {
      nominal: nominal,
    };
    const res = await topUp(data);
    if (res.data.message === "TopUp harus di atas Rp.10.000") {
      setTextFailed("text-failed-show");

      console.log(res.data.message);
    }
    if(res.data.status === 200){
        toast.success("TopUp Success", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
    }
  };

  const submitForm = (e) => {
    fetchTopUp();
  };
  function inputNominal(e) {
    if (e.target.value != toBeEmpty) {
      setColor("#6379F4");
      setTextFailed("text-failed-hidden");
      e.target.value = formatRupiah(e.target.value, "Rp. ");
      setNominal(e.target.value.replace(/[^0-9]+/g, ""));
      setSubmitTopUp("border-menu-button-topup-exist");
      console.log(nominal);
    }
    if (e.target.value == "") {
      setSubmitTopUp("border-menu-button-topup");
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

  function pressHandler(e) {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  }

  return (
    <BorderLuarFormTopup>
      <p>Put your nominal you want to top up</p>
      <form className="form-nominal-topup">
        <NumberFormat
        className="input-nominal-topup"
        thousandsGroupStyle="thousand"
        value={nominal}
        prefix="Rp "
        decimalSeparator=","
        displayType="input"
        type="text"
        thousandSeparator='.'
        maxLength="13"
        placeholder="0.00"
        onChange={inputNominal}
        allowNegative={true} />

        <div className={`${textFailed}`}>
          <h4>Minimal Top Up Rp.10000</h4>
        </div>
        <div
          className={`border-menu-button-topup ${submitTopUp}`}
          id="buttonTopup"
          onClick={submitForm}
        >
          Submit
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </BorderLuarFormTopup>
  );
};

export default FormPayTopUp;
