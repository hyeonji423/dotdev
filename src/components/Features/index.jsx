import React from "react";
import { features } from "../../constants/data";

const index = () => {
  return <div className="flex flex-col items-center mt-6 mx-12 lg:mx-20">
    <h2 className="text-center text-6xl lg:text-7xl mt-10 lg:mt-20 tracking-wide mb-10">
        Easily Build{" "}
        <span className="bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text">
          Your Codes
        </span>
        <p className="mt-10 text-base text-center text-neutral-300 max-w-4xl tracking-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore error ipsa ipsum possimus nemo, nam facere, sapiente accusamus voluptates culpa alias ab quos. Ratione aut perspiciatis exercitationem doloremque nihil.</p>
      </h2>

    <div>
      {
        features.map((feature, index)=>(
          <div key={index} className={`flex mb-16 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>

            <div className="w-1/2 flex items-center justify-center">
              <img src={feature.image} alt="code image" className="w-4/5"/>
            </div>
            
            <div className=".self-start w-1/2 mt-4 pl-8">
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
