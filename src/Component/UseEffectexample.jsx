import React, { useEffect, useState } from "react";

function UseEffectexample() {
    const [count, setcount] = useState(0);
    const [timer,settimer]=useState(0)
    function increment(){
        settimer(timer+1)
    }
    useEffect(() => {
        let timer = setTimeout(() => {
            setcount((count) => count +1)
        }, 1000);
        return () => clearTimeout(timer)
    }, [count]);


    useEffect(()=>{
      let code=  setTimeout(() => {

            console.log("code with harry"+timer)
        },1000);
        return ()=>clearTimeout(code)
    },[timer]);
       
    return (
        <>

            <h1>Timer  : {count}</h1>
           <p>paragraph is timer {timer}</p>
           <button type="button" className="btn btn-primary m-2" onClick={increment}>Increment</button>
        </>
    )
}
export default UseEffectexample