import React from 'react';
import logo from './logo.svg';
import './App.css';

function FunctionCom() {
  
  const Name="Meghraj";

    const LastName="Deshmukh";

    const handleChange=(e)=>{
       
          console.log(e.target.value);
          
        

    }

    return (
   
    <div className="App"  >
     <div style={{padding:100}}> 
       classBaseComp 
       <section style={{ border: "1px solid black" , borderColor:"black" , display:"flex", flexDirection:"column"}}>
   
        <div>
        Name<input   value={Name}
        onChange={handleChange}
        ></input>
        </div>
        <div>
      LastName<input value={LastName}></input>
        </div>
        <div>
      Width<input value={0}></input>
        </div>
        
        
       </section>
   </div>
 
   
    </div>



  );
}

export default FunctionCom;
