import React,{useState, usestate}  from "react";


function Simple(){
 const[count,setcount]=useState(0)
  function increment(){
    setcount(count +1)
  }

  function decrement(){
    setcount(count-1)
  }
    return (
  <>

     <p>Counter Added :{count}</p>
     <button type="button" className="btn btn-primary m-5" onClick={increment}>Increment</button>
     <button type="button" className="btn btn-primary" onClick={decrement}>Decrement</button>
     
  
  </>
    )
}

export default Simple