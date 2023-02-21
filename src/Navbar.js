import { Link } from "react-router-dom";
import './App.css';
import proto from './Alldata/proto.jpeg';
// import LetMeet from "./Letmeets";
function Navbar() {
  return (
    <div className="abc">
      <div className="banner">
            <div className="logo">
               <img src={proto} alt="img" />
           </div>            
              <div className="nav">
                  
                  
                       <Link className="active" to="/">Home</Link>
                       <Link className="active" to="/aboutus">About Us</Link>
                       <Link className="active" to="/service">Services</Link>
                       <Link className="active" to="/contactus">Contact us</Link>
                       <Link className="active" to="/letmeet">
                           <button onclick="click">Let' Meet </button>
                       </Link>
                       </div>
            </div>
    </div>
  );
}

export default Navbar;

