import React from "react";

export default function aboutPage() {
  return (
    <div
      align="center"
      style={{
        fontSize: "16px",
        fontWeight: "bold",
        backgroundImage: `url("https://wallpaperaccess.com/full/218715.jpg")`,
        backgroundRepeat: "no-repeat",
        height: "120vh",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        color: "rgb(241, 233, 233)",
      }}
    >
      <div
        style={{
          width: "90%",
          alignItems: "center",
          backgroundColor: "rgb(85, 84, 84, 0.4)",
          padding: "10px",
        }}
      >
        <h1 style={{ fontWeight: "bold" }}>About the Site</h1>
        <div>
          This site is designed for providing support to small workers (
          Carpainter, Electriction, plumber, etc..) who have to take tools on
          rent from others and have to struggle for finding cheap tools nearby.
          <br />
          The solution to this is this site which shows the worker his/her
          required tool nearby at compareable prices.
          <br />
        </div>
        <h1 style={{ fontWeight: "bold" }}>Creators</h1>
        <div>
          The website has been made as a group project of the following students
          of Indian Institute of Information Technology Una:
        </div>
      </div>
    </div>
  );
}
