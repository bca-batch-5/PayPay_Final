import React from 'react'
import RightBox from '../components/RightBox/RightBox'
import HomeLayouts from '../Layouts/HomeLayouts/HomeLayouts'
import people1 from '../Assets/Ragil.png'
import netflix from '../Assets/Netflix.png'
import '../styles/History/HistoryStyle.css'
import TransactionBox1 from '../components/TransactionBox/TransactionBox1'
import { useState,useEffect } from 'react'
import { HistoryService } from '../services/TransactionService'
const History = () => {

const [historyGet,setHistoryGet]= useState([]);

useEffect(() => {
  getHistory();
}, [])


  const getHistory = async () => {
    const response = await HistoryService();
    console.log(response);
    setHistoryGet(response.data.data);
  };
  return (
    <HomeLayouts halaman='home'>
      <RightBox>
        <p style={{fontWeight:'bold'}}>Transaction History</p>
        <div className='week-box'>
        <p style={{color:'#7A7886', fontSize:'15px'}}>All Transaction</p>
        {historyGet.length > 0 ? (
                historyGet.map((el) => {
                  if(el.from == null){
                    return (
                      <TransactionBox1 key={el.id}
                        imgSrc={people1}
                        nama={el.to.userName}
                        tipe={el.transactionType}
                        nominal={el.nominal}
                      />
                    );
                  }else if(el.to == null){
                    return(
                      <TransactionBox1 key={el.id}
                          imgSrc={people1}
                          nama={el.from.userName}
                          tipe={el.transactionType}
                          nominal={el.nominal}
                        />
                    )
                  }
                })
              ) : (
                <p>no transaction available</p>
              )}
        </div>
      </RightBox>
    </HomeLayouts>
  )
}

export default History