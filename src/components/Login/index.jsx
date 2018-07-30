import React from "react";

const Login = props => {
  return (
    <div>
      <h3>Login </h3>
      <div>Redirect from {props.location.state.from} </div>
    </div>
  );
};

export default Login;
