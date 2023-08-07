import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form>
      <Input id="email" label="Email" required/>
      <Input id="password" label="Password" type="password"/>
      <Button/>
    </form>
  )
}

export default Form