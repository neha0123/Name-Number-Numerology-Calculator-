import React,{useState} from 'react';
import './App.css';
import Component from './Component'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Content';
function  App() {
const [submit,Setsubmit]=useState({});
  
return (
    <div className="App"> 
      <Component data1={(obj)=>{
        Setsubmit(obj);
      }}/>
      <Content data2={submit} />  
    </div>
  );
}

export default App;

