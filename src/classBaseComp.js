import React  ,{Component} from 'react';

import logo from './logo.svg';
import './App.css';
 

class  ClassComponent  extends Component{
  
     Name="Meghraj";

    LastName="Deshmukh";

   handleChange=(e)=>{
       
          console.log(e.target.value);
          
   }

  render()
  {

     return (
   
    <div className="App"  >
     <div style={{padding:100}}> 
       classBaseComp 
       <section style={{ border: "1px solid black" , borderColor:"black" , display:"flex", flexDirection:"column"}}>
   
       <div>
        Name<input   value={this.Name}
        onChange={this.handleChange}
        ></input>
        </div>
        <div>
      LastName<input value={this.LastName}></input>
        </div>
        <div>
      Width<input value={0}></input>
        </div>
        
        
        
       </section>
   </div>
 
   
    </div>



  );
     }
}

export default ClassComponent;
