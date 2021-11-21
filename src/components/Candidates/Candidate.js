import React,{useState} from 'react'
import Shortlisted from '../ShortListed/Shortlisted';
import { useNavigate } from 'react-router-dom';

function Candidate(props) {
    let item = props.item;
    let navigate = useNavigate();

    const [status,setStatus] = useState(localStorage.getItem(`item${item.id}`) == null ? "none" : localStorage.getItem(`item${item.id}`))

   const handleSelected=(item)=>{
       setStatus("selected")
       localStorage.setItem(`item${item.id}`,"selected")
       navigate("/")
      
   }

   const handleRejected = (item)=>{
    setStatus("rejected")
    localStorage.setItem(`item${item.id}`,"rejected")
    navigate("/")
   }


  
    return(
        <div style={{margin:"8vw auto"}}>

          <img className="headerImage" src={item.Image} alt="" />
          <div className="content_area">
          <p>Username : {item.name}</p>
          <p>Candidate id : {item.id}</p>
          <p>Status : {status}</p>

        {status != "selected" &&  <button onClick={()=>handleSelected(item)} style=
          {{color:"white",
          backgroundColor:"Darkgreen",
          padding:"10px",
          borderRadius:"10px 10px"
          }}>Select</button>
            }
         
          <span>  </span>
         
          {status != "rejected" &&
          <button onClick={()=>handleRejected(item)} style=
          {{color:"white",
          backgroundColor:"maroon",
          padding:"10px",
          borderRadius:"10px 10px"
          }}>Reject</button>
            }

          </div>  
          
    </ div>
    )
}

export default Candidate
