import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/home");
  }
  let errorElem;
  if (error) {
    errorElem = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
        <p className="mt-2 px-2 fw-bold">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
      </div>
      {
          errorElem
      }
      <div className="mb-4 text-center">
        <button
          onClick={() => signInWithGoogle()}
          className="w-50 btn btn-primary my-2 "
        >
          Google Sign In
        </button>{" "}
        <br />
        <button className="w-50 btn btn-primary my-2 ">
          Facebook Sign In
        </button>{" "}
        <br />
        <button className="w-50 btn btn-primary my-2 ">Github Sign In</button>
      </div>
    </>
  );
};

export default SocialLogin;
