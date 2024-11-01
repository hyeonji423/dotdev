import React from 'react'
import { checklistItems } from '../../constants/data'
import { CheckCircle2 } from 'lucide-react'

const index = () => {
  return (
    <div className='workflow-wrapper mt-16'>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Accelerate Your{" "}
        <span className="bg-gradient-to-r from-lime-200 to-lime-500 text-transparent bg-clip-text">
          Coding Workflow
        </span>
      </h2>
      <div>
        {checklistItems.map((check, index)=>(
          <div key={index} className="w-full px-8 py-2">
            <div className="dark:bg-neutral-900 light: bg-white rounded-md p-6 text-md border border-neutral-800 dark:font-thin light: font-normal dark:text-neutral-200 light: text-black">

              <div className="flex gap-4 w-full">
                <img src={check.image} alt="" className="w-1/2" />
                <div className="text-lime-400 bg-neutral-800 h-10 w-10 p-2 rounded-full">
                  <CheckCircle2/>
                </div>
                <div className='w-1/2 mt-2'>
                  <h6 className="text-lime-400 font-light text-xl mb-4">{check.title}</h6>
                  <span className="text-base font-light tracking-normal italic text-neutral-400">
                    {check.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default index