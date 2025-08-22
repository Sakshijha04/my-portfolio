import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a href="https://github.com/Sakshijha04/stock-analysis-and-forecasting">
              <img src="/images/projectt1.png" alt="Stock Analysis App Interface" style={{width: '100%',height: '100%',objectFit:'contain'}} /></a>
            </div>
            <div className="text-content">
              <a href="https://github.com/Sakshijha04/stock-analysis-and-forecasting"><h2>
              Time Series Stock Analysis and Forecasting Webapp
              </h2></a>
              
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a href="https://github.com/Sakshijha04/attendance-system-using-face-recognition">
                <img
                  src="/images/projectt2.png"
                  alt="faceregonition"
                /></a>
              </div>
              <a href="https://github.com/Sakshijha04/attendance-system-using-face-recognition">
              <h2>Face Recognition Attendance System</h2>
              </a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a href="https://github.com/Sakshijha04/resume-builder">
                <img src="/images/projectt3.png" alt="Cv buider App" />
                </a>
              </div>
              <a href="https://github.com/Sakshijha04/resume-builder">
              <h2>CV Builder App</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;