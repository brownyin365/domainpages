import React, { useState } from "react";

function Home() {

   // Slider counter JS file

   const [sliderValue, setSliderValue] = useState(1);

   const handleSliderChange = (event) => {
     const value = parseInt(event.target.value);
     setSliderValue(value);
   };
 
   const handleTextInputChange = (event) => {
     let value = parseInt(event.target.value);
     if (isNaN(value)) {
       value = 1;
     } else if (value < 1) {
       value = 1;
     } else if (value > 1000) {
       value = 1000;
     }
     setSliderValue(value);
   };
 
  return (
    <div className="mb-12">
      <br></br>
      <br></br>
      <div>
        <br></br>
        <div>
          <div class="min-h-screen bg-black flex flex-col justify-center relative overflow-hidden sm:py-12 bg-gradient-to-br from-blue-500 to-pink-500">
            <div class="max-w-7xl mx-auto">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div class="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div class="max-w-3xl mx-auto lg:max-w-800">
                      <div>
                        <h1 className="text-2xl font-semibold text-white">
                          Add your text below, we will inscribe exactly what is
                          there.
                        </h1>
                      </div>
                      <br></br>
                      {/* Select Buttons */}
                      <div class="h-8 flex gap-3 content-evenly mt-6 sm:mt-5">
                        <input
                          id="link-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="link-checkbox"
                          class="ml-2 text-sm font-medium text-white dark:text-gray-300"
                        >
                          File
                        </label>

                        <input
                          id="link-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="link-checkbox"
                          class="ml-2 text-sm font-medium text-white dark:text-gray-300"
                        >
                          Text
                        </label>
                      </div>
                      {/* End Select Buttons */}
                      <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <div class="mt-2 sm:mt-0 sm:col-span-2">
                          <div class="w-full text-white flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-thin rounded-md h-128">
                            <div>
                              <p> page.png</p>
                              <br></br>
                              <p>182.582KB</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <br></br>
                      <div>
                        <div class="mb-4">
                          <label
                            class="block text-left text-white text-sm font-bold mb-2"
                            for="username"
                          >
                            Receiving Wallet
                          </label>
                          <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Wallet Address"
                          />
                        </div>
                      </div>
                      <br></br>
                      <div>
                        <h5 className="text-left text-white">
                          TransactionUtil Fees
                        </h5>
                      </div>
                      <div class="container my-12 mx-auto px-4 md:px-12">
                        <div class="flex flex-wrap -mx-1 lg:-mx-4">
                          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                            <article class="overflow-hidden rounded-lg shadow-lg bg-pink-600 hover:bg-blue-600">
                              <a href="#"></a>
                              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                  <a class="no-underline hover:underline text-white">
                                    Economic
                                  </a>
                                </h1>
                              </header>

                              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-white">
                                  <p class="ml-2 text-sm">17 sats/vB</p>
                                </a>
                              </footer>
                            </article>
                          </div>

                          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                            <article class="overflow-hidden rounded-lg shadow-lg bg-pink-600 hover:bg-blue-600 ctive:text-blue-600">
                              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                  <a class="no-underline hover:underline text-white">
                                    Normal
                                  </a>
                                </h1>
                              </header>

                              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-white">
                                  <p class="ml-2 text-sm">21 sats/vB</p>
                                </a>
                              </footer>
                            </article>
                          </div>

                          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                            <article class="overflow-hidden rounded-lg shadow-lg bg-pink-600 hover:bg-blue-600">
                              <a href="#"></a>

                              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                  <a class="no-underline hover:underline text-white text-center">
                                    Custom
                                  </a>
                                </h1>
                              </header>

                              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a
                                  class="flex items-center no-underline hover:underline text-white"
                                  href="#"
                                >
                                  <p class="ml-2 text-sm text-center">
                                    27 sats/vB
                                  </p>
                                </a>
                              </footer>
                            </article>
                          </div>
                        </div>
                        <br></br>
                        {/* Increase fees slider,you could also use antd slider plugin for this */}
                        <div className="flex w-full">
                          <input
                            type="range"
                            className="transparent h-1.5 w-full mt-5 cursor-pointer appearance-none rounded-lg border-transparent bg-pink-600"
                            min="1"
                            max="1000"
                            step="1"
                            id="customRange3"
                            value={sliderValue}
                            onChange={handleSliderChange}
                          />
                          <input
                            type="number"
                            className="w-16 border-gray-300 rounded-lg mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
                            min="1"
                            max="1000"
                            step="1"
                            value={sliderValue}
                            onChange={handleTextInputChange}
                          />
                        </div>
                        {/* End of slider */}
                        <br></br>
                        <div>
                          <p className="text-white">
                            Times shown are not guaranteed. USD values are
                            estimates only.<br></br>
                            Exceeds 23 inscriptions needs to wait for the
                            transfer transaction confirmation
                          </p>
                        </div>
                      </div>

                      <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <div class="mt-2 sm:mt-0 sm:col-span-2">
                          <div class="w-full flex justify-center text-white items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-thin rounded-md h-128">
                            <div>
                              <p className="text-base">
                                {" "}
                                Inscribe Fee：1 × 546 sats ~ $0.17
                              </p>
                              <p className="text-base">
                                {" "}
                                Network Fee：1 × 546 sats ~ $0.17
                              </p>
                              <p className="text-base">
                                {" "}
                                Service Fee：1 × 546 sats ~ $0.17
                              </p>
                              <p className="font-bold text-xl">
                                {" "}
                                Total Fee：~966700 sats ~ $296.02
                              </p>
                              <br></br>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <div class="px-4 py-4 sm:px-6">
                            <div class="flex items-center">
                              <button class="bg-pink-600 shadow text-white hover:bg-blue-600 font-bold py-2 px-4 mt-3 rounded-full w-full max-w-3xl mx-auto lg:max-w-800">
                                Next
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
