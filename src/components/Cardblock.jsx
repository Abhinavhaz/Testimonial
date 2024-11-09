import React from "react";
import "../App.css";

function Cardblock({ data, progress }) {
  console.log("name", data.name);
  return (
    <>
      <nav>Testimonials</nav>

      <div className="container">
        <div className="card">
          <div
            style={{
              width: "100%",
            }}
          >
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
          {/* <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          </div> */}

          <div>
            <p>{data.testimonial}</p>
          </div>

          <div className="info">
            <div>
              <span>
                <h4>{data.name}</h4>
              </span>
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
