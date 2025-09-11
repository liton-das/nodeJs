import React, { useEffect, useState } from 'react'
import Label from '../../components/form-group/Label';
import Inp from '../../components/form-group/Inp';
import Button from '../../components/Button';
import axios from 'axios';
// 
const INITIAL_VALUE={
  email:'',
  password:''
}
const SignIn = () => {
  const [title,setTitle]=useState('')
  const [text,setText]=useState({...INITIAL_VALUE})
  useEffect(()=>{
    axios.get('http://localhost:4000/signIn')
    .then((res)=>{
      const response = res.data
      console.log(response.title);
      setTitle(response.title)
    }).catch(err=>{
      console.log(err);
      
    })
  },[])

// changeHandler function 
const changeHandler=(e)=>{
  setText((prev)=>({
    ...prev,
    [e.target.name]:e.target.value
  }))
}

// submitHandler function 
const submitHandler=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:5173/signIn',{email:text.email,password:text.password})
  .then(()=>{
    console.log('SignIn successfully');
    
  }).catch(err=>{
    console.log(err);
    
  })
}
  return (
    <div className="bg-slate-700 h-screen w-screen  py-[48px]">
      <h1 className="text-center mb-5 text-[24px] text-white">{title?title:'SignIn Form'}</h1>
      <div className="w-[600px] m-auto border border-white p-5 rounded-[5px]">
        <form onSubmit={submitHandler} className="flex flex-col ">
          <Label className={"text-white mb-2"} label={"email"} labetFor={"email"} />
          <Inp
            onChange={changeHandler}
            type={"email"}
            placeholder={"enter your valid email"}
            name={"email"}
            value={text.email}
            className={"text-white py-[8px] px-[10px] mb-4 outline-none rounded-[5px] border border-slate-200"}
            id={"email"}
          />
          <Label className={"text-white mb-2"} label={"password"} labetFor={"password"} />
          <Inp
            onChange={changeHandler}
            type={"password"}
            value={text.password}
            placeholder={"enter your current password"}
            name={"password"}
            className={"text-white py-[8px] px-[10px] outline-none rounded-[5px] border border-slate-200"}
            id={"password"}
          />
          <Button
            text={"SignIn"}
            className={
              " py-[4px] text-base px-[8px] rounded-[5px] text-[#ffffff] bg-green-600 mt-4"
            }
          />
        </form>
      </div>
    </div>
  );
}

export default SignIn
