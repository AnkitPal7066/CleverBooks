import React from 'react'

export default function Header() {
    return (
        <header className="text-gray-300 body-font bg-gray-950">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className="h-8 text-white rounded-full" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d8262cbfe9e806aca29403_Crest%20white%20font%20small.png" alt="" />
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Product</a>
                    <a className="mr-5 hover:text-gray-900">Pricing</a>
                    <a className="mr-5 hover:text-gray-900">Industry</a>
                    <a className="mr-5 hover:text-gray-900">Customer Stories</a>
                    <a className="mr-5 hover:text-gray-900">About</a>
                    <a className="mr-5 hover:text-gray-900">Blog</a>
                </nav>
                <button className="inline-flex items-center bg-gray-900 text-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 mr-2 md:mt-0">Login
                </button>
                <button className="inline-flex items-center bg-red-400 border-0 py-1 px-3 focus:outline-none text-gray-100 hover:bg-gray-200 hover:text-gray-800 rounded text-base mt-4 md:mt-0">Talk to Us   
                </button>
            </div>
        </header>
    )
}
