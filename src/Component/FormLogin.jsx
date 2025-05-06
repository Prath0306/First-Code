import React, { useState } from "react";


function FormLogin() {

    const[username,setusername]=useState("")
    const[password,setpasswrod]=useState("")


    function handleusername(event){
        setusername(event.target.value)
    }
    function handlepassword(event){
        setpasswrod(event.target.value)
    }

    return (
        <>

            <div className=" container  border w-5 p-5">

                <form>
                    <div className="mb-3">
                        <label for="id1" class="form-label">UserName</label>
                        <input type="text" class="form-control" id="id1" value={username} onChange={(e)=>handleusername(e)}/>
                    </div>
                    <p>Enter Name :{username}</p>
                    <div className="mb-3">
                        <label for="id2" class="form-label">Password</label>
                        <input type="password" className="form-control" id="id2" value={password} onChange={(e)=>handlepassword(e)}/>
                    </div>
                    <p>Enter password :{password}</p>
                    <button type="button" class="btn btn-primary">Submit</button>
                    </form>
            </div>
        </>
    )
}
export default FormLogin