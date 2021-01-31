import React, { useEffect } from "react";
import axios from "axios";
import { PRODUCTPAGELIVE } from "../components/actions/actionType";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function Tiles({ postdetails }) {
  const postdata = useSelector((state) => state.productu);
  let history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const searchmee = { value: e.target.value };
    //console.log(e.target.value);
    e.preventDefault();

    try {
      const dataw = await axios.post(
        "http://localhost:5005/post/updateliveproduct",
        searchmee
      );
      dispatch({ type: PRODUCTPAGELIVE, payload: dataw.data });
      console.log(dataw.data);
      console.log(postdata);
      history.push("/product");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="tilesIndividual">
      <h1> {postdetails.title}</h1>
      <h2>₹ {postdetails.cpa} per hour</h2>
      <h4>Tools Discription : {postdetails.description}</h4>
      <button value={postdetails.pid} type="submit" onClick={handleSubmit}>
        QUICK VIEW
      </button>
    </div>
  );
}
export default Tiles;

/*
<Link
  to={{
    pathname: "/product",
    data: postdata.dataw // your data array of objects
  }}
>

</Link>
*/
