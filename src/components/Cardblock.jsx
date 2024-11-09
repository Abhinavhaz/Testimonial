import React from "react";
import "../App.css"


function Cardblock ({data,progress}){


console.log("name", data.name)
    return(
        <>
        <nav>Testimonials</nav>
        
        <div className="container">
        <div className="card">
      <div className="progress-bar" style={{ width: `${progress}%` }} />


           <div >
            <p>{data.testimonial}</p>
        
             </div>

<div className="info">
            
            <div>   
          <span><h4>{data.name}</h4></span>  
          <p>{data.profession}</p>
          </div>
          
          <div className="circle"/>

</div>

        </div>
        </div>
        </>

    )
}


export default Cardblock




