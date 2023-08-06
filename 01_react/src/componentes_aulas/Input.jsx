import React from 'react'

const Input = ({id, label, ...props}) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props}/>
    </p>
  )
}

export default Input