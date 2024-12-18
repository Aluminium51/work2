import React from "react";

const Project = () => {
  return (
    <div className="bg-gray-900 text-whitebg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://w.wallhaven.cc/full/1p/wallhaven-1pmwv3.jpg') "}}>
      <div id="projects" className="py-20 px-10">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6">
              <img
                src="https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 1"
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold">Project 1</h3>
              <p className="mt-2">
                Media has been defined by a few. 𝕏 empo9wers the voice of the
                world. “The biggest point of manipulation that occurs in the
                media is not when the media says something that's false or
                misleading – they do that but their choice of narrative.” Elon
                Musk
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-light-blue-300 hover:underline"
              >
                View Details
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6">
              <img
                src="https://media.istockphoto.com/id/2161298305/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/big-data-technology-background.jpg?s=1024x1024&w=is&k=20&c=jXoM22f5W3r36BgSVzdr8ndoNW1LDdIG934SsSCnyuc="
                alt="Project 2"
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold">Project 2</h3>
              <p className="mt-2">
                $5,000,000 Prize 50 World Records broken 1,000 Contestants
                duking it out Biggest sets in entertainment history Beast Games
                drops Thursday 🥰
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-light-blue-300 hover:underline"
              >
                View Details
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6">
              <img
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 3"
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold">Project 3</h3>
              <p className="mt-2">
                Here's a little teaser for Beast Games! I spent over a year
                creating this 10 episode competition series, breaking 40 world
                records, building the craziest sets in entertainment history,
                featuring 1,000 players, and a $5,000,000 grand prize! I poured
                everything I have into this show, I'll see you December 19th on
                @PrimeVideo ! 🙂
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-light-blue-300 hover:underline"
              >
                View Details
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
