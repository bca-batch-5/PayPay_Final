import React, { useEffect } from "react";
import BorderKanan from "../components/Login/BorderKanan";
import BorderKiri from "../components/Login/BorderKiri";
import { deleteToken } from "../Util/TokenSession";

const CreatePin = () => {
  return (
    <div className="border-auth">
      <BorderKiri></BorderKiri>
      <BorderKanan
        linking=" SignUp"
        linkPage="/signup"
        page="create-pin"
        judul="Secure Your Account, Your Wallet,
        and Your Data With 6 Digits PIN
        That You Created Yourself."
        subJudul="Create 6 digits pin to secure all your money and your data in PayPay app. Keep it secret and don't tell anyone about your PayPay account password and the PIN."
      ></BorderKanan>
    </div>
  );
};

export default CreatePin;
