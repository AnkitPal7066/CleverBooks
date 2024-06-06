import React from 'react'

export default function CTA() {
  return (
    <div className="flex items-center justify-center lg:h-screen lg:py-32 bg-gray-900 lg:px-28">
      <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl p-8 items-center flex flex-col w-full justify-center h-full">
        <h1 className="text-2xl text-center md:text-4xl font-bold text-white mb-4">You can grow faster than you think!</h1>
        <p className="text-sm md:text-base text-center text-white mb-8">
          Plan with Crest to fulfill your demand today, and dreams tomorrow. We bring <br /> the methods and
          technologies of large global companies to help brands of all sizes scale.
        </p>
        <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800">
          Get started with Crest
        </button>
      </div>
    </div>
  )
}
