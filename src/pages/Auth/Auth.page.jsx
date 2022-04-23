import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Stack from "react-bootstrap/Stack"
import "./Auth.style.scss"
import { Button, Form } from 'react-bootstrap';
import logo from '../../assets/img/logo-en.png';
import { BsFacebook, BsLinkedin, BsGoogle } from 'react-icons/bs';
import { connect } from "react-redux"
import { signUpInitiator } from '../../redux/user/user.actions';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { createStructuredSelector } from 'reselect';
import { isLoading, selectError } from '../../redux/user/user.selector';
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";



const override = css`
  display: block;
  margin: 0 auto;
`;


const Auth = ({ signUp, error, isLoading }) => {
    const navigate = useNavigate()
    const [UserCredentials, setUserCredentials] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleSubmit = () => {
        signUp(UserCredentials, navigate)
    }
    const signInProps = [
        {
            name: "email",
            type: "email",
            placeholder: "Enter Your E-mail",
            label: "Email",
        },
        {
            name: "password",
            type: "password",
            placeholder: "Enter Your Password",
            label: "Password",
        },

    ]
    const signUpProps = [
        {
            name: "firstName",
            type: "text",
            placeholder: "Enter Your First Name",
            label: "First Name",
            classes: "col-sm-12 col-md-6 mb-3"
        },
        {
            name: "lastName",
            type: "text",
            placeholder: "Enter Your Last Name",
            label: "Last Name",
            classes: "col-sm-12 col-md-6 mb-3"

        },
        {
            name: "email",
            type: "email",
            placeholder: "Enter Your E-mail",
            label: "Email",
            classes: "col-12 mb-3"

        },
        {
            name: "password",
            type: "password",
            placeholder: "Enter Your Password",
            label: "Password",
            classes: "col-12 mb-3"

        }
        ,
        {
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Your Password",
            label: "Confirm Password",
            classes: "col-12 mb-3"

        }
    ]
    const responseFacebook = (response) => {
        const { email, name } = response
        signUp({ email, name, OAuthType: "facebook" }, navigate)

    }

   

    const [signUpState, setSignUpState] = useState(false);
    const errorContainer = useRef()
    useEffect(() => {
        if (errorContainer.current) {
            errorContainer.current.innerText = ""
        }

    }, [signUpState])

    return (

        <>
            <div className="auth container">
                <div className="row my-3 pb-4">
                    <div className="col-12 d-flex justify-content-center">
                        <Link to="/" ><img src={logo} className='img' alt="Vega" height="80px" /> </Link>
                    </div>
                </div>
                <div className="row d-flex justify-content-center" >
                    <div className="form col-xxl-6 col-lg-6 col-md-9 col-sm-12 p-5">
                        {
                            signUpState ? <div className="col-12 d-flex align-items-center mb-3">
                                <h2> Sign Up </h2>
                                <small className="ms-2"> it's free</small>
                            </div> : null
                        }
                        {
                            error && <div ref={errorContainer} className={"col-12 d-flex align-items-center mb-3  text-danger"}>
                                {error}
                            </div>
                        }
                        <Stack className="row d-flex flex-wrap flex-row">
                            {
                                signUpState ? signUpProps.map((prop, idx) => (
                                    <Form.Group key={idx} className={prop.classes} controlId="formBasicEmail">
                                        <Form.Label className="text-capitalize h5">{prop.label}</Form.Label>
                                        <Form.Control required className='rounded' name={prop.name} type={prop.type} onChange={(e) => {
                                            const { name, value } = e.target
                                            setUserCredentials({ ...UserCredentials, [name]: value, indicator: "" })
                                        }} />
                                    </Form.Group>

                                ))



                                    : signInProps.map((prop, idx) => (
                                        <Form.Group key={idx} className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-capitalize fs-5">{prop.label}</Form.Label>
                                            <Form.Control className='rounded ' name={prop.name} defaultValue={prop.value ? prop.value : ""} type={prop.type} placeholder={prop.placeholder} onChange={(e) => {
                                                const { name, value } = e.target
                                                setUserCredentials({ ...UserCredentials, [name]: value, indicator: "signin" })
                                            }} />
                                        </Form.Group>
                                    ))


                            }
                            {
                                isLoading ? (
                                    <ClipLoader color="#1f7db6" loading={isLoading} css={override} size={75} ></ClipLoader>
                                ) : (
                                    <Button onClick={handleSubmit} className="text-white fs-5 rounded mb-3">{signUpState ? `Create an account` : `Login`} </Button>
                                )
                            }
                            {!signUpState && (<p>you dont have an account ?
                                <span className="text-primary fw-bold rounded px-1 cursor-pointer" role="button"
                                    onClick={() => { setSignUpState(!signUpState) }}>Sign Up</span>
                            </p>)
                            }
                            {signUpState && (<><p>By signing up, you agree to our
                                <span className="text-primary fw-bold rounded px-1 cursor-pointer" role="button">
                                    Terms of use.
                                </span>
                            </p>
                                <div className="row mb-3">
                                    <div className="col-12 border rounded mb-1">
                                        <FacebookLogin
                                            appId="1320595598460402"
                                            fields="name,email,picture"
                                            render={renderprops => (
                                                <Button onClick={renderprops.onClick} variant="light" > <BsFacebook className="fs-2 me-4"></BsFacebook> Signup with Facebook </Button>

                                            )}
                                            callback={responseFacebook} />

                                    </div>

                                    <div className="col-12 border rounded mb-1">
                                        <GoogleLogin
                                            clientId={process.env.REACT_APP_GOOGLE_TOKEN}
                                            buttonText="Login"
                                            render={(renderprops) => (
                                                <Button onClick={renderprops.onClick} variant="light" > <BsGoogle className="fs-2 me-4"></BsGoogle> Signup with Google </Button>

                                            )}
                                            onSuccess={(res) => {
                                                const { givenName, familyName, email } = res.profileObj

                                                signUp({
                                                    firstName: givenName,
                                                    lastName: familyName,
                                                    email: email,
                                                    OAuthType: "Google"
                                                }, navigate)
                                            }}
                                            onFailure={(err) => {
                                                console.log(err)
                                            }}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </div>

                                </div>
                                <p>
                                    Already have an account ?  <span className="text-primary fw-bold rounded px-1 cursor-pointer" role="button"
                                        onClick={() => { setSignUpState(!signUpState) }}> Login </span>
                                </p></>)
                            }
                        </Stack>
                    </div>
                </div>
            </div >
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    error: selectError,
    isLoading: isLoading
})
const mapDispatchToProps = dispatch => ({
    signUp: (userData, navigate) => dispatch(signUpInitiator(userData, navigate))
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth);