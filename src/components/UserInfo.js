import React from 'react';
import "../assets/general.css";
import {useHistory} from 'react-router-dom';
import logo from "../assets/images/logo.png";
const UserInfo = props => {
    console.log("PRPRPPRR ", props)
    const history = useHistory();
    const [formData, setFormData]=React.useState({
        firstname:props.location.state?props.location.state.firstName:"",
        lastname:props.location.state?props.location.state.lastname:"",
        email:props.location.state?props.location.state.email:"",
        phoneNumber:props.location.state?props.location.state.phoneNumber:"",
        address:props.location.state?props.location.state.address:""
    })

    const  handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value.trim()
        })

    }

    const formSave = (e) =>{

        const firstName = formData.firstname;
        const lastname = formData.lastname;
        const email = formData.email;
        const phoneNumber = formData.phoneNumber;
        const address = formData.address;
        if (firstName!=="" && lastname!=="" && email!=="" && phoneNumber!=="" && address!==""){
            history.push({
                pathname:"/chooseRoom",
                state:{
                    firstName: firstName,
                    lastname: lastname,
                    email: email,
                    phoneNumber: phoneNumber,
                    address: address
                }
            })
        }else{
            alert("Fill all of the fields");
        }

    }

    return (
        <div className="container mt-3 mb-3">
            <img style={{marginLeft:"45%"}} src={logo}/>
            <form >
                <div className="form-group customFormGroup">
                    <label htmlFor="firstname">Firstname</label>
                    <div><input type="text" id="firstname" name="firstname" onChange={handleChange} className="form-control" defaultValue={props.location.state?props.location.state.firstName:""}/></div>
                </div>
                <div className="form-group customFormGroup" >
                    <label htmlFor="firstname">Lastname</label>
                    <div><input type="text" id="lastname" name="lastname" onChange={handleChange}  className="form-control" defaultValue={props.location.state?props.location.state.lastname:""}/></div>
                </div>
                <div className="form-group customFormGroup">
                    <label htmlFor="firstname">Email</label>
                    <div><input type="text" id="email" name="email" onChange={handleChange} className="form-control" defaultValue={props.location.state?props.location.state.email:""}/></div>
                </div>
                <div className="form-group customFormGroup">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <div><input type="text" id="phoneNumber"  name="phoneNumber" onChange={handleChange} className="form-control" defaultValue={props.location.state?props.location.state.phoneNumber:""}/></div>
                </div>
                <div className="form-group customFormGroup">
                    <label htmlFor="address">Address</label>
                    <div><input type="text" id="address"  name="address" onChange={handleChange} className="form-control" defaultValue={props.location.state?props.location.state.address:""}/></div>
                </div>
                <br/>

                <button style={{width:"100%"}} id="nextBtn" type="button" className="btn btn-sm btn-primary" onClick={formSave}>Next</button>
            </form>
        </div>
    )
}
export default UserInfo;