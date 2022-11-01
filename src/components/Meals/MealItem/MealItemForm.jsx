import React from 'react'
import styled from './MealItemForm.module.css'
import Input from '../../UI/Input'
const MealItemForm = () => {

    const inputProps = {
        id:`Amout`,
        type:"number",
        min:"1",
        max:"5",
        step:"1",
        defaultValue:"1"
    }
  return (
    <form className={styled.form}>
    <Input label="Amout" input={inputProps}/>
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm