import React, {Component} from "react";
import './LoginAndSignUp.css';

export default class UserInfo extends Component{
    constructor(props){
        super(props);
        this.state= {
            userInfo: "",
        };
    }
    componentDidMount(){
        fetch("http://localhost:5000/userInfo", {
        method: "POST",
        crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
        },
        body:JSON.stringify({
            token:window.localStorage.getItem("token"),
        }),
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userInfo");
            this.setState({userInfo: data.data});
        })
    }
    render(){
    return(
            <div className="user-info">
                Name<h1>{this.state.userInfo.fname}</h1>
                Email<h1>{this.state.userInfo.email}</h1>
            </div>
        );
    }
}