import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../app/slices/authSlice";

const Header = () => {
  const isLogin: any = useSelector((state: any) => state.authSlice.isLoggedIn);
  // console.log(isLogin);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="main">
        <div className="ninty">
          <div className="logo">
            <h3>
              CodePyramids<span style={{ color: "purple" }}>.</span>{" "}
            </h3>
          </div>
          <div className="btn-links">
            {isLogin && (
              <Link to="/success">
                <button>Profile</button>
              </Link>
            )}
            {!isLogin && (
              <Link to="/login">
                <button>Login</button>
              </Link>
            )}

            {isLogin && (
              <button
                onClick={() => dispatch(authActions.Logout())}
                type="button"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
