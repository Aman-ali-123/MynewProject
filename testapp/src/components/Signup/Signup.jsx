  
 import React, { useState } from "react";
 import { Link } from "react-router-dom";
 import "./Signup.css";
import axios from "axios";
 const SignupPage = () => {
   let [signupData, setSignupData] = useState("");
 
   let handleChange = (e) => {
     let { name, value } = e.target;
     setSignupData({ ...signupData, [name]: value });
   };
 
   console.log(signupData)
   let handleSignup = () => {
   

    axios.post("http://localhost:5000/api/auth/signup",signupData).then((res)=>{
        console.log(res)

        alert(res.data.message);
    })
     console.log(signupData);
   };
 
  
 
   return (
     <div class="container text-center">
       <div class="row">
         <div class="col-md-3"></div>
         <div class="col">
           <div class="card">
             <div class="card-header-style card-header">Sign up</div>
             <div class="card-style card-body">
               <div class="card-content mb-3">
                 <label for="exampleFormControlInput2" class="form-label">
                   Name
                 </label>
                 <input
                   type="name"
                   class="form-control"
                   id="exampleFormControlInput"
                   placeholder="Enter your name"
                   name="firstName"
                   onChange={handleChange}
                 />
                 <label for="exampleFormControlInput2" class="form-label">
                  Last Name
                 </label>
                 <input
                   type="name"
                   class="form-control"
                   id="exampleFormControlInput2"
                   placeholder="Enter your name"
                   name="lastName"
                   onChange={handleChange}
                 />
                 <label for="exampleFormControlInput1" class="form-label">
                   Email address
                 </label>
                 <input
                   type="email"
                   class="form-control"
                   id="exampleFormControlInput1"
                   placeholder="name@example.com"
                   name="email"
                   onChange={handleChange}
                 />
                 <label for="inputPassword5" class="form-label">
                   Password
                 </label>
                 <input
                   type="password"
                   id="inputPassword5"
                   class="form-control"
                   aria-describedby="passwordHelpBlock"
                   name="password"
                   placeholder="password"
                   onChange={handleChange}
                 />
                 <div id="passwordHelpBlock" class="form-text"></div>
                 <label for="inputPassword5" class="form-label">
                   Confirm Password
                 </label>
                 <input
                   type="password"
                   id="inputPassword6"
                   class="form-control"
                   aria-describedby="passwordHelpBlock"
                   name="confirmPassword"
                   placeholder="Confirm Password"
                   onChange={handleChange}
                 />
                 <div id="passwordHelpBlock" class="form-text"></div>
               </div>
 
               <div className="btn-style">
                 <button class="btn btn-primary" onClick={handleSignup}>
                   Submit
                 </button>
               </div>
               <div>
                  <span> Already have an account &nbsp;</span> 
                  <Link to="/login">Log in</Link>
               </div>
               
           
             </div>
           </div>
         </div>
         <div class="col-md-3"></div>
       </div>
     </div>
   );
 };
 
 export default SignupPage;