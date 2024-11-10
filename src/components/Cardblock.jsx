// import React from "react";
// import "../App.css";

// function Cardblock({ data, progress }) {
//   console.log("name", data);
//   return (
//     <>
//       <nav>Testimonials</nav>

//       <div className="container">
//         <div className="card">
          
//           <div
//             style={{
//               width: "100%",top:0
//             }}
//           >
//             <div className="progress-bar" style={{ width: `${progress}%` ,top:0}} />
//           </div>
          

//           <div>
//             <p>{data.testimonial}</p>
//           </div>

//           <div className="info">
//             <div>
//               <span>
//                 <h4>{data.name}</h4>
//               </span>
//               <p>{data.profession}</p>
//             </div>

//             <div className="circle" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cardblock;
import React from "react";
import "../App.css";

function Cardblock({ data, progress, onHoverStart, onHoverEnd }) {
  console.log("name", data.name);

  return (
    <>
      <nav>Testimonials</nav>
      <div className="container">
        <div 
          className="card"
          onMouseEnter={onHoverStart}   // Pause progress on hover start
          onMouseLeave={onHoverEnd}     // Resume progress on hover end
        >
         
         <div 
            style={{
              width: "100%"
            }}
          >

            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
          


          <div style={{marginTop:"20px"}}>
            <p>{data.testimonial}</p>
          </div>

          <div className="info">
            <div style={{textAlign:"left"}}>
             <h4>{data.name}</h4>
              <p>{data.profession}</p>
            </div>

            <div className="circle" />
          </div>





        </div>
      </div>
    </>
  );
}

export default Cardblock;
