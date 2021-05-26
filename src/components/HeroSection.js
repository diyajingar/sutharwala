
import React from "react";

import "react-sliding-pane/dist/react-sliding-pane.css";
import Form from "./Form";
import Modal from "./Modal"
function HeroSection(props) {
  const [showModal, setShowModal] = React.useState(false);
 
  return (
    <div className="o-hidden">
      <img
        src="https://i.ibb.co/zxxDpKK/imgpsh-fullsize-anim-1.png"
        alt="logo"
        className="logo"
      />
      
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="p-150 tsm:text-center lg:text-left">
                <Form/>
                <h1 className=" ext-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Our website is</span>{" "}
                  <span className="block text-indigo-600 xl:inline">
                    under construction
                  </span>
                </h1>
                <p className="m-40 mb-5 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-1 md:text-xl lg:mx-0">
                  Sutharwala is Gujarat's largest home services marketplace the
                  platform helps customers to book reliable home/offices and
                  other sectors services like service of carpenter, furniture,
                  fixture repairing ,interior designing turnkey projects etc.
                </p>
                <button
                  class="mobileButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setShowModal(true)}
                >
                  Contact Us
                </button>
              </div>
            </main>
          </div>
          {showModal ? (
            <>
            <Modal showModal={showModal} onClose={()=> setShowModal(false)}/>
            </>
          ) : null}
        </div>

        <div className="lg:absolute lg:inset-y-0 lg:right-0">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://i.ibb.co/vqgqXDT/New-Project-4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
