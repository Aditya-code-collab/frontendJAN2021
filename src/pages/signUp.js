import React, { useState, useEffect } from "react";
import "./signUp.css";
import { TextField, Button, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../components/actions/actions";

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

export default function SignUp({ currentId, setCurrentId }) {
  const [userData, setUserData] = useState({
    name: "",
    state: "",
    city: "",
    email: "",
    password: "",
  });
  // const data = useSelector((state) =>
  //   currentId ? state.posts.find((p) => p._id === currentId) : null
  // );
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    console.log(userData);
    e.preventDefault();
    if (currentId) {
      // dispatch(updatePosts(currentId, userData));
      dispatch(addUser(userData));
    } else {
      dispatch(addUser(userData));
    }
    clear();
  };
  useEffect(() => {
    if (data) setUserData(data);
  }, [data]);
  const clear = () => {
    setCurrentId(null);
    setUserData({
      name: "",
      state: "",
      city: "",
      email: "",
      password: "",
    });
  };
  const classes = useStyles();
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
