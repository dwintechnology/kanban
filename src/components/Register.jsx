import { useState } from "react";
import RegisterFetch from "../store/tasks/register";
import "../style/register.css"
import {  useNavigate } from "react-router-dom";



function Register() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()
    const register = (e) => {
        e.preventDefault();
    }
    const register1 = () => {
        const newUserDataObject = { name, email, password, age }
        RegisterFetch(newUserDataObject);
        navigate("/login")
    }

    return (
        <>
    
            <h1>
                REGISTER
            </h1>
            <div className="formDiv">

                <form onSubmit={register}>
                    <label>Name</label>
                    <input style={{ marginTop: "10px" }} onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" />
                    <label>email</label>
                    <input style={{ marginTop: "10px" }} onChange={(e) => {
                        setEmail(e.target.value)
                    }} type="text" />
                    <label>password</label>
                    <input style={{ marginTop: "10px" }} onChange={(e) => {
                        setPassword(e.target.value)
                    }} type="password" />
                    <label>age</label>
                    <input style={{ marginTop: "10px" }} onChange={(e) => {
                        setAge(e.target.value)
                    }} type="text" />
                    <button type='submit' onClick={()=>register1()}>
                        REGISTER
                    </button>
                </form>
            </div>
        </>
    )
}
export default Register