import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    constructor(props){
    super(props) 
        this.state = {
            name:'',
            password:'',
            redirect:false
        }
    }
    onSubmit  = () =>{
        const {name,password} =this.state
        const nameData = localStorage.getItem("name");
        const passwordData = localStorage.getItem("password")
        if((name === nameData) && (password === passwordData)){
            this.props.history.push('/question')
            this.setState({redirect:true})
           
        }
        

    }
    render() {
        const {name,password,redirect} =this.state
        return (
            <div>LOGIN   
               <div> <span>Name</span>  <input type="text" onChange={(e)=>this.setState({name:e.target.value})} placeholder="input your name"/></div>
               <div><span>password</span>  <input type="password" onChange={(e)=>this.setState({password:e.target.value})} placeholder="input your name"/></div>
                <div><button type="submit" onClick={this.onSubmit}>Submit </button></div>
                {redirect&&  <Redirect to = "/question"/>}
            </div>
            

        )

    }
}

export default Login