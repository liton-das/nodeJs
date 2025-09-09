import React from 'react'

const Inp = ({type,name,id,placeholder,value,className,onChange}) => {
  return (
    <>
      <input onChange={onChange} className={className} type={type} name={name} id={id} placeholder={placeholder} value={value} />
    </>
  )
}

export default Inp
