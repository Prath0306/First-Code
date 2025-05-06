import React, { useState } from "react";


function Loginpage() {

    const [isLoggedIn, setIsLoggedIn] =useState(false);

    // function login() {
    //     setIsLoggedIn(true);
    // }

    // function logout() {
    //     setIsLoggedIn(false);
    // }


    return (
        <>
            <h3>Login Page</h3>
            {isLoggedIn ? <p> Welcome Sam </p> : <p> Please Login </p>}



            {/* <button type="button" class="btn btn-primary" onClick={login}>Login</button>
           <button type="button" class="btn btn-secondary ms-2" onClick={logout}>Logout</button> */}

{ isLoggedIn ? <button type="button" class="btn btn-secondary ms-2" onClick={()=> setIsLoggedIn(false)}>Logout</button>
  : <button type="button" class="btn btn-primary" onClick={()=> setIsLoggedIn(true)}>Login</button>
} 
            
            {/* <button type="button" class="btn btn-primary" onClick={()=> setIsLoggedIn(true)}>Login</button>
            <button type="button" class="btn btn-secondary ms-2" onClick={()=> setIsLoggedIn(false)}>Logout</button> */}
        
        
        </>
    )
}
export default Loginpage
