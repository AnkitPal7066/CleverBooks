import React, { useState } from 'react';

const slides = [
  {
    image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg',
    title: 'Ease of use, for everyone',
    description: 'With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use.',
  },
  {
    image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg',
    title: 'Advanced Features',
    description: 'Crest offers advanced features that cater to the needs of experienced users, ensuring efficiency and productivity.',
  },
  {
    image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a2c8d8b6a42e610f78e10d_expert%201-p-500.png',
    title: 'Reliable Performance',
    description: 'Built with reliability in mind, Crest ensures consistent performance even under heavy workloads.',
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <button
        onClick={prevSlide}
        className="bg-white text-gray-600 p-2 rounded-full shadow-lg hover:bg-gray-200 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="bg-white p-6 rounded-3xl shadow-lg mx-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 relative w-full max-w-6xl">
        {/* Set aspect ratio container */}
        <div className="w-full md:w-3/4 h-full md:h-auto aspect-w-3 aspect-h-4">
          <img src={slides[currentIndex].image} alt={`Slide ${currentIndex}`} className="w-full p-16 h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">{slides[currentIndex].title}</h2>
          <p className="text-gray-600">{slides[currentIndex].description}</p>
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="bg-white text-gray-600 p-2 rounded-full shadow-lg hover:bg-gray-200 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
