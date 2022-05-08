import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";
const Passwordreset = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
  const [email, setEmail] = useState("");
  const handleClick =async()=>{
        await sendPasswordResetEmail(email);
       if(!error){toast("Reset Password Link sended")}
  }
  return (
    <div className="mx-auto min-h-screen  w-full flex py justify-center ">
      <div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
          className="input border-2 my-5 border-gray-300"
        />
        <p className="text-red-500 text-xs py-2 center block">{error && error.message}</p>
        <button className="block btn btn-success text-white mx-auto" disabled={email.length<=5} onClick={()=>{
            handleClick();
        }}>Send</button>
      </div>
    </div>
  );
};

export default Passwordreset;
