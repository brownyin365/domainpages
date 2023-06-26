import React from "react";
import welcomeVideo from "../asset/welcomeVideo.mp4";
import inscribe from "../asset/inscribe.png";
import buyDomain from "../asset/buyDomain.png";
import barChart from "../asset/barChart.png";


function Home() {
  return (
    <div className="">
      <div class="relative flex items-center justify-center h-screen mb-12 overflow-hidden w-screen">
        <div class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Card one */}
            <div class="group relative rounded-lg group-hover:w-full cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-72">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={inscribe}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Inscribe.sats
                </h1>
                <br></br>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Inscribe your very own immutable domain on bitcoin.
                </p>
                <button class="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Inscribe
                </button>
              </div>
            </div>
            {/* Card Two */}
            <div class="group relative rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-72">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={buyDomain}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Buy.sats
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Buy a previously inscribed domain on Bitcoin from our
                  secondary marketplace.
                </p>
                <button class="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Buy
                </button>
              </div>
            </div>
            {/* Card Three */}
            <div class="group relative rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-72">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={barChart}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Sell.sats
                </h1>
                <br></br>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Sell your domain on our secondary marketplace for an extremely
                  low fee.
                </p>
                <button class="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Sell
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Main background Video */}
        <video
          src={welcomeVideo}
          autoPlay
          loop
          muted
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        />
      </div>
    </div>
  );
}

export default Home;
