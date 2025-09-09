import React from 'react'
import Inp from '../components/form-group/Inp'
import Button from '../components/Button'
import Label from '../components/form-group/Label'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const SignUp = () => {
    const [signUpForm,setSignUpForm]=useState('')
    useEffect(()=>{
        axios.get('http://localhost:4000/signUp').then((item)=>{
            let text=item.data.title
            setSignUpForm(text)
            
            // console.log(signUpForm);
        }).catch(err=>{
            console.log('somthing went worng!',err);
        })
    },[])
    
  return (
    <div className="bg-slate-700 h-screen w-screen  py-[48px]">
      <h1 className="text-center mb-5 text-[24px] text-white">{signUpForm}</h1>
      <div className="w-[500px] m-auto border border-white p-5 rounded-[5px]">
        <form className="flex flex-col ">
          <Label className={"text-white mb-2"} label={"First-Name"} labetFor={"fname"} />
          <Inp
            type={"text"}
            placeholder={"enter your first-name"}
            name={"fname"}
            className={"text-white py-[8px] px-[10px] mb-4 outline-none border border-slate-200"}
            id={"fname"}
          />
          <Label className={"text-white mb-2"} label={"Last-Name"} labetFor={"lname"} />
          <Inp
            type={"text"}
            placeholder={"enter your last-name"}
            name={"lname"}
            className={"text-white py-[8px] px-[10px] mb-4 outline-none border border-slate-200"}
            id={"lname"}
          />
          <Label className={"text-white mb-2"} label={"Password"} labetFor={"password"} />
          <Inp
            type={"password"}
            placeholder={"enter your password"}
            name={"password"}
            className={"text-white py-[8px] px-[10px] mb-4 outline-none border border-slate-200"}
            id={"password"}
          />
          <Label className={"text-white mb-2"} label={"Confirm-password"} labetFor={"confirm-password"} />
          <Inp
            type={"password"}
            placeholder={"enter your last-name"}
            name={"confirm-password"}
            className={"text-white py-[8px] px-[10px] mb-4 outline-none border border-slate-200"}
            id={"confirm-password"}
          />
          <Button
            text={"SignUp"}
            className={
              " border border-slate-200 py-[4px] text-base px-[8px] rounded-[5px] text-gray-950 bg-green-600"
            }
          />
        </form>
      </div>
    </div>
  )
}

export default SignUp
