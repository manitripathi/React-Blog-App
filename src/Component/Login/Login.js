import React,{useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function Login(props) {

    const [isValid, setActive] = useState(false);
  var [emailValue, setEmail] = useState("");
  var [passValue, setPassword] = useState("");

    const LoginDetails = (e) => {
        e.preventDefault();
        if (emailValue.length >= 1 && passValue.length >= 1) {
            setActive(true);
        } else {
            alert("invalid")
        }
    }

    return (
        <>
        {isValid ? (
            <Link to="/" />
          ) : (
        <div className='Login'>
            <div className='form'>
               <div className='LoginHeading'>LOGIN</div>
                <div className='email'><input type='email' placeholder='email' className='inputField' onChange={(e) => setEmail(e.target.value)}></input></div>
                <div><input type='password' placeholder='password' className='inputField' onChange={(e) => setPassword(e.target.value)}></input></div> 
                <button onClick={LoginDetails} className='LoginButton'>login</button>
            </div>
        </div>
          )}
          </>
    );
}

export default Login;