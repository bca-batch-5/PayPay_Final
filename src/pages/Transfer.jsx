import React from "react";
import Card4 from "../components/Card/Card4";
import RightBox from "../components/RightBox/RightBox";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import people1 from '../Assets/Ragil.png'
import '../styles/Transfer/styleTransfer.css'
const Transfer = () => {
  return (
    <HomeLayouts halaman="transfer">
      <RightBox>
        <h4>Search Receiver</h4>
        <div className="search-box">
          <div className="in-search-box">
            <i className="fa fa-search"></i>
            <input className="input-search" type="text" placeholder="Search receiver here" />
          </div>
        </div>
        <div className="receiver-box">
            <Card4
            image={people1} 
            cardTitle='Samuel Suhi' 
            cardSubtitle='08990821922'
            link='/transfer/input'
            />
            <Card4
            image={people1} 
            cardTitle='Samuel Suhi' 
            cardSubtitle='08990821922'
            link='#'
            />
            <Card4
            image={people1} 
            cardTitle='Samuel Suhi' 
            cardSubtitle='08990821922'
            link='#'
            />
            <Card4
            image={people1} 
            cardTitle='Samuel Suhi' 
            cardSubtitle='08990821922'
            link='#'
            />
        </div>
      </RightBox>
    </HomeLayouts>
  );
};

export default Transfer;
