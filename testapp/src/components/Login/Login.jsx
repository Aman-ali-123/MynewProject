import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  let [loginData, setloginData] = useState("");

  let handleChange = (e) => {
    let { name, value } = e.target;
    setloginData({ ...loginData, [name]: value });
  };

  let handleClick = () => {
    console.log(loginData);
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col">
            <div class="card">
              <div class="card-header-style card-header">Login</div>
              <div class="card-body">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Confirm Your Password"
                    name="confirm password"
                    onChange={handleChange}
                  />
                </div>
                <Link to="/Signup">Don't have an account</Link>
                <div>
                  <button class="btn btn-primary" onClick={handleClick}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
