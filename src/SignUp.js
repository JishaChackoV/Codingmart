import React,{ Component } from 'react';
import { Redirect,Link } from "react-router-dom";




class SignUp extends Component {
    constructor(props){
    super(props) 
        this.state = {
            name:'',
            password1:'',
            password2:'',
            error:false,
            redirect:false
        }


    }
    onSubmit =()=>{
        if(this.state.password1 !== this.state.password2){
            this.setState({error:true})
        }else{
            localStorage.setItem("name",this.state.name);
            localStorage.setItem("password",this.state.password1);
            this.props.history.push('/login')
            this.setState({redirect:true})
            
            
        }

    }
    render() {
        const { password2,password1,redirect} =this.state
        return (
            <div><div>SignUp </div>  
               <div> <span>Name</span>  <input type="text" onChange={(e)=>this.setState({name:e.target.value}) }placeholder="input your name"/></div>
               <div><span>password</span>  <input type="password" onChange={(e)=>this.setState({password1:e.target.value})} name="password1" placeholder="input your name"/></div>
               <div><span>Re-Enter Your Password</span>  <input type="password" name="password2" onChange={(e)=>this.setState({password2:e.target.value})} placeholder="input your name"/></div>
               {this.state.error &&<div><span>*password should be same</span></div>}
               <div><button onClick={this.onSubmit}>Submit</button></div>
               {redirect && <Link to="/question" />}
            </div>
            

        )

    }
}

export default SignUp