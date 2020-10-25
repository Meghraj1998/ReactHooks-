import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassBase from './classBaseComp';
import FunctionComp from './functionBaseCom';
import { useState , useContext} from 'react';

function App(props) {

   const [name , setName]=useState("meghraj");
  console.log(props);

  function propsChange(tempname)
  {
    console.log('propsChange->>',tempname );

    
    setName(tempname);


 

  }

  return (
    <div className="App"  >
     
        
  
       <ClassBase propsChange={{propsChange:propsChange,name:"name"}}></ClassBase>
   
    <FunctionComp name={"name"}></FunctionComp>
   
    </div>
  );
}

export default App;
