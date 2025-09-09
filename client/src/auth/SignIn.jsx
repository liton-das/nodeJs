import React from 'react'
import Button from '../components/Button'
import Label from '../components/form-group/Label'
import Inp from '../components/form-group/Inp'

const SignIn = () => {
  return (
    <div className="bg-slate-700 h-screen w-screen  py-[48px]">
      <h1 className="text-center mb-5 text-[24px] text-white">SignIn Form</h1>
      <div className="w-[600px] m-auto border border-white p-5 rounded-[5px]">
        <form className="flex flex-col ">
          <Label className={"text-white mb-2"} label={"email"} labetFor={"email"} />
          <Inp
            type={"email"}
            placeholder={"enter your valid email"}
            name={"email"}
            className={"text-white py-[8px] px-[10px] mb-4 outline-none rounded-[5px] border border-slate-200"}
            id={"email"}
          />
          <Label className={"text-white mb-2"} label={"password"} labetFor={"password"} />
          <Inp
            type={"password"}
            placeholder={"enter your current password"}
            name={"password"}
            className={"text-white py-[8px] px-[10px] outline-none rounded-[5px] border border-slate-200"}
            id={"password"}
          />
          <Button
            text={"SignIn"}
            className={
              " border border-slate-200 py-[4px] text-base px-[8px] rounded-[5px] text-gray-950 bg-green-600 mt-4"
            }
          />
        </form>
      </div>
    </div>
  );
}

export default SignIn
