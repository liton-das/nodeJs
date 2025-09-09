import React from 'react'

const Label = ({label,labetFor,className}) => {
  return (
    <>
      <label htmlFor={labetFor} className={className}>{label}</label>
    </>
  )
}

export default Label
