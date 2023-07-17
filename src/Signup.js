import { useState } from "react";
import "./Signup.css"
import {useDispatch} from 'react-redux'
import { login } from "./Redux/userSlice";
import { useNavigate } from "react-router-dom";

import React from 'react'

function Signup() 
{
  const[name,setName] = useState("");
  const[mail,setMail] = useState("");
  const[password,setPassword] = useState("");
  const[cont,setCont] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChange = (e) => 
  {
      e.preventDefault()
      if(mail.length !== 0 && (/^\S+@\S+\.\S+$/).test(mail) && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password) && password.length >= 8 && name.length !==0 && cont.length>9)
      {
          navigate("/Home");
      }
      dispatch(login({user:name}));
  }
  return (
    <>
    <div className="signback"></div>
    <div className="signall">
    <h1 className='ido1'>iDoEventZ</h1>
    <img src="https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?cs=srgb&dl=pexels-salah-alawadhi-382297.jpg&fm=jpg" alt="event" className="img1"></img>
    <div className="all1">
    <h2 className='wel1'>Welcome</h2>
    <h2 className='sign1'>Sign up</h2>
    <form action="index.html" autocomplete="off" class="iform1" >
        <div class="input1">
            <label>Please enter your Name:</label>
            <input type="text"  required onChange = {e => setName(e.target.value)}/>
            <div className='error'>{name.length===0?"Please enter your valid Name":""}</div><br></br>
        </div><br></br>
        <div class="input1">
          <label>Please enter your Email-ID:</label>
              <input type="email" required onChange = {e => setMail(e.target.value)}/>
              <div className='error'> {mail.length === 0 || !((/^\S+@\S+\.\S+$/).test(mail))?"Please enter your valid Email-ID" : ""}</div><br></br>
        </div><br></br>
        <div class="input1">
          <label>Please enter your Password:</label>
              <input type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$"
                title="Password may only contain letters [ Both Uppercase and LowerCase ] , special characters and numbers" required  onChange = {e => setPassword(e.target.value)}/>
              <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password)) ?"Please enter your valid Password" : ""} </div><br></br>
        </div><br></br>
        <div class="input1">
          <label>Please enter your Contact Number:</label>
              <input type="tel" minLength="10" pattern="[0-9]{10}"  required onChange = {e => setCont(e.target.value)}/>
              <div className='error'>{cont.length<10?"Please enter your valid Contact Number":""}</div><br></br>
        </div><br></br>
        <button onClick={handleChange} class="signbutton">Sign Up</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Signup
