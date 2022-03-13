import "../style/singin.css";
import { useState } from "react";
import LogInFetch from "../store/tasks/login";
import { Link } from "react-router-dom";

function Login() {
    const singnIN = (e) => {
        e.preventDefault();
        LogInFetch( email = { email }, password = { password })()
    }
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
        <>
         <h1>Login</h1>
            <div className="singInDiv">
                <form onSubmit={singnIN}>
                    <label>Email</label>
                    <input type="text" onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <label>Password</label>
                    <input type="password" onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                    <button type="submit">
                        <Link to="/"> Log In</Link>
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