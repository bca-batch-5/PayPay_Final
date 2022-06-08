import React from 'react'
import RightBox from '../components/RightBox/RightBox'
import HomeLayouts from '../Layouts/HomeLayouts/HomeLayouts'
import people1 from '../Assets/Ragil.png'
import netflix from '../Assets/Netflix.png'
import '../styles/History/HistoryStyle.css'
import TransactionBox1 from '../components/TransactionBox/TransactionBox1'
const History = () => {


  return (
    <HomeLayouts leftBoxHeight='100%'>
      <RightBox>
        <p style={{fontWeight:'bold'}}>Transaction History</p>
        <div className='week-box'>
        <p style={{color:'#7A7886', fontSize:'15px'}}>This Week</p>
        <TransactionBox1
        imgSrc={people1}
        nama='Samuel Suhi'
        tipe="Kredit"
        nominal='+10.000'
        />
        <TransactionBox1
        imgSrc={netflix}
        nama='Netflix'
        tipe="Debit"
        nominal='+10.000'
        />
        </div>
        <div className='month-box'>
        <p style={{color:'#7A7886', fontSize:'15px'}}>This Month</p>
        <TransactionBox1
        imgSrc={netflix}
        nama='Netflix'
        tipe="Debit"
        nominal='+10.000'
        />
        <TransactionBox1
        imgSrc={netflix}
        nama='Netflix'
        tipe="Debit"
        nominal='+10.000'
        />
        </div>
      </RightBox>
    </HomeLayouts>
  )
}

export default History