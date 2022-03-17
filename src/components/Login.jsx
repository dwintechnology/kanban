import "../style/login.css";
import { useState } from "react";
import LogInFetch from "../store/tasks/login";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Login() {
  const login = (e) => {
    e.preventDefault();
  };
  const sendRequestLogin = async () => {
    setLoading(true)
    await LogInFetch((email = { email }), (password = { password }));
    if (localStorage.getItem('token')) {
      setLoading(false)
      navigate("/");
    } else {
      setLoading(false)
      seErr('Invalid username or password')
    }
  };
  let navigate = useNavigate();
  let [email, setEmail] = useState();
  let [loading, setLoading] = useState(false);
  let [err, seErr] = useState();

  let [password, setPassword] = useState();
  function checkDisbled() {
    if (email && password) {
      return false
    }
    return true
  }

  return (
    <div className="boss">
      {loading && <div><Loading /></div>}
      <h1 className="LoginTitle">Login</h1>
      <div className="singInDiv">
        <div className="signInChild">
          {err && <p style={{ color: "white" }}>{err}</p>}
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
            <div className="loginPageButton">
              <button
                disabled={checkDisbled()}
                type="submit"
                onClick={() => {
                  sendRequestLogin();
                }}

              >
                Log In
              </button>
            </div>
            <div className="loginPageButton">
              <button>
                <Link className="btnLink" to="/register">REGISTRATION</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
