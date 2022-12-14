import React from 'react'
import styled from './Input.module.css'
const Input = (props) => {
  return (
    <div className={styled.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
    <input {...props.input} />  
    </div>
    
  )
}

export default Input