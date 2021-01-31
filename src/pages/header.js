import react, { useState, useEffect } from "react";
import SearchTiles from "../components/searchTIles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH, CITYNAME } from "../components/actions/actionType";

function Header() {
  //   const [userData, setUserData] = useState({
  //     name: "",
  //     state: "",
  //     city: "",
  //     email: "",
  //     password: "",
  //   });
  const dispatch = useDispatch();
  const [searchdata, setsearchdata] = useState({
    state: "",
    city: "",
    tool: "",
  });
  const postme = [
    { tool: "hammer", state: "Rajputana", city: "jaipur" },
    { tool: "drill", state: "raj", city: "degana" },
  ];
  const postdata = useSelector((state) => state.searchu);
  const citynamesData = useSelector((state) => state.cityu);
  useEffect(() => {
    //dispatch(showallposts());
  }, [postdata, citynamesData]);

  console.log(postdata);

  const user = localStorage.getItem("name");

  const handleSubmit = async (e) => {
    console.log(searchdata);

    const searchmee = {
      state: searchdata.state,
      city: searchdata.city,
      tool: searchdata.tool,
    };
    console.log(searchmee);

    e.preventDefault();
    try {
      const dataw = await axios.post(
        "http://localhost:5005/post/search",
        searchmee
      );
      dispatch({ type: SEARCH, payload: dataw.data });
      console.log(dataw.data);
      //console.log(postdata);
    } catch (err) {
      console.log(err);
    }
  };

  ////////////
  const findcityname = async (e) => {
    // console.log(searchdata);

    const searchmee = {
      state: e,
    };
    console.log(searchmee);

    // e.preventDefault();
    try {
      const dataw = await axios.post(
        "http://localhost:5005/post/cityname",
        searchmee
      );
      dispatch({ type: CITYNAME, payload: dataw.data });

      console.log("ok");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="topportion">
        <div className="Mheader ">
          <div>
            <img className="logoheader" src="logo192.png" />
            <a className="a">Help</a>
            <a className="a">Rent your tools</a>
            <a className="a">About</a>
          </div>
        </div>

        <div className="texti">
          <h1 className="text ">EARN PASSIVE </h1>
          <h1 className="text">RENTAL INCOME </h1>
          <button className="buttonexplore ">UPLOAD YOUR TOOL TODAY</button>
        </div>
      </div>
      <div className="searchme">
        <form noValidate onSubmit={handleSubmit}>
          <select
            className="searchname a1"
            value={searchdata.state}
            name="state"
            id="state"
            onChange={(e) => {
              setsearchdata({ ...searchdata, state: e.target.value });
              findcityname(e.target.value);
            }}
          >
            <option value="Select your state">Select your state</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Madhya Pradesh">madhya pradesh</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Goa">Goa</option>
          </select>
          <select
            className="searchname a1"
            value={searchdata.city}
            name="city"
            id="city"
            onChange={(e) => {
              setsearchdata({ ...searchdata, city: e.target.value });
            }}
          >
            <option value="Select your city">Select your city</option>

            {citynamesData.map((post) => (
              <option value={post.city}> 1 {post.city}</option>

              //<SearchTiles postdetails={post} />
            ))}
            <option value="null">we only have services in Above Cities</option>
          </select>

          <input
            className="searchname a1"
            type="text"
            placeholder="type tool name"
            value={searchdata.tool}
            onChange={(e) => {
              setsearchdata({ ...searchdata, tool: e.target.value });
            }}
          />
          <button className="buttonSearch ">
            <img src="https://img.icons8.com/pastel-glyph/64/000000/search--v3.png" />
          </button>
        </form>
      </div>
      <div className="tiles">
        {postdata.map((post) => (
          <SearchTiles postdetails={post} />
        ))}
      </div>
      <div class="gallery-image">
        <div class="img-box">
          <img src="https://picsum.photos/350/250?image=444" alt="" />
          <div class="transparent-box">
            <div class="caption">
              <p>Library</p>
              <p class="opacity-low">Architect Design</p>
            </div>
          </div>
        </div>
        <div class="img-box">
          <img src="https://picsum.photos/350/250/?image=232" alt="" />
          <div class="transparent-box">
            <div class="caption">
              <p>Night Sky</p>
              <p class="opacity-low">Cinematic</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footermee f3">
        <p className="copyright">copyright 2021</p>
      </div>
    </div>
  );
}

export default Header;
