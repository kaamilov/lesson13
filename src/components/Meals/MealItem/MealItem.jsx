import classes from "./MealItem.module.css";
import { useState } from "react";
import MealItemForm from "./MealItemForm";
export function MealItem({ name, description, price}) {
  const newPrice =price.toFixed(2);
  // const [count,setCount]=useState(0)
  // const [counter,setCounter]=useState(0)
  
  // function plus(){
  //   setCount(count + 1)
  //   setCounter((prev)=> +prev + price)
  // }
  // function minus(){
  //  if(count>0){
  //   setCount(count - 1)
  // setCounter((prev)=> prev -price)
  //  }
  // }
  
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{Number(newPrice).toFixed(2)}</p>
      </div>
      {/* <section>
        <div className={classes.cuont}>
          <button onClick={plus} className={classes.btn}>+</button>
          <p>{count}</p>
          <button onClick={minus} className={classes.btn}>-</button>
          <div></div>
        </div>
        <div className={classes.total}>
          <div>total</div>
          <div>{Number(counter).toFixed(2)}</div>
        </div>
      </section> */}
      <div>
        <MealItemForm/>
      </div>
    </li>
  );
}
