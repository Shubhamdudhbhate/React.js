import React from 'react'

export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Contact Info */}
            <div className="p-6 mr-2 bg-gray-800 text-gray-100 sm:rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                Get in touch
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-300 mb-6">
                Fill in the form to start a conversation
              </p>

              {/* Address */}
              <div className="flex items-center mt-4 hover:text-orange-500 transition duration-300">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                     viewBox="0 0 24 24" className="w-8 h-8 mr-4 text-gray-400">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="font-semibold w-40">Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai. Institute Address, H.R. Mahajani Marg, Matunga, Mumbai. Region, Mumbai, District, Mumbai City.</div>
              </div>

              {/* Phone */}
              <div className="flex items-center mt-4 hover:text-orange-500 transition duration-300">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                     viewBox="0 0 24 24" className="w-8 h-8 mr-4 text-gray-400">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="font-semibold w-40">+91 1234567890</div>
              </div>

              {/* Email */}
              <div className="flex items-center mt-4 hover:text-orange-500 transition duration-300">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                     viewBox="0 0 24 24" className="w-8 h-8 mr-4 text-gray-400">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="font-semibold w-40">registrar@vjti.ac.in</div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="p-6 flex flex-col justify-center bg-gray-800 text-gray-100 sm:rounded-lg shadow-lg">
              <div className="flex flex-col relative z-0 w-full mb-6 group">
                <input type="text" name="name" id="name" placeholder=" " 
                       className="block py-3 px-3 w-full text-gray-100 bg-gray-900 border-b-2 border-gray-600 appearance-none focus:outline-none focus:border-orange-500"/>
                <label htmlFor="name" className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75">Full Name</label>
              </div>

              <div className="flex flex-col relative z-0 w-full mb-6 group">
                <input type="email" name="email" id="email" placeholder=" " 
                       className="block py-3 px-3 w-full text-gray-100 bg-gray-900 border-b-2 border-gray-600 appearance-none focus:outline-none focus:border-orange-500"/>
                <label htmlFor="email" className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75">Email</label>
              </div>

              <div className="flex flex-col relative z-0 w-full mb-6 group">
                <input type="tel" name="tel" id="tel" placeholder=" " 
                       className="block py-3 px-3 w-full text-gray-100 bg-gray-900 border-b-2 border-gray-600 appearance-none focus:outline-none focus:border-orange-500"/>
                <label htmlFor="tel" className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75">Telephone</label>
              </div>

              <button type="submit" 
                      className="md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transform hover:scale-105 transition duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
