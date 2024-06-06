import React from 'react'

export default function Hero() {
  return (
    <section className="text-gray-600 body-font bg-gray-950 rounded-b-3xl">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">Every order
            <br className="hidden lg:inline-block" />fulfilled, on time.
          </h1>
          <p className="mb-8 leading-relaxed">Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.</p>
          <div className="flex justify-center">
            <button className="inline-flex items-center text-red-400 bg-transparent border border-red-400 py-2 h-10 px-6 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg">Get started with Crest</button>
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg" alt="" />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <img className="object-cover object-center rounded w-full h-full" alt="hero" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" />
          <img className="absolute top-0 left-0 w-full h-full object-cover" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d3e24ea3f00_homengg.svg" alt="overlay" />
          <div className="w-full h-px bg-black"></div>
        </div>

      </div>
    </section>
  )
}


