import "../style/login.css";
import { useState } from "react";
import LogInFetch from "../store/tasks/login";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const login = (e) => {
    e.preventDefault();
  };
  const sendRequestLogin = async () => {
    await LogInFetch((email = { email }), (password = { password }));
    navigate("/");
  };
  let navigate = useNavigate();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  function checkDisbled(){
    if(email && password){
      return false
    }
    return true
  }
  return (
    <div>
      <h1>Login</h1>
      <div className="singInDiv">
        <div className="signInChild">
          <form onSubmit={login}>
            <label>Email</label>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <button
              disabled = {checkDisbled()}
              type="submit"
              onClick={() => {
                sendRequestLogin();
              }}
              
            >
              Log In
            </button>
            <button>
              <Link className="btnLink" to="/register">REGISTRATION</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
