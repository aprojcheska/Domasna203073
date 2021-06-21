import logo from "../assets/images/logo.png";
import React from "react";

const Home = props => {
    return (
        <div className="container mt-5" style={{marginTop:"50%"}}>

                <img  style={{marginLeft: "45%"}} src={logo}/>

            <div className="row" style={{display:"flex", justifyContent:"center"}}>
                Welcome to Lorem Ipsum hotel website. You can proceed to reserving your room by clicking the button bellow.
                <a style={{width: "100%", marginBottom: 5, marginTop:5}} href="/userInfo" className="btn btn-sm btn-primary">Reserve room</a>
            </div>
        </div>
    )
}
export default Home;