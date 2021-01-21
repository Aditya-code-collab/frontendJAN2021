import react from "react";
import Scroll from "../components/infinitetiles" 
function header() {

    return (<div>
        <div className="topportion">
            <div className="Mheader ">
                <div >
                    <img className="logoheader" src="logo192.png" />
                    <a>Help</a>
                    <a>Rent your tools</a>
                    <a>About</a>
                </div>

            </div>

            <div className="texti">
                <h1 className="text">FIND </h1>
                <h1 className="text">NEARBY </h1>
                <button className="buttonexplore">EXPLORE NEARBY TOOLS</button>
            </div>


        </div>
        <div className="searchme">
            <form>
                
                <select className="searchname" name="state" id="state">
                    <option  value="volvo">Select your state</option>
                    <option  value="volvo">Rajasthan</option>
                    <option value="saab">madhya pradesh</option>
                    <option value="opel">Uttar Pradesh</option>
                    <option value="audi">Goa</option>
                </select>
                <select className="searchname" name="state" id="state">
                    <option  value="volvo">Select your city</option>
                    <option  value="volvo">Jaipur</option>
                    <option value="saab">Bhopal</option>
                    <option value="opel">CHandigarh</option>
                    <option value="audi">Goa</option>
                </select>

                <input className="searchname" type="text" placeholder="type tool name" />
                <button className="buttonSearch "> <img src="https://img.icons8.com/pastel-glyph/64/000000/search--v3.png"/> </button>
                        </form>

        </div>
        <div className="tiles">
            <Scroll />
        </div>
        <div className="footerme">
            <p> copyright </p>
        </div>

    </div>
    );


}

export default header;
