import React from "react";
import { features } from "../../constants/data";

const index = () => {
  return <div className="mx-12 lg:mx-20">
    <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide mb-10">
        Easily Build{" "}
        <span className="bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text">
          Your Codes
        </span>
      </h2>

    <div>
      {
        features.map((feature, index)=>(
          <div key={index} className={`flex mb-10 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>

            <div className="w-1/2 flex items-center justify-center">
              <img src={feature.image} alt="code image" className="w-4/5"/>
            </div>
            
            <div className=".self-start w-1/2 mt-4">
              <h3 className="mt-2 text-xl lg:text-2xl text-indigo-300 mb-4 font-medium">{feature.text}</h3>
              <p className="text-md text-neutral-400 font-light max-w-xs">
                {feature.description}
              </p>
            </div>

          </div>
        ))
      }
    </div>
  </div>;
};

export default index;
