import React, { useState , useContext, useEffect} from 'react';
import logo from './logo.svg';
import { ThemeContext } from './index';
import './App.css';

function FunctionCom(props) {
    console.log('functional component');
    const borderStyle={
        border:1,
        borderColor:'black',
        borderStyle:'solid'
    }

  const [name, setName]=useState('Meghraj');
  const [lastName, setLastName]=useState('Meghraj');
  const [width, setWidth]=useState(window.innerWidth);

  const theme=useContext(ThemeContext);



  //useEffect
  useEffect(()=>  {

    console.log('into useEffect');
    document.title=name+lastName;
      
  });

  useEffect(()=>  {

    console.log('into useEffect 2');
     window.addEventListener('resize', handleWidth);
     return ()=>
     {

        console.log("cleanup the event ");
        window.removeEventListener('resize', handleWidth);
     }
      
  });
  function handleWidth(){

    setWidth(window.innerWidth);

  }


  
  const handleFirstNameChange=(e)=>{
       

     console.log(e.target.value);

     console.log("ContextThem",theme);

     setName(e.target.value);
    

    }
    const handleLastNameChange=(e)=>{
       
        console.log(e.target.value);
   
        setLastName(e.target.value);
       
   
       }

    return (
    

        <div className="App"  >
     <div style={{borderStyle,padding:100, backgroundColor:theme.foreground}}> 
      functionBaseComp 
       <section style={{ border: "1px solid black" , borderColor:"black" , display:"flex", flexDirection:"column"}}>
   
        <div>
        Name<input   value={name}//value={props.name}
        onChange={handleFirstNameChange}
        ></input>
        </div>
        <div>
      LastName<input value={lastName}
       onChange={ handleLastNameChange}></input>
      
        </div>
        <div>
      Width<input value={width}></input>
        </div>
        
        
       </section>
   </div>
 
   
    </div>
    )
    
    
    
            
    


 
}
 
export default FunctionCom;
