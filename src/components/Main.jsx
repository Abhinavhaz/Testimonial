// import { useEffect, useState } from "react";
// import axios from "axios";
// import "../App.css";
// import Cardblock from "./Cardblock";

// function Main() {
//   const [testimonials, setTestimonials] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [progress, setProgress] = useState(0);

//   const fetchTestimonials = async () => {
//     try {
//       const response = await axios(
//         `https://dummyjson.com/c/a5f5-4102-4d26-8ec8`
//       );
//       setTestimonials(response.data);
//       console.log("data", response.data);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress >= 100) {
//           setCurrentIndex((prev) =>
//             prev === testimonials.length - 1 ? 0 : prev + 1
//           );
//           return 0;
//         }
//         return prevProgress + 1;
//       });
//     }, 40);
//     return () => clearInterval(interval);
//   }, [testimonials.length, currentIndex]);

//   return (
//     <div className="app">
//       {testimonials.length > 0 && (
//         <Cardblock data={testimonials[currentIndex]} progress={progress} />
//       )}
//     </div>
//   );
// }

// export default Main;
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "../App.css";
import Cardblock from "./Cardblock";

function Main() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const fetchTestimonials = useCallback(async () => {
    try {
      const response = await axios("https://dummyjson.com/c/a5f5-4102-4d26-8ec8");
      setTestimonials(response.data);
      console.log("data", response.data);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  useEffect(() => {
    const interval = setInterval(() => {

      if (!isHovered) { // Only update progress if the card is not hovered
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
            return 0; // Reset progress when it reaches 100%
          }
          return prevProgress + 1;
        });
      }
    }, 40);

    return () => clearInterval(interval);
  }, [testimonials.length, currentIndex, isHovered]);

  return (
    <div className="app">
      {testimonials.length > 0 && (
        <Cardblock 
          data={testimonials[currentIndex]} 
          progress={progress}

          onHoverStart={() => setIsHovered(true)}  // Pass hover handlers to Cardblock
          onHoverEnd={() => setIsHovered(false)}
        />
      )}
    </div>
  );
}

export default Main;
