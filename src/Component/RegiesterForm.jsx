import React, { useState } from "react";


function RegiesterForm() {


const[Formerror,setFormError]=useState({})
const[login,setlogin]=useState({
    fullName:"",
    email:"",
    password:""
})

  function handleLogin(event){
    setlogin({...login,[event.target.name]:event.target.value})
  }
function save(event){

    event.preventDefalut()
    let errorobj=Validation(login)
    if(Object.keys(errorobj).length==0){
        alert("Form is submitted successfully")
    }

    console.log(login)
}

function  Validation(userData){
    const error={};

    if(!userData.fullName){
        error.fullName="Full Name Is Required"
    }

    setFormError(error)
    return error;
}

    return (

        <>
            <div className="container bg-info w-4 p-3">
                <form onSubmit={(e)=>save(e)}>
                    <div className="mb-3">
                        <label for="id1" className="form-label" >Name</label>
                        <input type="text" className="form-control" id="id1" name="fullName" value={login.fullName} onChange={(e)=>handleLogin(e)} />
                           <p>{Formerror.fullName}</p>
                    </div>
                    <div class="mb-3">
                        <label for="id2" className="form-label">Email</label>
                        <input type="email" className="form-control" id="id2" name="email" value={login.email} onChange={(e)=>handleLogin(e)}/>
                    </div>
                    <div class="mb-3">
                        <label for="id3" className="form-label">Mobile No</label>
                        <input type="number" className="form-control" id="id3" name="password" value={login.password} onChange={(e)=>handleLogin(e)}/>
                    </div>
                    <div class="mb-3">
                    <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                </form>
            </div>
        </>
    )
}

export default RegiesterForm