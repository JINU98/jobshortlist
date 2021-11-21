import './App.css';
import getData from './utils/datafetchhelper.js'
import LoadingState from './components/LoadingState/LoadingState';
import React, { useState, useEffect } from "react";
import ErrorState from './components/ErrorState/ErrorState';
import Main from './components/Main.js';


function App() {
 
  const [candidateData,setCandidateData]=useState([]);
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(false)

  useEffect(()=>{
    fetchStudentData()
  },[])

  const fetchStudentData = async ()=>{   
    getData()
    .then((res)=>{
      setCandidateData(res)
      setLoading(false)
    })
    .catch((error)=>{
      setError(true)
      setLoading(false)
    })
  
  }
    
  if (error) {
    return <ErrorState></ErrorState>;
  }

 else if (loading) {
    return <LoadingState></LoadingState>;
  } 
  
  else {
    return <Main candidateData={candidateData}></Main>;
  }

}

export default App;
