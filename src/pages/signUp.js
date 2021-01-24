import React, { useState } from "react";
import "./signUp.css";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import Axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  textField: {
    border: "1.5px solid blue",
    backgroundColor: "rgb(255,255,255,1)",
    borderRadius: theme.shape.borderRadius,
    textColor: "white",
  },
}));

export default function SignUp() {
  const [userData, setUserData] = useState({
    name: "",
    state: "",
    city: "",
    email: "",
    password: "",
  });

  const classes = useStyles();
  const history = useHistory();

  const MoveToHome = () => {
    console.log("Moving to home....");
    history.push("/home");
  };

  const handleSubmit = (e) => {
    console.log(userData);
    e.preventDefault();
    try {
      const { data } = axios.post("http://localhost:5003/users/addUser", {
        name: userData.name,
        state: userData.state,
        city: userData.city,
        email: userData.email,
        password: userData.password,
      });
      localStorage.setItem("name", userData.name);
      localStorage.setItem("state", userData.state);
      localStorage.setItem("city", userData.city);
      localStorage.setItem("email", userData.email);
      console.log("Data added.");
      MoveToHome();
    } catch (err) {
      console.log(err);
    }
    // SubmitUserData(userData);
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp4185680.jpg")`,
        backgroundRepeat: "no-repeat",
        height: "120vh",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          alignItems: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <center>
          <form noValidate onSubmit={handleSubmit}>
            <div className="SignUpCardContent">
              <h2 style={{ marginBottom: "20px", color: "white" }}>Sign Up</h2>
              <div className="textField">
                <TextField
                  variant="standard"
                  name="name"
                  fullWidth
                  label="Full Name"
                  value={userData.name}
                  onChange={(e) => {
                    setUserData({ ...userData, name: e.target.value });
                  }}
                  className={classes.textField}
                />
              </div>
              <div className="textField">
                <TextField
                  name="city"
                  variant="standard"
                  fullWidth
                  label="City"
                  value={userData.city}
                  onChange={(e) => {
                    setUserData({ ...userData, city: e.target.value });
                  }}
                  className={classes.textField}
                />
              </div>
              <div className="textField">
                <TextField
                  name="state"
                  variant="standard"
                  fullWidth
                  label="State"
                  value={userData.state}
                  onChange={(e) => {
                    setUserData({ ...userData, state: e.target.value });
                  }}
                  className={classes.textField}
                />
              </div>
              <div className="textField">
                <TextField
                  name="email"
                  variant="standard"
                  fullWidth
                  label="Email"
                  value={userData.email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                  className={classes.textField}
                />
              </div>
              <div className="textField">
                <TextField
                  name="password"
                  variant="standard"
                  fullWidth
                  label="Password"
                  value={userData.password}
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value });
                  }}
                  type="password"
                  className={classes.textField}
                />
              </div>
              <div className="button">
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
                <div style={{ marginTop: "20px", textColor: "white" }}>
                  <a href="/signin">Already have an account? Sign In</a>
                </div>
              </div>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
}
