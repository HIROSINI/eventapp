import { useState } from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { login } from "./Redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Login() {
  const[email,setMail] = useState("");
  const[password,setPassword] = useState("");
  const[name,setName] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleChange = async(e) => 
  {
      e.preventDefault()
      if(email.length !== 0 && (/^\S+@\S+\.\S+$/).test(email) && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password) && password.length >= 8 && name.length !==0)
      {
        try{
          const response=await axios
             .post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
               name: name,
               email: email,
               password: password,
             });
             navigate('/Home');
             let user=response.data.userResponse;
             let token =response.data.token;
             localStorage.setItem('token',token);
             localStorage.setItem('user',JSON.stringify(user))
             
           }
             catch(error) {
               console.error('Login failed:', error);
             };
           }
           dispatch(login({user:name}));
          }

  

  return (
    <>
    <div className="back"></div>
    <div className="all">
    <h1 className='ido'>iDoEventz</h1>
    <img src="https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?cs=srgb&dl=pexels-salah-alawadhi-382297.jpg&fm=jpg" alt="event" className="img"></img>
    <h2 className='wel'>Welcome Back!</h2>
    <h2 className='log'>Login</h2>
    <div className="iform">
    <form action="index.html" autocomplete="off" class="iform" action="">
    <div class="input">
            <label>Please enter your Name:</label>
            <input type="text" value={name} required onChange = {e => setName(e.target.value)}/>
            <div className='error'>{name.length===0?"Please enter your valid Name":""}</div><br></br>
        </div>
    <div class="input">
          <label>Please enter your Email-ID:</label>
              <input type="email" value={email} required onChange = {e => setMail(e.target.value)}/>
              <div className='error'> {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Please enter your valid Email-ID" : ""}</div><br></br>
        </div>
        <div class="input">
          <label>Please enter your Password:</label>
              <input type="password" value={password} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$"
                title="Password may only contain letters [ Both Uppercase and LowerCase ] , special characters and numbers" required  onChange = {e => setPassword(e.target.value)}/>
              <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password)) ?"Please enter your valid Password" : ""} </div><br></br>
            
        </div>
        <Link to="/Home"><button className="logbutton" onClick={handleChange}>Login</button></Link>
    </form>
    </div>
    <p className="p1">New Here? No Worries! Click here to Create an new Account.</p>
    <Link to="/Signup"><button className="button1">Sign up</button></Link>
    </div>
    </>
  )
}

export default Login