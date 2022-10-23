import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/display/Home';
import List from './components/display/List';
import Navbar from './Navbar';
import { useState, useEffect} from 'react';
import Login from './components/user/Login';
import {db} from './firebase';
import {collection,addDoc, getDocs} from 'firebase/firestore';
import Singup from './components/user/Singup';

const App = ()=> {
  const [continut,setContinut] = useState();
  const [titlu, setTitlu] = useState();
  const [nameUser,setNameUser] = useState();
  const[list, setList] = useState();
  
  useEffect(() => {
    const dbRef = collection(db, "project");

    const getElement = async () => {
      const listProject = [];
      const docsSnap = await getDocs(dbRef);
      docsSnap.forEach(doc => {
        listProject.push(doc.data());
      })
      setList(listProject);
    }
    getElement(getElement);
    
    if (titlu !== undefined && continut !== undefined) {
        if (nameUser !== undefined) {
          var time_new = new Date(),
          time = time_new.getHours() + ':' + time_new.getMinutes() + ':' + time_new.getSeconds();
          var today = new Date(),
          day = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
          const data = {
            user: nameUser,
            time: time,
            data: day,
            title: titlu,
            content: continut
          }
          
          const addElement = async() => {
            addDoc(dbRef, data)
            .then(docRef => {
              console.log(docRef);
            })
            .catch(error => {
              console.log(error);
            })
          }
          addElement(addElement);
        } else {
          alert('Please login');
        }
      }
    },[titlu, continut,nameUser]);
    
    return (
       <div className="App">
         <Router>
           <Navbar/>
           <Routes>
             <Route path='/' element={<Home continut={continut} setContinut={setContinut} setTitlu={setTitlu} titlu={titlu}  
                                     nameUser={nameUser} setNameUser={setNameUser}/>}/>
             <Route path='/login' element={<Login nameUser={nameUser} setNameUser={setNameUser}/>}/>
             <Route path='/singup' element={<Singup nameUser={nameUser} setNameUser={setNameUser}/>}/>
             <Route path='/list' element={<List list={list}/>}/>
           </Routes>
        </Router>
      </div>
      );
    }
    export default App;
