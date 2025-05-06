import React, { useState } from "react";


function CounterUserName() {

   
  const[username,setusername]=useState("")

  function change(event){
    setusername(event.target.value)
  }

    return (

        <>
            <div className="container mb-3" >
            <label className="form-label">UserNmae:-</label>
            <input type="password"  placeholder="UserName" maxLength={3000} value={username} onChange={change} />
            </div>
            <div className="mb-3">
                <p>Coutner Login : {username.length}</p>
            </div>

         </>
            )
 }
            export default CounterUserName