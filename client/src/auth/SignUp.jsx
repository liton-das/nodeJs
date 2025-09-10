import React from 'react'
import Inp from '../components/form-group/Inp'
import Button from '../components/Button'
import Label from '../components/form-group/Label'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
let INITIAL_DATA={
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  confirm_password:''
}
const SignUp = () => {
    const [signUpForm,setSignUpForm]=useState('SignUp Form')
    const [text,setText]=useState({...INITIAL_DATA})
    useEffect(()=>{
        axios.get('http://localhost:4000/signUp').then((item)=>{
            let text=item.data.title
            setSignUpForm(text)
            
            // console.log(signUpForm);
        }).catch(err=>{
            console.log('somthing went worng!',err);
        })
    },[])

    // handleChange function 
    const handleChange=(e)=>{
        setText((prev)=>({
          ...prev,
          [e.target.name]:e.target.value
        }))
    }
    // handleSubmit function
    const hadleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:4000/signUp',{
        fname:text.firstName,
        lname:text.lastName,
        email:text.email,
        password:text.password,
        confirm_password:text.confirm_password
      })
      .then((data)=>{
        console.log(data);
        
      }).catch(err=>{
        console.log(`somthing went worng in post-signUp=>${err}`);
        
      })
    }
    return (
    <div className="bg-slate-700 h-screen w-screen  py-[48px]">
      <h1 className="w-[200px] text-center m-auto pb-2 items-center mb-5 text-[24px] border-b border-slate-200 text-white">{signUpForm}</h1>
      <div className="w-[500px] m-auto border border-white p-5 rounded-[5px]">
        <form onSubmit={hadleSubmit} className="flex flex-col ">
          <Label className={"text-white mb-2"} label={"First-Name"} labetFor={"fname"} />
          <Inp
            onChange={handleChange}
            type={"text"}
            placeholder={"enter your first-name"}
            name={"fname"}
            className={"text-white py-[8px] rounded-[5px] px-[10px] mb-4 outline-none border border-slate-200"}
            id={"fname"}
          />
          <Label className={"text-white mb-2"} label={"Last-Name"} labetFor={"lname"} />
          <Inp
            onChange={handleChange}
            type={"text"}
            placeholder={"enter your last-name"}
            name={"lname"}
            className={"text-white py-[8px] rounded-[5px] px-[10px] mb-4 outline-none border border-slate-200"}
            id={"lname"}
          />
          <Label className={"text-white mb-2"} label={"Email"} labetFor={"email"} />
          <Inp
            onChange={handleChange}
            type={"email"}
            placeholder={"enter your valid email"}
            name={"email"}
            className={"text-white py-[8px] rounded-[5px] px-[10px] mb-4 outline-none border border-slate-200"}
            id={"email"}
          />
          <Label className={"text-white mb-2"} label={"Password"} labetFor={"confirm_password"} />
          <Inp
            onChange={handleChange}
            type={"password"}
            placeholder={"enter your password"}
            name={"confirm_password"}
            className={"text-white py-[8px] rounded-[5px] px-[10px] mb-4 outline-none border border-slate-200"}
            id={"confirm_password"}
          />
          <Label className={"text-white mb-2"} label={"Confirm-password"} labetFor={"confirm-password"} />
          <Inp
            onChange={handleChange}
            type={"password"}
            placeholder={"enter your last-name"}
            name={"confirm-password"}
            className={"text-white py-[8px] rounded-[5px] px-[10px] mb-4 outline-none border border-slate-200"}
            id={"confirm-password"}
          />
          <Button
            text={"SignUp"}
            className={
              "cursor-pointer py-[4px] text-base px-[8px] rounded-[5px] text-white bg-green-600"
            }
          />
        </form>
      </div>
    </div>
  )
}

export default SignUp
