import React, { useState } from "react";

function LoginFormNew() {

  const[FormError,setFormError]=useState({});
  const[loginform,setloginform]=useState({
    username:"",
    password:""
  })

  //function handleusername(event){
   // console.log(event.target.name)
    //setloginform({...loginform,userename:event.target.value})
  //}
  //function handlepassword(event){
    //setloginform({...loginform,password:event.target.value})
    
 // }

 function handleLoginFrom(event){
    setloginform({...loginform,[event.target.name]:event.target.value})
 }
 function save(event){
    event.preventDefault()
  
    alert("Form is Submitted Successfully")
   
    console.log(loginform)
  }


    return (
        <>


            <div className=" container  border w-5 p-5">

                <form onSubmit={(e)=>save(e)}>
                    <div className="mb-3">
                        <label for="id1" class="form-label">UserName</label>
                        <input type="text" class="form-control" id="id1" name="username" value={loginform.username} onChange={(e) => handleLoginFrom(e)} />
                    </div>
                   
                    <div className="mb-3">
                        <label for="id2" class="form-label">Password</label>
                        <input type="password" className="form-control" id="id2" name="password" value={loginform.password} onChange={(e) => handleLoginFrom(e)} />
                    </div>
                  
                    <button type="button" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </>
    )
}

export default LoginFormNew