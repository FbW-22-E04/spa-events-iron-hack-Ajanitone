import React from "react";

function User(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: props.theColor }}>
        Hello {props.firstName}
      </h2>
      <h2>Welcome to {props.bootcampName}</h2>
      <img src={props.image} width="100" height="100" alt="a boy" />
    </div>
  );
}

export default User;
