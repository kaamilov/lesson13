
import React from 'react'
import CardIcon from '../icons/CardIcon'
import classes from "./HeaderButton.module.css"
export const HeaderButton = () => {
  return (
    <button className={classes.button}>
       <span className={classes.icon}>
        <CardIcon/>
        </span>
        <span>Your Card</span>
        <span>3</span> 
    </button>
  )
}
