import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import Progress from "../Header/Progress";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
const Requerdauth = ({ children }) => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  let location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Progress />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user?.emailVerified) {
    return (
      <div>
        <div className="text-6xl  text-gray-600 text-center py-3">
          Your'e Almost There
        </div>
        <p className="text-center text-orange-400 uppercase text-lg">
          verify your email
        </p>
        <div>
          <button
            className="btn btn-warning text-white mx-auto block my-3"
            onClick={async () => {
              await sendEmailVerification();
              toast("Email sended plz Check your mail");
            }}
          >
            Send Email
          </button>
        </div>
      </div>
    );
  }
  return children;
};

export default Requerdauth;
