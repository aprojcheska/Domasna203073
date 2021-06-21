import {Card, CardBody} from "reactstrap";
import "../assets/general.css"
import React from "react";
import {useHistory} from 'react-router-dom';
import room1 from '../assets/images/room1.jpg'
import room1_2 from '../assets/images/room1_2.jpg'
import room1_3 from '../assets/images/room1_3.jpg'
import logo from "../assets/images/logo.png";

const ChooseRoom = (props) => {
    console.log("RPPR ", props);
    const history = useHistory();
    const [selectedRoomType, setSelectedRoomType] = React.useState(0);
    const selectRoom = (e) =>{
        console.log(e.target.id);
        setSelectedRoomType(e.target.id);
    }
    const formSave = () => {
        console.log("ddaw", selectedRoomType)
        if (selectedRoomType === 0){
            alert("Select room");
        }else{
            if (selectedRoomType === '1'){
                history.push({
                    pathname:"/checkout",
                    state:{
                        room:{
                            adults:3,
                            bedrooms:2,
                            bathrooms:2,
                            balconies:2,
                            livingArea:true,
                            price:139
                        },
                        user:props.location.state
                    }
                });
            }else if(selectedRoomType==='2'){
                history.push({
                    pathname:"/checkout",
                    state:{
                        room:{
                            adults:2,
                            bedrooms:1,
                            bathrooms:1,
                            balconies:1,
                            livingArea:true,
                            price:89
                        },
                        user:props.location.state
                    }
                });
            }else if (selectedRoomType==='3'){
                history.push({
                    pathname:"/checkout",
                    state:{
                        room:{
                            adults:1,
                            bedrooms:1,
                            bathrooms:1,
                            balconies:1,
                            livingArea:false,
                            price:49
                        },
                        user:props.location.state
                    }
                });
            }
        }
    }

    const backPage = () => {
        history.push({
            pathname:"/userInfo",
            state:{
                firstName: props.location.state.firstName,
                lastname: props.location.state.lastname,
                email: props.location.state.email,
                phoneNumber: props.location.state.phoneNumber,
                address: props.location.state.address
            }
        });
    }
    return (
        <div className="container mt-5 mb-3">
            <img style={{marginLeft:"45%"}} src={logo}/>


            <div className="row" onClick={selectRoom} id="1">
                <div className="col" id="1">
                    <Card className="customCard" id="1">
                        <CardBody id="1">
                            <div className="row" id="1">
                                <div className="col-3" id="1">
                                    <ul id="1">
                                        <li id="1">3 Adults</li>
                                        <li id="1">2 Bathrooms</li>
                                        <li id="1">2 Bedrooms</li>
                                        <li id="1">2 Balconies</li>
                                        <li id="1">1 Living area</li>
                                    </ul>
                                </div>
                                <div className="col-9" id="1">
                                   <img id="1" className="customImage" width="200px" src={room1}/>
                                    <img id="1" className="customImage" width="200px" src={room1_2}/>
                                    <img id="1" className="customImage" width="200px" src={room1_3}/>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row" id="2" onClick={selectRoom}>
                <div className="col" id="2">
                    <Card  className="customCard" id="2">
                        <CardBody id="2">
                            <div className="row" id="2">
                                <div className="col-3" id="2">
                                    <ul id="2">
                                        <li id="2">2 Adults</li>
                                        <li id="2">1 Bathroom</li>
                                        <li id="2">1 Bedroom</li>
                                        <li id="2">1 Balcony</li>
                                        <li id="2">1 Living area</li>
                                    </ul>
                                </div>
                                <div className="col-9" id="2">
                                    <img id="2" className="customImage" width="200px" src={room1}/>
                                    <img id="2" className="customImage" width="200px" src={room1_2}/>
                                    <img id="2" className="customImage" width="200px" src={room1_3}/>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>


            <div className="row" id="3" onClick={selectRoom}>
                <div className="col" id="3">
                    <Card className="customCard" id="3">
                        <CardBody id="3">
                            <div className="row" id="3">
                                <div className="col-3" id="3">
                                    <ul id="3">
                                        <li id="3">1 Adult</li>
                                        <li id="3">1 Bathroom</li>
                                        <li id="3">1 Bedroom</li>
                                        <li id="3">1 Balcony</li>
                                    </ul>
                                </div>
                                <div className="col-9" id="3">
                                    <img id="3" className="customImage" width="200px" src={room1}/>
                                    <img id="3" className="customImage" width="200px" src={room1_2}/>
                                    <img id="3" className="customImage" width="200px" src={room1_3}/>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row" style={selectedRoomType===0?{display:"none"}:{display:"inline"}}>
                Selected room type: <b>{selectedRoomType}</b>
            </div>
            <div className="row" style={{marginTop:"5%"}}>
                <button style={{width:"100%",marginBottom:5}} id="nextBtn" type="button" className="btn btn-sm btn-primary" onClick={formSave}>Next</button> <br/>
                <button   style={{width:"100%"}} id="nextBtn" type="button" className="btn btn-sm btn-info" onClick={backPage}>Back</button>

            </div>

        </div>
    )
}

export default ChooseRoom;