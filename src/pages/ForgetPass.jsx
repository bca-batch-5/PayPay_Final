import React from 'react'
import BorderKanan from '../components/Login/BorderKanan'
import BorderKiri from '../components/Login/BorderKiri'

export const ForgetPass = () => {
  return (
    <div className="border-auth">
      <BorderKiri></BorderKiri>
      <BorderKanan
        linking=" SignUp"
        linkPage="/signup"
        page="forget-pass"
        judul="Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In a Minutes."
        subJudul="Transfering money is eassier than ever, you can access Pay Pay
        wherever you are. Desktop, laptop, mobile phone? we cover all of
        that for you!"
      ></BorderKanan>
    </div>
  )
}
