import React,{ Component } from 'react';


class Questions extends Component {
    constructor(props){
    super(props) 
        this.state = {
            question1:["what is react?","what is node?","what is mac book?"],
            answers :["A library","server","a system"],
            check :false,
            ans1:''
        }
    }

    handleChange=(e)=>{
        if(e.target.value === "A library"){

            this.setState({check: true,ans1:"A library"})
        }
        else {
            this.setState({check: false})
        }

    }

    onSubmit =(e) =>{
        if(this.state.check === true){
            localStorage.setItem("q1",this.state.ans1)
        }


    }
    handleSubmit1 =()=>{
        alert("answer is "+"A library")
    }
    handleSubmit2 =() =>{
        alert("answer is "+"server")
    }
    handleSubmit2 =() =>{
        alert("answer is "+"a sysystem")
    }

    handleChange =(key,value) =>{
        this.setState({[key]:[value]});
    }


    render() {
    const {question1,question2,answers} =this.state
    const data = [...question1]
    const answerData = [...answers] 
    console.log(data)
        return (
            <div>MCQ Questions  
               <div> <span>Questions</span>
            <div>{data[0]}<span>{answerData.map((key,value)=><li><input checked={true} type="radio"/>{key}</li>)}</span>
            <div><button type="submit" onClick={this.handleSubmit1}>Submit </button></div>
            </div>
                <div>{data[1]}<span>{answerData.map((key,value)=><li><input checked={true}  type="radio"/>{key}</li>)}</span>
                <div><button type="submit" onClick={this.handleSubmit2}>Submit </button></div>
                </div>
                <div>{data[2]}<span>{answerData.map((key,value)=><li><input checked={true} type="radio"/>{key}</li>)}</span>
                <div><button type="submit" onClick={this.handleSubmit3}>Submit </button></div>
                 </div>
                
                </div>
               


            </div>
            

        )

    }
}

export default Questions