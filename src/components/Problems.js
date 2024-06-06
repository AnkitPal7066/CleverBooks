import React from 'react'

// src/components/Problems.js
const Problems = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-4xl text-2xl sm:font-bold font-medium title-font mb-4 text-gray-900">Four key questions answered by CleverBooks</h1>
      </div>
      <div className="flex justify-around flex-wrap">
        <div className="xl:w-1/5 lg:w-1/4 bg-red-100 rounded-3xl lg:mr-1 mb-8 md:w-full px-6 py-6 border-l-2 border-gray-200 border-opacity-60">
          <img className="h-12 mb-2" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg" alt="" />
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">What to order</h2>
          <p className="leading-relaxed text-base mb-4">Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>

        </div>
        <div className="xl:w-1/5 bg-red-100 rounded-3xl mb-8 lg:w-1/4 lg:mr-1 md:w-full px-6 py-6 border-l-2 border-gray-200 border-opacity-60">
          <img className="h-12 mb-2" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg" alt="" />
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">When to order</h2>
          <p className="leading-relaxed text-base mb-4">Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
        </div>
        <div className="xl:w-1/5 lg:w-1/4 bg-red-100 lg:mr-1 rounded-3xl mb-8 md:w-full px-6 py-6 border-l-2 border-gray-200 border-opacity-60">
          <img className="h-12 mb-2" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg" alt="" />
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">How much to stock</h2>
          <p className="leading-relaxed text-base mb-4">Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>

        </div>
        <div className="xl:w-1/5 bg-red-100 rounded-3xl lg:mr-1 mb-8 lg:w-1/4 md:w-full px-6 py-6 border-l-2 border-gray-200 border-opacity-60">
          <img className="h-12 mb-2" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg" alt="" />
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Where to place</h2>
          <p className="leading-relaxed text-base mb-4">Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>

        </div>
      </div>

    </div>
  </section>
);

export default Problems;

