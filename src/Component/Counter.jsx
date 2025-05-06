import React, { useState } from "react";

function Counter() {


   // let count = 0;
   const[count,setcount]=useState(0);
    const increment = () => {
        console.log("Increment called" + count)
      setcount(count+1)

    }
    const decrement=()=>{
        console.log("decrement called" + count)
        setcount(count- 1);
    }



    return (
        <>
        <h1>Welcome</h1>
            <h2>Counter :{count}</h2>

            <button type="button" className="btn btn-primary m-2" onClick={increment}>Increment</button>
            <button type="button" className="btn btn-secondary" onClick={decrement}>Decrement</button>
        </>
    )
}
export default Counter