import {Card, CardBody} from "reactstrap";
import '../assets/general.css';
import logo from "../assets/images/logo.png";
import React from "react";
import {useHistory} from 'react-router-dom';
const Checkout = props => {
    const history = useHistory();
    const backPage = () => {
        history.push({
            pathname:"/chooseRoom",
            state:{
                firstName: props.location.state.user.firstName,
                lastname: props.location.state.user.lastname,
                email: props.location.state.user.email,
                phoneNumber: props.location.state.user.phoneNumber,
                address: props.location.state.user.address
            }
        });
    }
    return (
        <div className="container mt-3" >
            <div className="row">
                <div className="col">
                    <Card className="customCard"><CardBody>
                        <img style={{marginLeft:"45%"}} src={logo}/>
                        <div className="row">
                            <h3>Purchase info</h3>
                        </div>
                        <div className="row" style={{marginBottom:20}}>
                            <div className="form-group">
                                <h5>Client: </h5>
                                <div>Firstname: <b>{props.location.state.user.firstName}</b></div>
                                <div>Lastname: <b>{props.location.state.user.lastname}</b></div>
                                <div>Email: <b>{props.location.state.user.email}</b></div>
                                <div>Phone number: <b>{props.location.state.user.phoneNumber}</b></div>
                                <div>Address: <b>{props.location.state.user.address}</b></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <h5>Room: </h5>
                                <div>Number of adults: <b>{props.location.state.room.adults}</b></div>
                                <div>Bedrooms: <b>{props.location.state.room.bedrooms}</b></div>
                                <div>Bathrooms: <b>{props.location.state.room.bathrooms}</b></div>
                                <div>Living area: <b>{props.location.state.room.livingArea}</b></div>
                                <div>Balconies: <b>{props.location.state.room.balconies}</b></div>
                                <div>Price: <b>{props.location.state.user.address}</b></div>
                            </div>
                        </div>

                        <div className="row" style={{marginTop:"5%"}}>
                            <a href="/" style={{width:"100%",marginBottom:5}} id="nextBtn" type="button" className="btn btn-sm btn-primary">Home</a> <br/>
                            <button   style={{width:"100%"}} id="nextBtn" type="button" className="btn btn-sm btn-info" onClick={backPage}>Back</button>

                        </div>

                    </CardBody></Card>
                </div>
            </div>
        </div>
    )

}
export default Checkout;