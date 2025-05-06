import React, { useState } from "react";


function Formupdate() {

    const [username,setuserupdate]=useState("")

    function handleusername(event){
     setuserupdate(event.target.value)

    }

    return (

        <>
            <div className="mb-3">
                <label for="id1" className="form-label">UserName :</label>
                <input type="text" className="form-control" id="id1" value={username} onChange={(e)=>handleusername(e)}/ >
               
            </div>
            <div className="mb-3">
                <p>Enter a UserName :{username}</p>
                </div>
        </>
    )
}
export default Formupdate