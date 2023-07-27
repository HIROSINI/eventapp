import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Events from './Events';
import Attendee from './Attendee';
import Organizer from './Organizer';
import Manage from './Manage';
import Addcal from './Addcal';
import Ticket from './Ticket';
import Privacy from './Privacy';
import Terms from './Terms';
import Faq from './Faq';
import Update from './Update';
import Delete from './Delete';
import Feedback from './Feedback';
import Attendee1 from './Attendee1';
// import {Calender} from './Calendar/Calender'

function App() {
  return (
    <>
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Events" element={<Events/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="/Attendee" element={<Attendee/>}></Route>
        <Route path="/Attendee1" element={<Attendee1/>}></Route>
        <Route path="/Organizer" element={<Organizer/>}></Route>
        <Route path="/Manage" element={<Manage/>}></Route>
        {/* <Route path="/Calender" element={<Calender/>}></Route> */}
        <Route path="/Addcal" element={<Addcal/>}></Route>
        <Route path="/Ticket" element={<Ticket/>}></Route>
        <Route path="/Privacy" element={<Privacy/>}></Route>
        <Route path="/Terms" element={<Terms/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path="/Update" element={<Update/>}></Route>
        <Route path="/Delete" element={<Delete/>}></Route>
        <Route path="/Feedback" element={<Feedback/>}></Route>




    </Routes>
  </Router>
    </div>
    </>
  );
}

export default App;
