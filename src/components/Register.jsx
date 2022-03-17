import { useState } from "react";
import RegisterFetch from "../store/tasks/register";
import "../style/register.css";
import { useNavigate } from "react-router-dom";
import images from "../img/reg.png";
import image from "../img/images.png";
import imging from "../img/Done.svg";


function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
  };
  const sendRequestRegister = async () => {
    const newUserDataObject = { name, email, password, age };
    await RegisterFetch(newUserDataObject);
    navigate("/login")
  };
  function checkDisbled() {
    if (name && email && password && age) {
      return false
    }
    return true
  }
  return (
    <>
      <div className="navDiv">
        <div>
          <div className="logoDIV">
            <img src={image} />
            <img src={imging} />
          </div>
        </div>
      </div>
      <div className="bosss">
        <h1>REGISTRATION</h1>
        <div className="bossChild">
          <div className="iconDiv">
            <div>
              <img src={images} className="regLOGO"/>
            </div>
          </div>
          <div className="formDiv">
            <div className="chidrenForm">
              <form onSubmit={register}>
                <label>Name</label>
                <input
                  style={{ marginTop: "10px" }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  required
                />
                <label>Email</label>
                <input
                  style={{ marginTop: "10px" }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  required
                />
                <label>Password</label>
                <input
                  style={{ marginTop: "10px" }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  required
                  minLength="7"
                />
                <label>Age</label>
                <input
                  style={{ marginTop: "10px" }}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  type="text"
                  required
                />
                <button
                  disabled={checkDisbled()}
                  type="submit" onClick={() => sendRequestRegister()}>
                  REGISTER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
