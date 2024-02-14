import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./login.css";

const Login = () => {
  let history = useHistory();
  const location = useLocation();

  const [formvalues, setFormValues] = useState({
    username: "",
    chatroom: 1,
  });
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValues({
      ...formvalues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formvalues.chatroom || !formvalues.username) {
      setShowError(true);
      return;
    }

    console.log(formvalues);
    history.push({
      pathname: "/chatroom",
      data: { formvalues },
    });
  };

  return (
    <div className="wrapper" style={{ backgroundColor: "#87CEEB", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="form-div" style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
        {showError ? (
          <div className="alert alert-danger" role="alert">
            Username or chatroom is missing
          </div>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={formvalues.username}
            />
          </div>
          <button
            type="submit"
            value="sub"
            className="btn btn-primary"
            style={{ backgroundColor: "#3498db" }}
          >
            Start Chatting
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
