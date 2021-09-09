import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const User = props => (
    <tr>
        <td className={props.user.user_completed ? 'completed': ''}>{props.user.user_name}</td>
        <td className={props.user.user_completed ? 'completed': ''}>{props.user.user_age}</td>
        <td className={props.user.user_completed ? 'completed': ''}>{props.user.user_gender}</td>
        <td className={props.user.user_completed ? 'completed': ''}>{props.user.user_email}</td>
        <td className={props.user.user_completed ? 'completed': ''}>{props.user.user_phonenumber}</td>
        <td>
            <Link to={"/edit/"+props.user._id}>Edit</Link> | <button onClick={()=> {props.deleteUserItem(props.user._id)}}>Delete</button>
        </td>
    </tr>
)

export default class UsersList extends Component{

    constructor(props){
        super(props);
        this.state = {users:[]}; 
    }
    
    componentDidMount(){
        axios.get('http://localhost:4000/users/')
        .then(response => {
            this.setState({users:response.data})
        })
        .catch(function(error){
            console.log(error);
        })
    }

    deleteUserItem = (id) =>{
        console.log(id);
        axios.delete('http://localhost:4000/users/'+id)
        .then(res=> {console.log(res.data)});

        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    };

    userList = () => {
        return this.state.users.map((currentUser,i) => {
            return <User user={currentUser} deleteUserItem={this.deleteUserItem}/>;
        })    
    };

    render(){
        return (
            <div>
                <h3>User List</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>

            </div>
        )
    }
}