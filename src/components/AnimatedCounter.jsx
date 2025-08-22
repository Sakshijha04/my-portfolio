// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";

// import { counterItems } from "../constants";

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedCounter = () => {
//   const counterRef = useRef(null);
//   const countersRef = useRef([]);

//   useGSAP(() => {
//     countersRef.current.forEach((counter, index) => {
//       const numberElement = counter.querySelector(".counter-number");
//       const item = counterItems[index];

//       // Set initial value to 0
//     //   gsap.set(numberElement, { innerText: "0" });
//       let obj = { val: 0 };

//       // Create the counting animation
//     //   gsap.to(numberElement, {
//     //     innerText: item.value,
//     //     duration: 2.5,
//     //     ease: "power2.out",
//     //     snap: { innerText: 1 }, // Ensures whole numbers
//     //     scrollTrigger: {
//     //       trigger: "#counter",
//     //       start: "top center",
//     //     },
//     //     // Add the suffix after counting is complete
//     //     onComplete: () => {
//     //       numberElement.textContent = `${item.value}${item.suffix}`;
//     //     },
//     //   });
//     gsap.to(obj, {
//         val: item.value,
//         duration: 2.5,
//         ease: "power2.out",
//         snap: { val: 1 },
//         scrollTrigger: {
//           trigger: "#counter",
//           start: "top center",
//         },
//         onUpdate: () => {
//           numberElement.textContent = `${obj.val}${item.suffix}`;
//         },
//       });
//     }, counterRef);
//   }, []);

//   return (
//     <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
//       {/* <div className="mx-auto grid-4-cols"> */}
//       <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//         {counterItems.map((item, index) => (
//           <div
//             key={index}
//             ref={(el) => el && (countersRef.current[index] = el)}
//             className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
//           >
//             <div className="counter-number text-white-50 text-5xl font-bold mb-2">
//               0 {item.suffix}
//             </div>
//             <div className="text-white-50 text-lg">{item.label}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

//export default AnimatedCounter;

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        itemRefs.current.forEach((el, i) => {
          if (!el) return;

          const numberEl = el.querySelector(".counter-number");
          const item = counterItems[i];
          if (!numberEl || !item) return;

          // Static value for first card
          if (item.type === "static") {
            numberEl.textContent = `${item.value}${item.suffix ?? ""}`;
            return; // skip animation
          }

          // Animate other cards
          const obj = { v: 0 };
          gsap.to(obj, {
            v: item.value,
            duration: 2.2,
            ease: "power2.out",
            snap: { v: 1 },
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              once: true,
            },
            onUpdate: () => {
              numberEl.textContent = `${Math.round(obj.v)}${item.suffix ?? ""}`;
            },
          });
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  return (
    <div id="counter" ref={containerRef} className="padding-x-lg xl:mt-0 mt-32">
      {/* Responsive grid for 2 cards */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              {item.type === "static"
                ? `${item.value}${item.suffix ?? ""}`
                : `0${item.suffix ?? ""}`}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
