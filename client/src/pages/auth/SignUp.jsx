import React from 'react'
import Inp from '../../components/form-group/Inp'
import Button from '../../components/Button'
import Label from '../../components/form-group/Label'
import axios from 'axios';
import { useNavigate } from 'react-router'
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
    const [error,setError]=useState({})
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get('http://localhost:4000/signUp').then((item)=>{
            let myText=item.data.title
            setSignUpForm(myText)
            
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
        
      setError('')
    }
    // handleSubmit function
    const hadleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:4000/signUp',{
        firstName:text.firstName,
        lastName:text.lastName,
        email:text.email,
        password:text.password,
        confirm_password:text.confirm_password
      })
      .then((res)=>{
        const resData=res.data
        if(resData.error){

          return console.log('here error ',resData.error);
        }
        console.log('here error ',res);
        navigate('/signIn')
        
      }).catch((err)=>{
        if(err.response){
          let errors=err.response.data.error || err.response.data
          console.log('Server error:',errors );
          setError(errors)
        } else if (err.request) {
      // Request made but no response
      console.log('No response received:', err.request);
    } else {
      // Something else happened
      console.log('Error setting up request:', err.message);
    }
      })
      setText({...INITIAL_DATA})
      setError('')
    }
    return (
    <div className="bg-slate-700  py-[48px] w-screen ">
      <h1 className="w-[200px] text-center m-auto pb-2 items-center mb-5 text-[24px] border-b border-slate-400 text-[#ffffff]">{signUpForm}</h1>
      <div className="w-[500px] bg-white m-auto border border-slate-400 p-5 rounded-[5px]">
        <form onSubmit={hadleSubmit} className="flex flex-col ">
          <Label className={"text-[#333] mb-2"} label={"First-Name"} labetFor={"fname"} />
          <Inp
            onChange={handleChange}
            value={text.firstName}
            type={"text"}
            placeholder={"enter your first-name"}
            name={"firstName"}
            className={"text-[#333] py-[8px] rounded-[5px] px-[10px] outline-none border border-slate-400"}
            id={"fname"}
          />
          {
            error ? <p className=' mb-4 text-red-500'>{error.firstName}</p>:''
          }
          <Label className={"text-[#333] mb-2"} label={"Last-Name"} labetFor={"lname"} />
          <Inp
            onChange={handleChange}
            value={text.lastName}
            type={"text"}
            placeholder={"enter your last-name"}
            name={"lastName"}
            className={"text-[#333] py-[8px] rounded-[5px] px-[10px] outline-none border border-slate-400"}
            id={"lname"}
          />
          {
            error ? <p className=' mb-4 text-red-500'>{error.lastName}</p>:''
          }
          <Label className={"text-[#333] mb-2"} label={"Email"} labetFor={"email"} />
          <Inp
            onChange={handleChange}
            value={text.email}
            type={"email"}
            placeholder={"enter your valid email"}
            name={"email"}
            className={"text-[#333] py-[8px] rounded-[5px] px-[10px] outline-none border border-slate-400"}
            id={"email"}
          />
          {
            error ? <p className=' mb-4 text-red-500'>{error.email}</p>:''
          }
          <Label className={"text-[#333] mb-2"} label={"Password"} labetFor={"confirm_password"} />
          <Inp
            onChange={handleChange}
            value={text.password}
            type={"password"}
            placeholder={"enter your password"}
            name={"password"}
            className={"text-[#333] py-[8px] rounded-[5px] px-[10px] outline-none border border-slate-400"}
            id={"confirm_password"}
          />
          {
            error ? <p className=' mb-4 text-red-500'>{error.password}</p>:''
          }
          <Label className={"text-[#333] mb-2"} label={"Confirm-password"} labetFor={"confirm-password"} />
          <Inp
            onChange={handleChange}
            value={text.confirm_password}
            type={"password"}
            placeholder={"enter your confirm_password"}
            name={"confirm_password"}
            className={"text-[#333] py-[8px] rounded-[5px] px-[10px] outline-none border border-slate-400"}
            id={"confirm_password"}
          />
          {
            error ? <p className=' mb-4 text-red-500'>{error.confirm_password}</p>:''
          }
          <Button
            text={"SignUp"}
            className={
              "cursor-pointer py-[4px] text-base px-[8px] rounded-[5px] mt-3 text-[#fff] bg-green-600"
            }
          />
        </form>
      </div>
    </div>
  )
}

export default SignUp
