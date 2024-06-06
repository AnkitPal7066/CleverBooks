import React, { useEffect, useState } from 'react'

export default function Metrics() {
  const [first, setFirst] = useState("85");
  const [second, setSecond] = useState("%");
  const [third, setThird] = useState("Reduction in out-of-stock");

  const handleFirst=()=>{
    setFirst("85");
    setSecond("%");
    setThird("Reduction in out-of-stock")
  }

  const handleSecond=()=>{
    setFirst("25");
    setSecond("Days");
    setThird("Reduction in cash recovery time")
  }

  const handleThird=()=>{
    setFirst("15");
    setSecond("%");
    setThird("Growth in revenue")
  }
  

  return (
    <div className="bg-gray-950 text-gray-200 lg:py-20 lg:pb-32 w-full px-10 flex flex-col justify-around">
    <div className="ml-16">
      <div onClick={handleFirst} className="flex hover:cursor-pointer items-center">
        <img className="bg-red-400 mr-10 m-2 rounded-full h-9 w-9 p-1" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d83fbea3ef8_Impact-icon.svg" alt="" />
        <div className="focus:border focus:border-pink-500 p-2 rounded-3xl px-5 outline-none"
        tabIndex="0">STOCKOUTS</div>
      </div>
      <div onClick={handleSecond} className="flex hover:cursor-pointer items-center">
        <img className="bg-red-400 m-2 mr-10 rounded-full h-9 w-9 p-1" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d83fbea3ef8_Impact-icon.svg" alt="" />
        <div className="focus:border focus:border-pink-500 p-2 rounded-3xl px-5 outline-none"
        tabIndex="0">CASH RECOVERY CYCLE</div>
      </div>
      <div onClick={handleThird} className="flex hover:cursor-pointer items-center">
        <img className="bg-red-400 m-2 mr-10 rounded-full h-9 w-9 p-1" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d83fbea3ef8_Impact-icon.svg" alt="" />
        <div className="focus:border focus:border-pink-500 p-2 rounded-3xl px-5 outline-none"
        tabIndex="0">REVENUE</div>
      </div>
    </div>

    <div className="flex flex-col w-full items-center">
      <div className="ml-10 text-pink-500 text-9xl font-bold">{first}<span className="text-gray-100 text-3xl">{second}</span> </div>
      <div className="text-3xl font-semibold">{third}</div>
    </div>
    
  </div>
  )
}


