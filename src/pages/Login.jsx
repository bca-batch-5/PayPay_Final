import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BorderKanan from "../components/Login/BorderKanan";
import BorderKiri from "../components/Login/BorderKiri";
import "../styles/Login/CssLogin.css";
import { checkingTokenAvailable } from "../Util/TokenSession";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    session();
  }, []);

  function session() {
    const linkSession = checkingTokenAvailable();
    if (linkSession != undefined) {
      navigate(linkSession);
    }
  }
  return (
    <div className="border-auth">
      <BorderKiri></BorderKiri>
      <BorderKanan
        linking=" SignUp"
        linkPage="/signup"
        page="signin"
        judul="Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users"
        subJudul="Transfering money is eassier than ever, you can access Pay Pay
        wherever you are. Desktop, laptop, mobile phone? we cover all of
        that for you!"
      ></BorderKanan>
    </div>
  );
};

export default LandingPage;
