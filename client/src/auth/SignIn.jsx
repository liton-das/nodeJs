import React from 'react'
import Button from '../components/Button'
import Label from '../components/form-group/Label'
import Inp from '../components/form-group/Inp'

const SignIn = () => {
  return (
    <div className='w-full'>
        <div className=''>
        <form className='flex flex-col  '>
            <Label label={'FName'} labetFor={'fname'}/>
            <Inp type={'text'} placeholder={'enter your first-name'} name={'fname'} className={'py-[10px] px-4px'} id={'fname'}/>
            <Button text={'SignIn'} className={' border border-slate-200 py-[4px] text-base px-[8px] rounded-[5px] text-gray-950 bg-green-600 mt-2'}/>
        </form>
        </div>
    </div>
  )
}

export default SignIn
