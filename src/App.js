// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {
  const [Hori,setHori] =useState(10)
  const [Veri,setVeri] =useState(10)
  const [Blur,setBlur] =useState(10)
  const [color,setColor] =useState("black")
  const [checkOn,setCheckOn] =useState(false)
  return (
    <div className="App">
    <div className="controls">
     
      <label>Horizontal lenght</label>
   
    <input type="range" min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)}/>
    
    <label>Verticle lenght</label>
   
    <input type="range" min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)}/>
   
    <label>Blur lenght</label>
  
    <input type="range" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)}/>
    
    <label>Color</label>
  
    <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
    <div className="switch">
          <label>
          Outline
            <input type="checkbox" checked={checkOn}onChange={()=>setCheckOn(!checkOn)}/>
          <span className="lever"></span>
          Inset
         </label>
      </div>

    </div>
    <div className="output">
      <div className='box' style={{boxShadow:`${checkOn?"Inset":""} ${Hori}px ${Veri}px ${Blur}px ${color}`}}>
        <p>box-shadow:{Hori}px {Veri}px {Blur}px {color}</p>
      </div>
    </div>
    </div>
  );
}

export default App;
