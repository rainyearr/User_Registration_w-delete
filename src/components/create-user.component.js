import React, {Component} from 'react';
import axios from 'axios';

export class CreateUser extends Component{

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

        console.log(`Form Submitted:`);
        console.log(`User Name: ${this.state.user_name}`);
        console.log(`User Name: ${this.state.user_age}`);
        console.log(`User Name: ${this.state.user_gender}`);
        console.log(`User Name: ${this.state.user_email}`);
        console.log(`User Name: ${this.state.user_phonenumber}`);

        const newUser = {
            user_name : this.state.user_name,
            user_age : this.state.user_age,
            user_gender : this.state.user_gender,
            user_email : this.state.user_email,
            user_phonenumber : this.state.user_phonenumber,
        }

        axios.post('http://localhost:4000/todos/add', newUser)
        .then(res=> console.log(res.data));

        this.setState({
            user_name: '',
            user_age: '',
            user_gender: '',
            user_email: '',
            user_phonenumber: '',
        })
    }

    render(){
        return(
            <div style = {{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}></form>


            </div>
        )
    }
}