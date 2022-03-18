import { useState } from "react";
import RegisterFetch from "../store/tasks/register";
import "../style/register.css";
import { useNavigate } from "react-router-dom";
import images from "../img/reg.png";
import image from "../img/images.png";
import imging from "../img/Done.svg";
import Loading from "./Loading";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState();
  const [loading, setLoading] = useState();
  const [err, setErr] = useState();
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
  };
  const sendRequestRegister = async () => {
    setLoading(true);
    const newUserDataObject = { name, email, password, age };
    await RegisterFetch(newUserDataObject);
    if (password.length > 7 && email.slice(email.length - 10) === "@gmail.com" ) {
      setLoading(false);
      navigate("/login");
    } else {
      setLoading(false);
      setErr("Wrong email adress or password length");
    }
  };
  function checkDisbled() {
    if (name && email && password && age) {
      return false;
    }
    return true;
  }
  return (
    <>
      {loading && (
        <div>
          <Loading />
        </div>
      )}
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
              <img src={images} className="regLOGO" />
            </div>
          </div>
          <div className="formDiv">
            <div className="chidrenForm">
            {err && <p style={{ color: "white" }}>{err}</p>}
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
                  type="submit"
                  onClick={() => sendRequestRegister()}
                >
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
