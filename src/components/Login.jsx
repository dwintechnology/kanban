import "../style/singin.css";
import { useState } from "react";
import LogInFetch from "../store/tasks/login";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
    const login = (e) => {
        e.preventDefault();
        
    }
    const login1 = () => {
        LogInFetch( email = { email }, password = { password })()
        navigate("/")
    }
    let navigate = useNavigate()
    let [email, setEmail] = useState()
    let [password, setPassword] = useState()
    return (
        <>
         <h1>Login</h1>
            <div className="singInDiv">
                <form onSubmit={login}>
                    <label>Email</label>
                    <input type="text" onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <label>Password</label>
                    <input type="password" onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                    <button type="submit" onClick={()=>{login1()}}>
                         Log In
                    </button>
                    <button >
                        <Link to="/register">REGISTRATION</Link>
                    </button>
                </form>
            </div>
        </>
    )
}
export default Login