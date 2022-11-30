import React from 'react';
import Header from '../navbar/Header';
import { Navigate } from "react-router-dom";
import { login } from '../backend_communication/login';

class LoginPage extends React.Component {

    #login() {
        login(document.getElementById("identification").value, document.getElementById("password").value, this.props.setToken); 

    }
    render() {
        if (this.props.token) {
            return (
                <Navigate to={"/"} />
            );
        }
        else {
            return (
                < >

                    <Header token={this.props.token} setToken={this.props.setToken} />
                    <div className='signup'>
                        <h1>Login</h1>
                        <div className='signup_form'>
                            <form onSubmit={e => e.preventDefault()}>
                                <label htmlFor="identification">User name/Email </label> <br />
                                <input type="text" id="identification" name="identification" placeholder='User name/Email..' /> <br />
                                <label htmlFor="password">Email </label> <br />
                                <input type="password" id="password" name="password" placeholder='Password...' /> <br />
                                <button id='login_form_button' onClick={() => {
                                    return this.#login();
                                }}>Submit</button>

                                <br/>
                                <a id="myLink" title="Password reset"
                                href="#" onClick="MyFunction();return false;">Reset password</a>

                                <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo" />
                            </form>

                        </div>
                    </div>
                </>

            );

        }
    }

    #buttonAction() {
        console.log("Button pressed")


    }
}

export default LoginPage;