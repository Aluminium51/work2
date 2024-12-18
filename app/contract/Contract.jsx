import React from 'react';

const Contract = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div id="contact" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Contact Me
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-10">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-x-10">
            {/* Form */}
            <div className="w-full lg:w-1/2 lg:mt-0 flex justify-center ">
              <form className="mt-8 max-w-lg mx-auto lg:mx-0">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg mb-4 bg-gray-700 text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg mb-4 bg-gray-700 text-white"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg mb-4 bg-gray-700 text-white"
                  rows="5"
                ></textarea>
                <button
                  type="submit"
                  className="w-full p-3 bg-light-blue-700 text-white rounded-lg hover:bg-light-blue-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <img
                src="https://i.pinimg.com/736x/fe/a6/95/fea695dc232fcf55a996b7e30b53fc0d.jpg"
                alt="Contact Illustration"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
