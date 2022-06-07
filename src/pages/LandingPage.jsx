import React from "react";
import {
  LandingBox,
  Page,
  PageOneLeft,
  PageOneRight,
  PagePurple,
  PageThreeLeft,
  PageThreeRight,
  PagePurple2,
  PageWhite,
} from "../styles/LandingPage/styleLanding";
import background from "../Assets/Mask-Group.png";
import "../styles/LandingPage/landingPage.css";
import phone from "../Assets/Phone.png";
import ButtonComp from "../components/Button/ButtonComp";
import Card from "../components/Card/Card";
import cardPhone from "../Assets/PhoneVector.png";
import download from "../Assets/download.png";
import lock from "../Assets/lock.png";
import groupLogo from "../Assets/GroupLogo.jpg";
import phone2 from "../Assets/Phone2.png";
import Card2 from "../components/Card/Card2";
import Card3 from "../components/Card/Card3";
import People1 from "../Assets/Foto1.jpg";
import People2 from "../Assets/Foto2.png";
import People3 from "../Assets/Foto3.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <LandingBox>
      <Page>
        <PageOneLeft>
          <div className="inPageLeft">
            <p className="appName">PayPay</p>
            <div className="title-box">
              <h1 className="title">
                Awesome App For Saving <span className="span-time">Time.</span>
              </h1>
              <p className="subtitle">
                We bring you a mobile app for banking problems that oftenly
                wasting much of your times.
              </p>
              <div className="button-one">
                <Link to={`/signin`}>
                <ButtonComp
                  color="white"
                  backgroundColor="#6379F4"
                  width="150px"
                  bgHover="white"
                  colorHover="#6379F4"
                  borderColor="white"
                  borderColorHover="#6379F4"
                >
                  Try it Free
                </ButtonComp>
                </Link>
              </div>
            </div>
          </div>
        </PageOneLeft>
        <PageOneRight>
          <div className="login-button">
            <Link to={`/signin`}>
            <ButtonComp
              color="white"
              backgroundColor="#6379F4"
              width="110px"
              bgHover="white"
              colorHover="#6379F4"
              borderColor="white"
              borderColorHover="#6379F4"
            >
              Login
            </ButtonComp>
            </Link>
            <Link to={`/signup`}>
            <ButtonComp
              color="#6379F4"
              backgroundColor="white"
              width="110px"
              bgHover="#6379F4"
              colorHover="white"
              borderColor="#6379F4"
              borderColorHover="white"
            >
              Sign Up
            </ButtonComp>
            </Link>
          </div>
          <img src={background} alt="background-atas" />
          <img className="phone" src={phone} alt="" />
        </PageOneRight>
      </Page>
      <Page>
        <PagePurple>
          <div className="title-box-two">
            <h1 className="title-two">
              <span style={{ color: "#6379F4" }}>About</span> the Application.
            </h1>
            <p className="subtitle-two">
              We have some great features from the application and it's totally
              free to use by all users around the world.
            </p>
          </div>
          <div className="cards-box">
            <Card
              image={cardPhone}
              cardTitle="24/7 Support"
              cardSubtitle="We have 24/7 contact support so you can contact us whenever you want and we will respond it."
            />
            <Card
              image={lock}
              cardTitle="Data Privacy"
              cardSubtitle="We make sure your data is safe in our database and we will encrypt any data you submitted to us."
            />
            <Card
              image={download}
              cardTitle="Easy Download"
              cardSubtitle="PayPay is 100% totally free to use it's now available on Google Play Store and App Store."
            />
          </div>
        </PagePurple>
      </Page>
      <Page>
        <PageThreeLeft>
          <div className="inPageLeft">
            <div className="title-box">
              <h1 className="title">
                100+ <span className="span-time">Trusted</span> Partners.
              </h1>
              <p className="subtitle">
                We have reached global level and have 100+ brand partners around
                the globe.
              </p>
            </div>
          </div>
        </PageThreeLeft>
        <PageThreeRight>
          <img className="logo-group" src={groupLogo} alt="group-logo" />
        </PageThreeRight>
      </Page>
      <Page>
        <PagePurple2>
          <div className="phone2-box">
            <img className="phone2" src={phone2} alt="phone2" />
          </div>
          <div className="page-four-box">
            <h1
              className="title"
              style={{ marginTop: "150px", marginBottom: "50px", width: "55%" }}
            >
              All The <span className="span-time">Great</span> PayPay Features.
            </h1>
            <Card2
              number="1. "
              cardTitle2="Small Fee"
              cardSubtitle2="We only charge 5% of every success transaction done in PayPay app."
            />
            <Card2
              number="2. "
              cardTitle2="Data Secured"
              cardSubtitle2="All your data is secured properly in our system and it’s encrypted."
            />
            <Card2
              number="3. "
              cardTitle2="User Friendly"
              cardSubtitle2="PayPay come up with modern and sleek design and not complicated."
            />
          </div>
        </PagePurple2>
      </Page>
      <Page>
        <PageWhite>
          <div className="title-box-two">
            <h1 className="title-two">
              What Users are <span style={{ color: "#6379F4" }}>Saying.</span>
            </h1>
            <p className="subtitle-two">
              We have some great features from the application and it's totally
              free to use by all users around the world.
            </p>
          </div>
          <div className="cards-box">
            <Card3
              image={People1}
              cardTitle="Sherina Chaw"
              cardSubtitle="“I use this app since 2 years ago and this is the best app that I've ever use in my entire life”"
            />
            <Card3
              image={People2}
              cardTitle="Jessica Mera"
              cardSubtitle="“I use PayPay to manage all financial needs. It's super easy to use and it's 100% free app”"
            />
            <Card3
              image={People3}
              cardTitle="Robert Chandler"
              cardSubtitle="“Since I'm using this app, I'm not going to move to another similar app. Thank you PayPay!”"
            />
          </div>
        </PageWhite>
      </Page>
      <footer className="footer">
        <div className="footer-text-box">
          <h1 className="footer-title">PayPay</h1>
          <p className="footer-subtitle">
            Simplify financial needs and saving much time in banking needs with
            one single app.
          </p>
        </div>
        <div className="footer-bawah-box">
          <span style={{color:"#EFEFEF"}}>2022 PayPay. All right reserved.</span>
          <div className="footer-bawah-kanan" style={{color:"white"}}>
            <span>+62 5637 8882 9901</span>
            <span>contact@paypay.com</span>
          </div>
        </div>
      </footer>
    </LandingBox>
  );
};

export default LandingPage;
