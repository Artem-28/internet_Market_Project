import React from 'react'
import './App.scss'
import  {Layuot}  from './hoc/Layuot/Layuot'
import  Home  from './pages/Home'
import firebase from 'firebase/app'
import { firebaseConfig } from './configFirebase'

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className='App'>
      <Layuot>
        <Home/>
      </Layuot>
    </div>
  );
}

export default App;
