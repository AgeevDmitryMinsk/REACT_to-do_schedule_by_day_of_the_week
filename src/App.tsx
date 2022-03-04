import React from 'react';
import logo from './logo.svg';
import './App.css';
import {v1} from "uuid";

type tasksType = {
  id: string
  title: string
  isDone: boolean
}

const tasks: tasksType[]= [
  {id: v1(), title:"1ое дело", isDone: true},
  {id: v1(), title:"2ое дело", isDone: false},
  {id: v1(), title:"3ее дело", isDone: false},
  {id: v1(), title:"4е дело", isDone: false},
  {id: v1(), title:"5е дело", isDone: false},
  {id: v1(), title:"6е дело", isDone: false},
  {id: v1(), title:"7е дело", isDone: false},
]


function App() {
  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
