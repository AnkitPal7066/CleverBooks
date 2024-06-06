import React, { useState } from 'react'

export default function Keyproblems() {
    const images = [
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d947eea3f65_468b6a_001a58bbed254622a7777a4ff2a44f55_mv2-p-500.webp",
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326dc681ea3f66_468b6a_b3b21ca757dc4ea4a58c10bcd9a7450d_mv2-p-500.jpeg",
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d947eea3f65_468b6a_001a58bbed254622a7777a4ff2a44f55_mv2-p-500.webp",
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326dc681ea3f66_468b6a_b3b21ca757dc4ea4a58c10bcd9a7450d_mv2-p-500.jpeg",
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d947eea3f65_468b6a_001a58bbed254622a7777a4ff2a44f55_mv2-p-500.webp",
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326dc681ea3f66_468b6a_b3b21ca757dc4ea4a58c10bcd9a7450d_mv2-p-500.jpeg",
    ]

    const [vari, setVari] = useState(0);

    const next=()=>{
        if(vari===5){
            setVari(0);
            return;
        }
        setVari(vari+1);
    }

    const previous=()=>{
        if(vari===0){
            setVari(5);
            return;
        }
        setVari(vari-1);
    }


  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="title-font font-bold text-4xl mb-2 lg:mb-4 text-gray-900">Delivered: <br />The Crest blog</h1>
        <div className="leading-relaxed">Insights from years of working in various supply-chain roles (and an itch to write). We hope you find these posts interesting!</div>
      </div>
      <div onClick={previous} className="p-4 text-center sm:w-1/2 lg:w-1/4 w-1/2">
        <img className="rotate-180" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg" alt="" />
      </div>
      <div onClick={next} className="p-4 text-center sm:w-1/2 lg:w-1/2">
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg" alt="" />
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img className="object-cover object-center w-full h-full" src={images[vari]} alt="stats"/>
    </div>
  </div>
</section>
  )
}
