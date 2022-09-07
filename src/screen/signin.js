import React, { useState} from "react";
import hi from '../assert/hana.png';
import ats from '../assert/ATS.png';
import './signin.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const Navigate= useNavigate();
   const[username,setusername]=useState('');
   const[password,setpassword]=useState('');
   const[error,setError]=useState(false);
   const handleSubmit=(e)=>{
    e.preventDefault();
    if(username.length===0||password.length===0){
      setError(true);
    }else{
      Navigate("/home");
    }
   }

   
   

  return ( 
    <>
      <section>
        <div className="imgBx">
          <img className="i" src={hi} alt="login"/>
        </div>
        <form className="contentBx" onSubmit={handleSubmit}>
          <div className="AtsIcon">
           <img className='ats' src={ats} alt='ats'/>
          </div>
          <h3>Login</h3>
          <br></br>
          <div className="logform">
            <div className="inputdiv">
            <input type="text" placeholder="Username" name='username' onChange={e=>setusername(e.target.value)}/>
            <span className="icon"><PersonOutlineOutlinedIcon/></span>
            </div> 
           
             {error&& username.length<=0?<p className="user">username can't be empty!</p>:""}
             <br></br>
            <div className="inputdiv">
            <input type="password" placeholder="Password" name='password' onChange={e=>setpassword(e.target.value)}/>
            <span className="icon"><LockOutlinedIcon/></span>
            </div>
            {error&& password.length<=0?<p className="user">password can't be empty</p>:""}
           

            <h6>Recovery Password</h6>
            <br></br>
            <button className="button" >Sign In</button>
           </div>
          </form>
      </section>
    </>
  );
}
