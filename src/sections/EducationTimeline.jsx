import { useRef, useEffect } from "react";
import gsap from "gsap";
import "../index.css";
import { educationData } from "../constants";



const EducationTimeline = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 1, // appear one by one, 1s interval
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <section id="Edu" className="edu-timeline-section">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>
      <h2 className="edu-timeline-title">Education Timeline</h2>
      <div className="edu-timeline">
        {educationData.map((edu, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="edu-timeline-item"
          >
          

            <div className="edu-timeline-content">
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <span className="edu-year">{edu.year}</span><br />
              <span className="edu-marks">{edu.marks}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;
