
/*
 Copyright (c) 2021 Christer Johansson of Sweden Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../utilities/Forms";
import axios from "axios";
import base_url from "../../api/bootapi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [checkbox, setCheckbox] = useState(false);

  const validateRegister = () => {
    let isValid = true;

    let validator = Form.validator({
      name: {
        value: name,
        isRequired: true,
        //isRequiredIp: new RegExp(/^[a-zA-Z_@#. \b]+$/),
      },
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
        maxLength: 10,
      },
      checkbox: {
        value: checkbox,
        isRequired: true,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();

    const validate = validateRegister();

    if (validate) {
      setValidate({}); console.log(setValidate);

      const d1 = name;
      const d2 = email;
      const d3 = password;
      const ch_box = remember;

      setName(""); console.log("User Name : " + d1);
      setEmail(""); console.log("Email : " + d2);
      setPassword(""); console.log("Password : " + d3);
      setRemember(""); console.log("Checked val is: "+ch_box)

      postDataToServer(d1, d2, d3, ch_box);
      alert("Successfully Register User");
    }
  };

  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const postDataToServer = (d1, d2, d3, ch_box) => {
    //
    axios.post(`${base_url}/regprocess/?uname=${d2}&username=${d1}&password=${d3}&ch1=${ch_box}`).then(
      (response) => {

        console.log(response);
        

        console.log("Success");
      },
      (error) => {
        console.log(error);
        console.log("Error");
      }
    )
  }

  return (
    <div className="row g-0 auth-wrapper">
      <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
        <div className="auth-background-holder"></div>
        <div className="auth-background-mask"></div>
      </div>

      <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
        <div className="d-flex flex-column align-content-end">
          <div className="auth-body mx-auto">
            <p>Create your Account</p>
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                onSubmit={register}
                autoComplete={"off"}
              >
                <div className="name mb-3">
                  <input
                    type="text"
                    minLength={4}
                    maxLength={20}
                    className={`form-control ${validate.validate && validate.validate.name
                      ? "is-invalid "
                      : ""
                      }`}
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${validate.validate && validate.validate.name
                      ? "d-block"
                      : "d-none"
                      }`}
                  >
                    {validate.validate && validate.validate.name
                      ? validate.validate.name[0]
                      : ""}
                  </div>
                </div>

                <div className="email mb-3">
                  <input
                    type="email"
                    className={`form-control ${validate.validate && validate.validate.email
                      ? "is-invalid "
                      : ""
                      }`}
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${validate.validate && validate.validate.email
                      ? "d-block"
                      : "d-none"
                      }`}
                  >
                    {validate.validate && validate.validate.email
                      ? validate.validate.email[0]
                      : ""}
                  </div>
                </div>

                <div className="password mb-3">
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${validate.validate && validate.validate.password
                        ? "is-invalid "
                        : ""
                        }`}
                      name="password"
                      id="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      onClick={(e) => togglePassword(e)}
                    >
                      <i
                        className={
                          showPassword ? "far fa-eye" : "far fa-eye-slash"
                        }
                      ></i>{" "}
                    </button>

                    <div
                      className={`invalid-feedback text-start ${validate.validate && validate.validate.password
                        ? "d-block"
                        : "d-none"
                        }`}
                    >
                      {validate.validate && validate.validate.password
                        ? validate.validate.password[0]
                        : ""}
                    </div>
                  </div>
                </div>

                {/* Checkbox field code */}
                <div className="checkbox-wrapper mb-3">

                  {/* <div className="row">
                    <div className="col-2">
                      <input
                        type="checkbox"
                        className={`form-control ${validate.validate && validate.validate.checkbox
                          ? "is-invalid "
                          : ""
                          }`}
                        id="checkbox"
                        name="checkbox"
                        value={checkbox}
                        // placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-10">Click here to Register as Employee.</div>
                  </div>
                  <div
                    className={`invalid-feedback text-start ${validate.validate && validate.validate.email
                      ? "d-block"
                      : "d-none"
                      }`}
                  >
                    {validate.validate && validate.validate.email
                      ? validate.validate.email[0]
                      : ""}
                  </div> 
                  */}

                  {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> I have a bike</label><br></br> */}

                  <div className="extra mt-3 row justify-content-between">
                    <div className="col-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember"
                          checked={remember}
                          onChange={(e) => setRemember(e.currentTarget.checked)}
                        />
                        <label className="form-check-label" htmlFor="remember">
                          Click here to Register as Employee!!
                        </label>
                      </div>
                    </div>
                    <div className="col-2">
                     
                    </div>
                  </div>


                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <hr />
              <div className="auth-option text-center pt-2">
                Have an account?{" "}
                <Link className="text-link" to="/login">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
