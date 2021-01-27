import React, { useState } from "react";
import "./product.css";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";
import axios from "axios";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  textField: {
    marginTop: "12px",
  },
  input: {
    color: "rgb(240, 240, 240)",
    fontSize: "12px",
  },
  button: {
    marginTop: "30px",
  },
}));

function GeneratePID() {
  var pidT = "";
  let CurrentDate = new Date();
  pidT =
    CurrentDate.getFullYear() +
    "" +
    CurrentDate.getFullYear() +
    "" +
    CurrentDate.getUTCDate() +
    "" +
    CurrentDate.getUTCHours() +
    "" +
    CurrentDate.getUTCMinutes() +
    "" +
    CurrentDate.getUTCSeconds() +
    "" +
    CurrentDate.getUTCMilliseconds() +
    "" +
    localStorage.getItem("email");
  console.log(pidT);
  return pidT;
}

export default function Product() {
  const [itemData, setItemData] = useState({
    title: "tool",
    pid: GeneratePID(),
    description: "A wonderful tool.",
    cpa: 1,
    city: localStorage.getItem("city"),
    state: localStorage.getItem("state"),
    images: "",
    sender: localStorage.getItem("email"),
  });
  const history = useHistory();
  const handleSubmit = (e) => {
    const MoveToHome = () => {
      console.log("Moving to home....");
      history.push("/home");
    };

    console.log(itemData);
    e.preventDefault();
    try {
      const { data } = axios.post("http://localhost:5003/users/addItem", {
        title: itemData.title,
        pid: itemData.pid,
        description: itemData.description,
        cpa: itemData.cpa,
        city: itemData.city,
        state: itemData.state,
        images: itemData.images,
        sender: itemData.sender,
      });
      MoveToHome();
    } catch (error) {
      console.log(error);
    }
  };

  const classes = useStyles();

  return (
    <div className="row" style={{ backgroundColor: "rgba(3, 33, 202)" }}>
      <div
        className="halfPage"
        style={{ height: "100vh", justifyContent: "center", display: "flex" }}
      >
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            paddingBlock: "10px",
          }}
        >
          {itemData.images === "" ? (
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            />
          ) : (
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img
                src={itemData.images}
                alt="Image"
                style={{
                  width: "200px",
                  height: "200px",
                  // border: "2px solid #ccc",
                  marginLeft: "5px",
                  marginRight: "5px",
                  paddingBottom: "8px",
                  alignSelf: "center",
                  justifySelf: "center",
                }}
                alt="preview"
              />
            </div>
          )}
        </div>
      </div>
      <div className="halfPage">
        <div
          className="itemForm"
          style={{
            backgroundImage: `url(https://www.vamosrayos.com/b/2020/01/blue-design-background-for-christening-floral-scaled.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className="addItemCardContent">
            <div>
              <form onSubmit={handleSubmit}>
                <h2
                  style={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Add Tool
                </h2>
                <TextField
                  variant="outlined"
                  name="title"
                  fullWidth
                  label="Title"
                  value={itemData.title}
                  helperText="At least four characters."
                  error={itemData.title.trim().length > 3 ? false : true}
                  onChange={(e) => {
                    setItemData({ ...itemData, title: e.target.value.trim() });
                  }}
                  className={classes.textField}
                  InputProps={{
                    className: classes.input,
                  }}
                />
                <TextField
                  variant="outlined"
                  name="description"
                  fullWidth
                  label="Description"
                  value={itemData.description}
                  helperText="Enter 10 characters."
                  error={itemData.description.trim().length > 9 ? false : true}
                  onChange={(e) => {
                    setItemData({ ...itemData, description: e.target.value });
                  }}
                  className={classes.textField}
                  InputProps={{
                    className: classes.input,
                  }}
                />
                <TextField
                  variant="outlined"
                  name="cpa"
                  helperText="Cost should be greater then zero."
                  fullWidth
                  error={itemData.cpa > 0 ? false : true}
                  label="Cost Per Hour"
                  value={itemData.cpa}
                  onChange={(e) => {
                    setItemData({ ...itemData, cpa: e.target.value });
                  }}
                  type="number"
                  className={classes.textField}
                  InputProps={{
                    className: classes.input,
                  }}
                />
                <TextField
                  variant="outlined"
                  name="city"
                  fullWidth
                  label="City"
                  value={itemData.city}
                  onChange={(e) => {
                    setItemData({ ...itemData, city: e.target.value });
                  }}
                  className={classes.textField}
                  InputProps={{
                    className: classes.input,
                  }}
                />
                <TextField
                  variant="outlined"
                  name="state"
                  fullWidth
                  label="State"
                  value={itemData.state}
                  onChange={(e) => {
                    setItemData({ ...itemData, state: e.target.value });
                  }}
                  className={classes.textField}
                  InputProps={{
                    className: classes.input,
                  }}
                />
                <div style={{ paddingTop: "10px", color: "white" }}>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setItemData({ ...itemData, images: base64 })
                    }
                    style={{ color: "red" }}
                  />
                </div>
                <div stye={{ paddingTop: "" }}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    color="primary"
                    type="submit"
                    className={classes.button}
                  >
                    Add
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div style={{ marginTop: "50vh" }}>
          <center>
            <FileBase
              type="file"
              multiple={true}
              onDone={({ base64 }) =>
                setItemData({ ...itemData, selectedFile: base64 })
              }
            />
          </center>
        </div> */
}

// const { getRootProps, getInputProps, isDragActive } = useDropzone({
//   accept: "image/*",
//   type: "file",
//   onDrop: (acceptedFiles) => {
//     setImage(
//       acceptedFiles.map((upFile) =>
//         Object.assign(upFile, {
//           preview: URL.createObjectURL(upFile),
//         })
//       )
//     );
//     setItemData({
//       ...itemData,
//       images: acceptedFiles.map((upFile) => upFile),
//     });
//   },
// });

// <div className="halfPage">
//         <div
//           style={{
//             width: "100%",
//             height: "100vh",
//             alignItems: "center",
//             justifyContent: "center",
//             display: "flex",
//           }}
//           className="column"
//         >
//           <div className="column">
//             <div {...getRootProps()}>
//               <input {...getInputProps()} />
//               {isDragActive ? (
//                 <div
//                   style={{
//                     alignItems: "center",
//                     justifyContent: "center",
//                     display: "flex",
//                     paddingBlock: "10px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       fontWeight: "bold",
//                       fontSize: "20px",
//                       color: "white",
//                     }}
//                   >
//                     Drop the Image here to add.
//                   </div>
//                 </div>
//               ) : (
//                 <div
//                   style={{
//                     alignItems: "center",
//                     justifyContent: "center",
//                     display: "flex",
//                     paddingBlock: "10px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       fontWeight: "bold",
//                       fontSize: "20px",
//                       color: "white",
//                     }}
//                   >
//                     Drag & Drop Or Click to select Images.
//                   </div>
//                 </div>
//               )}
//             </div>
//             <div
//               className="row"
//               style={{ justifyContent: "center", topPadding: "10px" }}
//             >
// {uploadedImage.map((upFile) => {
//   return (
//     <div
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         display: "flex",
//       }}
//     >
//       <img
//         src={upFile.preview}
//         style={{
//           width: "80px",
//           height: "80px",
//           // border: "2px solid #ccc",
//           marginLeft: "5px",
//           marginRight: "5px",
//           paddingBottom: "8px",
//         }}
//         alt="preview"
//       />
//     </div>
//   );
// })}
//             </div>
//           </div>
//         </div>
//       </div>
