import React ,{useState} from 'react'
import './CandidateCards.css'
import Rejected from '../Rejected/Rejected';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

function CandidateCards(props) {

    let candidateData = props.candidateData;
   
   const Candidate = ()=>{
    return <p>adsds</p>
   }



    return (
    <div className="wrapper">
         {candidateData.map(item => {
             return(
             <div key={item.id}>
                <Link to={item.id}>
                  <img className="headerImage" src={item.Image} alt="" />
                  <div className="content_area">
                  <p>{item.name}</p>
                  </div>  
                </Link>
            </ div>
             )
            })            
        }
        <Routes>
        {/* {candidateData.map(item => {
            return (
                <Route path="" element={<Rejected />} />
            )
               })            
            } */}
                <Route path="/1001" element={<Rejected />} />

        </Routes>
    </div>
    )
}

export default CandidateCards
