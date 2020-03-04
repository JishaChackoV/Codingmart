import React,{ Component } from 'react';


class Questions extends Component {
    constructor(props){
    super(props) 
        this.state = {
            question1:["what is react?","what is node?","what is mac book?"],
            answers :["A library","server","a system"],
            check :false,
            ans1:'',
            ans2:'',
            count:0,
            selectedOption:""
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
        if(this.state.selectedOption === 'A library'){
            this.setState({count:this.state.count+10})
        }else if (this.state.selectedOption !== 'A library' && this.state.selectedOption !== '') {
            this.setState({count:this.state.count-10})
        }
        
    }
    handleSubmit2 =() =>{
       if(this.state.selectedOption === 'server'){
            this.setState({count:this.state.count+10})
        }else if (this.state.selectedOption !== 'server' && this.state.selectedOption !== '') {
            this.setState({count:this.state.count-10})
        }
    }
    handleSubmit3 =() =>{
        if(this.state.selectedOption === 'a system'){
            this.setState({count:this.state.count+10})
        }else if (this.state.selectedOption !== 'a system' && this.state.selectedOption !== '') {
            this.setState({count:this.state.count-10})
        }
    }

    handleOptionChange = (e)=>  {
        this.setState({
            selectedOption: e.target.value
          });
          
    }

    render() {
    const {question1,question2,answers,selectedOption} =this.state
    const data = [...question1]
    const answerData = [...answers] 
    console.log(selectedOption)
        return (
            <div>MCQ Questions  
               <div> <span>Questions</span>
                    <div>{data[0]}<span>{answerData.map((key,value)=><li><input value={key} key={value} checked={this.state.selectedOption === `${key}`} type='radio'  onChange={this.handleOptionChange} />{key}</li>)}</span>
                    <div><button type="submit" onClick={this.handleSubmit1}>Submit </button></div>
                    </div>
                        <div>{data[1]}<span>{answerData.map((key,value)=><li><input value={key} key={value} checked={this.state.selectedOption === `${key}` }  type="radio"  onChange={this.handleOptionChange}/>{key}</li>)}</span>
                        <div><button type="submit" onClick={this.handleSubmit2}>Submit </button></div>
                        </div>
                        <div>{data[2]}<span>{answerData.map((key,value)=><li><input value={key} key={value} checked={this.state.selectedOption === `${key}` }  type="radio"  onChange={this.handleOptionChange}/>{key}</li>)}</span>
                        <div><button type="submit" onClick={this.handleSubmit3}>Submit </button></div>
                        </div>
                <div><label>Score</label><label> {this.state.count } </label>  </div>
            </div>

            </div>
            

        )

    }
}

export default Questions