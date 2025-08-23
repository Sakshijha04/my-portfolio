// import { useState, useEffect } from "react";

// import { navLinks } from "../constants";

// const NavBar = () => {
//   // track if the user has scrolled down the page
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     // create an event listener for when the user scrolls
//     const handleScroll = () => {
//       // check if the user has scrolled down at least 10px
//       // if so, set the state to true
//       const isScrolled = window.scrollY > 10;
//       setScrolled(isScrolled);
//     };

//     // add the event listener to the window
//     window.addEventListener("scroll", handleScroll);

//     // cleanup the event listener when the component is unmounted
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      
//       <div className="inner">
//         <a href="#hero" className="logo">
//           Sakshi Jha | SJ
//         </a>

//         <nav className="desktop">
//           <ul>
//             {navLinks.map(({ link, name }) => (
//               <li key={name} className="group">
//                 <a href={link}>
//                   <span>{name}</span>
//                   <span className="underline" />
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <a href="#contact" className="contact-btn group">
//           <div className="inner">
//             <span>Contact me</span>
//           </div>
//         </a>
//       </div>
//     </header>
//   );
// }

// export default NavBar;

import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner flex justify-between items-center relative">
        {/* Logo */}
        <a href="#hero" className="logo">
          Sakshi Jha | SJ
        </a>

        {/* Desktop Nav */}
        <nav className="desktop hidden lg:flex items-center">
          <ul className="flex space-x-8">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button (Desktop & Mobile) */}
        <a href="#contact" className="contact-btn group hidden lg:flex">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden flex items-center justify-center z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {/* Simple burger icon */}
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="mobile absolute top-full left-0 w-full bg-black z-40">
            <ul className="flex flex-col gap-4 p-4">
              {navLinks.map(({ link, name }) => (
                <li key={name}>
                  <a
                    href={link}
                    className="text-white text-lg"
                    onClick={() => setMobileOpen(false)} // close menu on click
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-white text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact me
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
