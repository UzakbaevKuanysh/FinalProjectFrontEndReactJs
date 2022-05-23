import { useNavigate } from "react-router";
import { useState } from "react";
export default function Login({ authed,  setAuthed }) {
  const navigate = useNavigate();
  const [loginname, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  function onLogin(e){
    e.preventDefault();
    if(loginname==="Pablo" && password==="qwerty"){
    setAuthed(true);
    navigate('/Home');
    }
    else {
      setErrorMessage('Username or password is not correct');
    }

  
  
}

  return (
    <div classname="App">
      <div class="loginphoto">
      <h1 id="login">
        Login page!
      </h1>
      <form class="loginpage">
        <input class="loginbox"
          type="text"
          value={loginname}
          onChange={(e) => setName(e.target.value)}/> 
          <p class="Pablo"> The correct username is Pablo</p>
      
      <input class="passwordbox"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/> 
          <p class="qwerty"> The correct password is qwerty</p>
    </form>
    <button onClick={onLogin} class="btn-login">
        Login
      </button>
      {errorMessage &&(
      <div class="alert" role="alert">
          {errorMessage}
         </div> )}
      
      </div>
        </div>
    
  )
}