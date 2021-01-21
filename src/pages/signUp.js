import React from "react";
import "./signUp.css";
import { TextField, Button, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
          <div className="SignUpCardContent">
            <h2 style={{ marginBottom: "20px", color: "white" }}>Sign Up</h2>
            <div className="textField">
              <TextField
                variant="standard"
                name="name"
                fullWidth
                label="Full Name"
                value={null}
                onChange={(e) => {}}
                className={classes.textField}
              />
            </div>
            <div className="textField">
              <TextField
                name="city"
                variant="standard"
                fullWidth
                label="City"
                value={null}
                onChange={(e) => {}}
                className={classes.textField}
              />
            </div>
            <div className="textField">
              <TextField
                name="state"
                variant="standard"
                fullWidth
                label="State"
                value={null}
                onChange={(e) => {}}
                className={classes.textField}
              />
            </div>
            <div className="textField">
              <TextField
                name="email"
                variant="standard"
                fullWidth
                label="Email"
                value={null}
                onChange={(e) => {}}
                className={classes.textField}
              />
            </div>
            <div className="textField">
              <TextField
                name="password"
                variant="standard"
                fullWidth
                label="Password"
                value={null}
                onChange={(e) => {}}
                type="password"
                className={classes.textField}
              />
            </div>
            <div className="textField">
              <TextField
                name="confirmPassword"
                variant="standard"
                fullWidth
                label="Confirm Password"
                type="password"
                value={null}
                onChange={(e) => {}}
                className={classes.textField}
              />
            </div>
            <div className="button">
              <Button
                variant="contained"
                size="large"
                fullWidth
                color="primary"
              >
                Submit
              </Button>
              <div style={{ marginTop: "20px", textColor: "white" }}>
                <a href="/signin">Already have an account? Sign In</a>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

// export default SignUp;

//
