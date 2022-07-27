import React, { FormEvent, Fragment, useRef } from "react";
import { authActions } from "../app/slices/authSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const history = useNavigate();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const dispatch = useDispatch();
  function handleSub(event: FormEvent): void {
    event.preventDefault();
    const enterEmail = emailRef.current.value;
    const enterPassword = passwordRef.current.value;

    // console.log(passwordRef);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxvka0YRuP-tBa2TCMkVdEFb0S1jd0ugQ",
      {
        method: "POST",
        body: JSON.stringify({
          email: enterEmail,
          password: enterPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        // setIsLoading(false);
        if (res.ok) {
          // ...
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch(authActions.Login({ token: data.idToken }));

        history("/success", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <Fragment>
      <form className="register" onSubmit={handleSub}>
        <div className="registeri">
          <h3>Create new account</h3>
          <br />

          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            name=""
            id=""
          />
          <input
            ref={passwordRef}
            type="text"
            placeholder="Password"
            name=""
            id=""
          />
          <br />
          <button type="submit">Register</button>
        </div>
      </form>
      <Link to="/login">
        {" "}
        <button>Already has account Login instead</button>
      </Link>
    </Fragment>
  );
};

export default LoginPage;
