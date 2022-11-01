import React, { useState } from "react";

import base_url from "../api/bootapi";
import axios from "axios";
import Form from "../utilities/Forms";
import { Link } from "react-router-dom";
import Header from "../APP_Component/Header";
import UserSidebar from "./views/UserSidebar";

const IssueRaise = () => {

    let userID = localStorage.getItem("userID");
    console.log("UserID : "+userID);

    const [description, setDicr] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("");
    const [validate, setValidate] = useState({});

    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
            description: {
                value: description,
                isRequired: true,
                isRequiredIp: new RegExp(/^[a-zA-Z_@#. \b]+$/),
            },
            category: {
                value: category,
                isRequired: true,
            },
            priority: {
                value: priority,
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

    const raise_issue = (e) => {
        e.preventDefault();

        const validate = validateRegister();
        if (validate) {

            const d1 = description;
            const d2 = category;
            const d3 = priority;

            console.log("Discr : " + d1 + " category : " + d2 + " Priority : " + d3);
            postDataToServer(userID, d1, d2, d3);
            alert("Issue Raised Successfully!");
            window.location.reload();
        }
    };

    const postDataToServer = (userID, d1, d2, d3) => {
        //
        axios.post(`${base_url}/saveissue/?userid=${userID}&idesc=${d1}&ddl_category=${d2}&ddl_priority=${d3}`).then(
          (response) => {

            // saveissue?userid=5&idesc=Server Issue&ddl_category=Networking&ddl_priority=Midium    
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
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 h-100 master_backgroung_heder">
                    <Header />
                </div>
                <div className="col-2 master_backgroung_side">
                    <UserSidebar />
                </div>

                <div className="col-10 master_backgroung_work">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-6">
                            <br/>
                            {/* <Form></Form> */}
                            <form onSubmit={raise_issue}>
                                <div className="name mb-3">
                                    <input name="description" type="text"
                                        minLength={4}
                                        maxLength={30}
                                        onChange={(e) => setDicr(e.target.value)}
                                        placeholder="Enter Issue Discription"
                                    />
                                </div>

                                <div
                                    className={`invalid-feedback text-start ${validate.validate && validate.validate.description
                                        ? "d-block"
                                        : "d-none"
                                        }`}
                                >
                                    {validate.validate && validate.validate.description
                                        ? validate.validate.description[0]
                                        : ""}
                                </div>

                                <div className="name mb-3">
                                    <select name="category" onChange={(e) => setCategory(e.target.value)} class="btn btn-success btn-sm dropdown-toggle" style={{width:'203px'}}>
                                        <option selected disabled hidden>------Select Category------</option>,
                                        <option value={'Hardware'}>Hardware</option>
                                        <option value={'Software'}>Software</option>
                                        <option value={'Networking'}>Networking</option>
                                    </select>
                                </div>
                                <div
                                    className={`invalid-feedback text-start ${validate.validate && validate.validate.category
                                        ? "d-block"
                                        : "d-none"
                                        }`}
                                >
                                    {validate.validate && validate.validate.category
                                        ? validate.validate.category[0]
                                        : ""}
                                </div>

                                <div className="name mb-3">
                                    <select name="priority" onChange={(e) => setPriority(e.target.value)} class="btn btn-success btn-sm dropdown-toggle" style={{width:'203px'}}>
                                        <option selected disabled hidden>-------Select Priority-------</option>,
                                        <option value={'High'}>High</option>
                                        <option value={'Midium'}>Midium</option>
                                        <option value={'Low'}>Low</option>
                                    </select>
                                </div>
                                <div
                                    className={`invalid-feedback text-start ${validate.validate && validate.validate.priority
                                        ? "d-block"
                                        : "d-none"
                                        }`}
                                >
                                    {validate.validate && validate.validate.priority
                                        ? validate.validate.priority[0]
                                        : ""}
                                </div>

                                <div className="name mb-3">
                                    <button  type="submit" className="btn btn-primary theme-btn mx-auto" style={{width:'203px'}} >
                                        Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default IssueRaise;

