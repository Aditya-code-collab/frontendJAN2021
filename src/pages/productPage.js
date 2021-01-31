import react, { useState, useEffect } from "react";
import SearchTiles from "../components/searchTIles";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH, CITYNAME } from "../components/actions/actionType";
import emailjs from 'emailjs-com';

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

var today = yyyy+'-'+mm+'-'+dd;

function Product() {
   
    const dispatch = useDispatch();
    const postdata = useSelector((state) => state.productu);

    useEffect(() => {
        //dispatch(showallposts());

    }, postdata);

    console.log(postdata);
    // alert(postdata)
    function sendEmail(e) {
        e.preventDefault();
    console.log(e.target);
    
        emailjs.sendForm('service_d89sqjv', 'template_2lfes0y', '.classnameform', 'user_IIY4cwzcRcdxxEkqbL5pu')
          .then((result) => {
              console.log(result.text);
              alert("Congrats 🎉  One confirmation mail is sent to your email regarding the order please resend it to us after verifying the order 👍 ! Happy Shopping :)")
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div>
            <div className="topportionProduct">
                <div className="Mheader ">
                    <div>
                        <img className="logoheader" src="logo192.png" />
                        <a className="a">Help</a>
                        <a className="a">Rent your tools</a>
                        <a className="a">About</a>

                    </div>

                </div>
                
                 

                    <div className="productDetails">
                    <img className="productimage" src="https://content.fortune.com/wp-content/uploads/2018/04/iphone8_iphone8plus_product_red_front_back_041018-e1523280198726.jpg"/>
                    
                   <div className="discription" >
                   <h1>{postdata[0].title} </h1>
                        <hr/>
                        <h2>₹ {postdata[0].cpa} per hour</h2>
                        <h3>Product discription -- {postdata[0].description} </h3>
                        <br/><br/>
                        <form onSubmit={sendEmail} className="classnameform">
                    <h2>Select Proper date and timeing ⏲️ </h2>    
                        <br/>
                        <h3>RentIn</h3>
                        <input className="inputproduct" type="date" min={today}   name="date1" id=""/>
                        <input className="inputproduct" type="time"  name="time1"  min="9" placeholder="total no of hours" />
                        <br/><br/>
                        <hr/>
                        <h3>RentOut</h3>
                        <input className="inputproduct" id="datefield"  name="date2" type='date'  />
                        
                        <input className="inputproduct" type="time"  name="time2"  placeholder="total no of hours" />
                        <br/><br/>
                        <hr/>
                        <br/>
                        <h3>Your Phone</h3>
                        <input className="inputproduct" placeholder="+91 123456789"  name="mytel" type="tel" pattern="[+]{1}[0-9]{10,11}"  />
                        <br/><br/>
                        <h3>Your Email</h3>
                        <input className="inputproduct" placeholder="your email address for verification"  name="email" type='email'  />
                        <hr/>
                        <input type="hidden"  name="toolname" value={postdata[0].title}/>
                        <input type="hidden"  name="toolid" value={postdata[0]._id}></input>
                        <input type="hidden"  name="toolprice" value={postdata[0].cpa}></input>
                         <br/><br/>
                        <button type="submit" className="buttonpro">Take on rent</button>

                       
                        </form> 
                   </div>
                       
                    </div>

                

            </div>


            <div className="footermee f3">
                <p className="copyright">copyright 2021</p>
            </div>

        </div>
    );
}

export default Product;
