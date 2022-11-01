import React from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";
const MilItemForm = (props) => {
    const inputProps ={
        id: `amout_id -${props.id}`,
        type:"number",
        min:"1",
        max:"5",
        step:"1",
      defaultValue:"1"

    }
  return (
    <form className={styles.form}>
       <Input inputProps={inputProps}/>
      <button>Add</button>
    </form>
  );
};
export default MilItemForm
