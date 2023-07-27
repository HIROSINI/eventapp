import { useState } from "react";
import "./Signup.css"
import {useDispatch} from 'react-redux'
import { login } from "./Redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Profile from "./Profile";



import React from 'react'

function Signup() 
{
  const[id,setId]=useState("");
  const[name,setName] = useState("");
  const[email,setMail] = useState("");
  const[password,setPassword] = useState("");
  const[contact,setCont] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChange = async(e) => 
  {
      e.preventDefault()
      if(email.length !== 0 && (/^\S+@\S+\.\S+$/).test(email) && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password) && password.length >= 8 && name.length !==0 && contact.length>9)
      {
        try{
          const response= await axios
           .post('http://127.0.0.1:8181/api/v1/auth/register', {
               name: name,
               email: email,
               password: password,
               contact: contact,
             });
               // Assuming your server responds with user data upon successful login
               if(response.status ===200){
                 const user=response.data;
                 dispatch(login({ user: user.name }));
                //  dispatch(mailin({ mail: user.mail }));
              
               navigate('/');
               setName('');
               setMail('');
               setPassword('');
               setCont('');
               setId('');
               let ucontact=contact;
              localStorage.setItem('ucontact',ucontact);
              let urole=response.data.role;
              localStorage.setItem('urole',urole);
              
              <Profile user={user} />
              console.log(urole)
            }
          }
          catch(error) {
            console.error('Login failed:', error);
          };
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
    <form action="index.html" autocomplete="off" class="iform1">

    {/* <div class="input1">
            <label>Please enter your ID:</label>
            <input type="number" value={id} min={1} required onChange = {e => setId(e.target.value)}/>
            <div className='error'>{id.length===0?"Please enter your Id":""}
            </div><br></br>
          
        </div><br></br> */}

        <div class="input1">
            <label>Please enter your Name:</label>
            <input type="text" value={name} required onChange = {e => setName(e.target.value)}/>
            <div className='error'>{name.length===0?"Please enter your valid Name":""}
            </div><br></br>
          
        </div><br></br>
        <div class="input1">
          <label>Please enter your Email-ID:</label>
              <input type="email" value={email} required onChange = {e => setMail(e.target.value)}/>
              <div className='error'> {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Please enter your valid Email-ID" : ""}</div><br></br>
            
        </div><br></br>
        <div class="input1">
          <label>Please enter your Password:</label>
              <input type="password"  value={password} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$"
                title="Password may only contain letters [ Both Uppercase and LowerCase ] , special characters and numbers" required  onChange = {e => setPassword(e.target.value)}/>
              <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password)) ?"Please enter your valid Password" : ""} </div><br></br>
            
        </div><br></br>
        <div class="input1">
          <label>Please enter your Contact Number:</label>
              <input type="tel" minLength="10" pattern="[0-9]{10}" value={contact}  required onChange = {e => setCont(e.target.value)}/>
              <div className='error'>{contact.length<10?"Please enter your valid Contact Number":""}</div><br></br>
            
        </div><br></br>
        <button onClick={handleChange} class="signbutton">Sign Up</button>
    </form>

    </div>
    <p className="p2">Already have an Account? Click here to login.</p>
    <Link to="/"><button className="button2">Login</button></Link>
    </div>
    {name && <Profile user={{ id, name, email, contact }} />}
    </>
  )
}

export default Signup
