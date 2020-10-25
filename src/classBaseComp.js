import React  ,{Component} from 'react';
import {ThemeContext} from './index';
import logo from './logo.svg';
import './App.css';
 

class  ClassComponent  extends Component{
  
     
      
    constructor(props)
    {
      super(props);
       
        console.log("constructor");
        this.state={
            name:"Meghraj",
          lastName:"Deshmukh",
          width:window.innerWidth
        }
       
    }
     

    shouldComponentUpdate(){

        console.log('shouldComponentUpdate');

        return true;
    }
    componentDidUpdate()
    {

        console.log('component did update');
        document.title=this.state.name; 
   
    }


    componentDidMount()
    {

        console.log('componentDidMount');
        document.title=this.state.name;

        window.addEventListener('resize', this.handleWidth);

    }

    handleWidth=()=>{

        console.log('into handle width');
        this.setState({
            width:window.innerWidth
        })


    }
    componentWillUpdate()
    {
        console.log("componentWillUpdate");

      // document.title=this.state.name;

    }


    handleFirstNameChange=(e)=>{
       
          console.log(e.target.value);
          this.setState({
           
            name:e.target.value,
            lastName:e.target.value
            
          })
          
   }
   handleLastNameChange=(e)=>{
       
    console.log(e.target.value);
    this.setState({
     
      name:e.target.value,
      lastName:e.target.value
      
    })
    
}

componentWillReceiveProps(props)
{
    console.log("compoent will reciveve props");
    console.log("prev props", props);
    console.log('new props',this.props);

}
  render()
  {

       console.log('render', this.props);


     return (
 

        <ThemeContext.Consumer>
       {
           (context)=>(
            <div className="App"  >
     <div style={{padding:100 , backgroundColor:context.foreground}}> 
       classBaseComp 
       <section style={{ border: "1px solid black" , borderColor:"black" , display:"flex", flexDirection:"column"}}>
   
       <div>
        Name<input   value={this.state.name}
        //onChange={(e)=>{this.props.propsChange.propsChange(e.target.value)}}
        onChange={this.handleFirstNameChange}
        ></input>
        </div>
        <div>
      LastName<input value={this.state.lastName}
       //onChange={(e)=>{this.props.propsChange.propsChange(e.target.value)}}
       onChange={this.handleLastNameChange}></input>
        </div>
        <div>
      Width<input value={this.state.width}></input>
        </div>
        
        
        
       </section>
   </div>
 
   
    </div>
           )
       }

        </ThemeContext.Consumer>

    



  );
     }
}

export default ClassComponent;
