import React, {Component} from 'react';
import axios from 'axios';
import "../components/create-user.component.css";

export default class CreateUser extends Component{

    constructor(props){
        super(props);

        this.state = {
            user_name: '',
            user_age: '',
            user_gender: '',
            user_email: '',
            user_phonenumber: '',
        }
        
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeUserName(e){
        this.setState({
            user_name: e.target.value
        });
    }
    onChangeAge(e){
        this.setState({
            user_age: e.target.value
        });
    }
    onChangeGender(e){
        this.setState({
            user_gender: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            user_email: e.target.value
        });
    }
    onChangePhoneNumber(e){
        this.setState({
            user_phonenumber: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`User Name: ${this.state.user_name}`);
        console.log(`User Age: ${this.state.user_age}`);
        console.log(`User Gender: ${this.state.user_gender}`);
        console.log(`User Email: ${this.state.user_email}`);
        console.log(`User PhoneNumber: ${this.state.user_phonenumber}`);

        const newUser = {
            user_name : this.state.user_name,
            user_age : this.state.user_age,
            user_gender : this.state.user_gender,
            user_email : this.state.user_email,
            user_phonenumber : this.state.user_phonenumber,
        }

        axios.post('http://localhost:4000/users/add', newUser)
        .then(res=> console.log(res.data));

        this.setState({
            user_name: '',
            user_age: '',
            user_gender: '',
            user_email: '',
            user_phonenumber: '',
        })
    }
    renderGenderSelector(){
        return(
            <div>
                <select onChange={(e)=> this.setState({user_gender: e.target.value})}>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
                </select>
            </div>
        )
    }

    render(){
        return(
            <div style = {{marginTop: 10}}>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Full Name: </label>
                        <input  
                            required
                            placeholder="Enter Full Name"
                            type = "text"
                            className = "form-control"
                            value={this.state.user_name}
                            onChange={this.onChangeUserName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input  
                            required
                            placeholder="Enter Age"
                            type = "text"
                            className = "form-control"
                            value={this.state.user_age}
                            onChange={this.onChangeAge}
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender: </label>
                        {this.renderGenderSelector()}
                    </div>
                    <div className="form-group">
                        <label>Email Address: </label>
                        <input  
                            required
                            placeholder="Enter Email Address"
                            type = "text"
                            className = "form-control"
                            value={this.state.user_email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input 
                            required 
                            placeholder="Enter Phone Number"
                            type = "text"
                            className = "form-control"
                            value={this.state.user_phonenumber}
                            onChange={this.onChangePhoneNumber}
                        />
                    </div>
                    <div className="form-group">
                        <input type= "submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}