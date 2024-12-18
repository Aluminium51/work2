import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div id="about" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            The Electrical Engineering Department (CUEE) in collaboration with
            the International School of Engineering (ISE) has launched a new
            bachelor’s degree program in semiconductor engineering (SEMI). This
            program focuses on various aspects of semiconductor technology, from
            designing advanced semiconductor devices, circuits, and systems, to
            fabricating, testing, prototyping, employing, and optimizing them
            for 21st-century applications that include edge computing,
            cloud-based applications, electric vehicles (EV), and generative AI.
            We will start accepting applications from Thai applicants during the
            admission round from February 26 to March 26, 2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
