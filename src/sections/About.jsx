import React from "react";
import { motion } from "framer-motion";


const shapes = [
  { size: 40, x: 20, y: 20, color: "rgba(255,255,255,0.05)" },
  { size: 60, x: 200, y: 50, color: "rgba(255,255,255,0.03)" },
  { size: 30, x: 400, y: 150, color: "rgba(255,255,255,0.04)" },
];

const About = ({
  name = "Sakshi Jha",
  bio,
  photoSrc="/images/mine2.jpeg",
  buttonText = "Download Resume",
  buttonLink = "https://drive.google.com/file/d/1ZQ8S8mS4D38V4XFTL9MBpLdyHVpLyFox/view?usp=drivesdk",
}) => {
  return (
    <section
      id="about"
      className="section-padding relative flex flex-col md:flex-row items-center gap-10 md:gap-20 overflow-hidden"
    >
      {/* Floating shapes */}
      {shapes.map((s, idx) => (
        <div
          key={idx}
          className="absolute rounded-full"
          style={{
            width: s.size,
            height: s.size,
            top: s.y,
            left: s.x,
            backgroundColor: s.color,
          }}
        />
      ))}

      {/* Photo */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center relative z-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={photoSrc}
          alt={name}
          className="rounded-xl object-cover w-64 h-64 md:w-72 md:h-72 shadow-2xl rotate-[-5deg]"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="w-full md:w-2/3 flex flex-col gap-6 relative z-10"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
        <p className="text-white-50 text-base md:text-lg">
          {bio ||(
            <>
            "Hi! I’m <span className="text-purple-500 font-bold">Sakshi Jha</span>, a passionate developer focused on creating clean, responsive, and user-friendly applications. I enjoy working with modern web technologies and building projects that makes a difference." </>)}
        </p>

        {/* Button as Anchor */}
        <a
          href={buttonLink}
          className="inline-block mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-center hover:scale-105 transition-transform duration-300"
        >
          {buttonText}
        </a>
      </motion.div>
    </section>
  );
};

export default About;
