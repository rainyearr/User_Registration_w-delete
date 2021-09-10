import React, {Component} from 'react';
import axios from 'axios';

export default class EditUser extends Component{

    constructor(props){
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserAge = this.onChangeUserAge.bind(this);
        this.onChangeUserGender = this.onChangeUserGender.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPhoneNumber = this.onChangeUserPhoneNumber.bind(this);
        this.onChangeUserCompleted = this.onChangeUserCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_name: '',
            user_age: '',
            user_gender: '',
            user_email: '',
            user_phonenumber: '',
            user_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/users/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                user_name: response.data.user_name,
                user_age: response.data.user_age,
                user_gender: response.data.user_gender,
                user_email: response.data.user_email,
                user_phonenumber: response.data.user_phonenumber,
                user_completed: response.data.user_completed,
                
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    onChangeUserName(e) {
        this.setState({
            user_name: e.target.value
        });
    }
    onChangeUserAge(e) {
        this.setState({
            user_age: e.target.value
        });
    }
    onChangeUserGender(e) {
        this.setState({
            user_gender: e.target.value
        });
    }
    onChangeUserEmail(e) {
        this.setState({
            user_email: e.target.value
        });
    }
    onChangeUserPhoneNumber(e) {
        this.setState({
            user_phonenumber: e.target.value
        });
    }
    onChangeUserCompleted(e) {
        this.setState({
            user_completed: !this.state.user_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            user_name: this.state.user_name,
            user_age: this.state.user_age,
            user_gender: this.state.user_gender,
            user_email: this.state.user_email,
            user_phonenumber: this.state.user_phonenumber,
            user_completed: this.state.user_completed,
        };
        console.log(obj);
        console.log(this.props.match.params.id);
        axios.post('http://localhost:4000/users/update/'+this.props.match.params.id, obj)
            .then(res=> console.log(res.data));

        this.props.history.push('/');
    }
    renderGenderSelector(){
        return(
            <div>
                <select value={this.state.user_gender}
                onChange={this.onChangeUserGender}>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
                </select>
            </div>
        )
    }
    render(){
        return(
            <div>
                <h3 style={{marginTop:20}}>Update User Information</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>User Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.user_name}
                                onChange={this.onChangeUserName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.user_age}
                                onChange={this.onChangeUserAge}
                                />
                    </div>
                    <div className="form-group">
                        <label>Gender: </label>
                        {this.renderGenderSelector()}
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.user_email}
                                onChange={this.onChangeUserEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.user_phonenumber}
                                onChange={this.onChangeUserPhoneNumber}
                                />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
    
}