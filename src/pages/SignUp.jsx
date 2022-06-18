import React from "react";
import BorderKanan from "../components/Login/BorderKanan";
import BorderKiri from "../components/Login/BorderKiri";

const SignUp = () => {
  return (
    <div className="border-auth">
      <BorderKiri></BorderKiri>
      <BorderKanan
        linking=" Login"
        linkPage="/signin"
        page="signup"
        judul="Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users"
        subJudul="Transfering money is eassier than ever, you can access Pay Pay
        wherever you are. Desktop, laptop, mobile phone? we cover all of
        that for you!"
      ></BorderKanan>
    </div>
  );
};

export default SignUp;
