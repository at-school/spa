import React from "react";
import AuthenticationLayout from "../../../layouts/AuthenticationLayout";
import "./Register.scss";
import RegisterForm from "./RegisterForm";
import RegisterMarketing from "./RegisterMarketing";

const Register = () => {
  return (
    <AuthenticationLayout>
      <div>
        <div className="Register">
          <RegisterMarketing />
          <RegisterForm />
        </div>
      </div>
    </AuthenticationLayout>
  );
};

export default Register;
