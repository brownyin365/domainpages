import React, { useState } from "react";
import style from "../asset/style.css";

function Home() {
  // grab all the buttons
  let Buttons = document.querySelectorAll(".selectSection button");

  // loop through the buttons using for..of
  for (let button of Buttons) {
    // listen for a click event
    button.addEventListener("click", (e) => {
      // et = event target
      const et = e.target;
      // slect active class
      const active = document.querySelector(".active");
      // check for the button that has active class and remove it
      if (active) {
        active.classList.remove("active");
      }
      // add active class to the clicked element
      et.classList.add("active");

      // select all classes with the name content
      let allContent = document.querySelectorAll(".content");

      // loop through all content classes
      for (let content of allContent) {
        // display the content if the class has the same data-attribute as the button
        if (
          content.getAttribute("data-number") ===
          button.getAttribute("data-number")
        ) {
          content.style.display = "block";
        }
        // if it's not equal then hide it.
        else {
          content.style.display = "none";
        }
      }
    });
  }

  return (
    <div className="mb-12">
      <br></br>
      <br></br>
      <div class="min-h-screen bg-black flex flex-col justify-center relative overflow-hidden sm:py-12 bg-gradient-to-br from-blue-500 to-pink-500">
        <div class="max-w-7xl mx-auto">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <div class="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <div class="max-w-3xl mx-auto lg:max-w-800">
                  <div>
                    <h1 className="text-2xl font-semibold text-white font-sans">
                      Mint Your Brc-20 Token Here,we will inscribe exactly what
                      is there.
                    </h1>
                    <br></br>
                    <br></br>
                  </div>
                  <div class="selectSection">
                    <button
                      type="button"
                      data-number="1"
                      class="active active:bg-pink-400 bg-pink-600 rounded-full font-sans h-10 text-white"
                    >
                      Mint
                    </button>
                    <button
                      type="button"
                      data-number="2"
                      className="bg-pink-600 rounded-full text-white"
                    >
                      Deploy
                    </button>
                    <button
                      type="button"
                      data-number="3"
                      className="bg-pink-600 rounded-full text-white"
                    >
                      Transfer
                    </button>
                  </div>

                  <div class="contentSection">
                    <div class="content" data-number="1">
                      <div>
                        <div class="mb-4">
                          <select
                            id="country"
                            name="country"
                            autocomplete="country-name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Numbers"
                          >
                            <option>search brc tick</option>
                            <option>ordi - 100.00%</option>
                            <option>meme - 100.00%</option>
                            <option>punk - 100.00%</option>
                            <option>pepe - 100.00%</option>
                            <option>BRUH - 100.00%</option>
                            <option>GOLD - 100.00%</option>
                            <option>BAYC - 100.00%</option>
                            <option>100K - 100.00%</option>
                          </select>
                        </div>

                        <div class="mb-4">
                          <label
                            class="block text-left text-sm font-bold mb-2 font-sans text-white"
                            for="Amount"
                          >
                            Amount
                          </label>
                          <input
                            class="shadow bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Amount"
                          />
                        </div>

                        {/* Increase fees slider,you could also use antd slider plugin for this */}
                        <div>
                          <label
                            for="customRange3"
                            class="mb-2 text-neutral-700 dark:text-neutral-200 text-left"
                          >
                            1-1000
                          </label>
                          <input
                            type="range"
                            class="transparent bg-gray-300 h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent"
                            min="0"
                            max="5"
                            step="0.5"
                            id="customRange3"
                          />
                        </div>
                        {/* End Increase Fees */}
                      </div>
                    </div>
                    <div class="content" data-number="2">
                      <div>
                        <div class="mb-4">
                          <select
                            id="country"
                            name="country"
                            autocomplete="country-name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Numbers"
                          >
                            <option>search brc tick</option>
                            <option>ordi - 100.00%</option>
                            <option>meme - 100.00%</option>
                            <option>punk - 100.00%</option>
                            <option>pepe - 100.00%</option>
                            <option>BRUH - 100.00%</option>
                            <option>GOLD - 100.00%</option>
                            <option>BAYC - 100.00%</option>
                            <option>100K - 100.00%</option>
                          </select>
                        </div>
                        <div class="mb-4">
                          <label
                            class="block text-left text-white text-sm font-bold mb-2"
                            for="username"
                          >
                            Tick
                          </label>
                          <input
                            class="shadow bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Tick"
                          />
                        </div>

                        <div class="mb-4">
                          <label
                            class="block text-left text-white text-sm font-bold mb-2"
                            for="Tick"
                          >
                            Total Surply
                          </label>
                          <input
                            class="shadow bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Total Surply"
                          />
                        </div>

                        <div class="mb-4">
                          <label
                            class="block text-left text-white text-sm font-bold mb-2"
                            for="Amount"
                          >
                            Limit per Mint
                          </label>
                          <input
                            class="shadow bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Limit per Mint"
                          />
                        </div>
                        <div class="mb-4">
                          <label
                            class="block text-left text-white text-sm font-bold mb-2"
                            for="Amount"
                          >
                            Tick Decimal
                          </label>
                          <input
                            class="shadow bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Tick Decimal"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="content" data-number="3">
                      <div>
                        <div class="mb-4">
                          <label
                            class="block text-left text-white text-sm font-bold mb-2"
                            for="username"
                          >
                            Tick
                          </label>
                          <input
                            class="shadow bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Tick"
                          />
                        </div>

                        <div class="mb-4">
                          <label
                            class="block text-left text-white text-sm font-bold mb-2"
                            for="Tick"
                          >
                            Amount
                          </label>
                          <input
                            class="shadow bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="number"
                            placeholder="Amount"
                          />
                        </div>

                        {/* Increase fees slider,you could also use antd slider plugin for this */}
                        <div>
                          <label
                            for="customRange3"
                            class="mb-2 text-neutral-700 dark:text-neutral-200 text-left"
                          >
                            1-1000
                          </label>
                          <input
                            type="range"
                            class="transparent bg-gray-300 h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-pink-600"
                            min="0"
                            max="5"
                            step="0.5"
                            id="customRange3"
                          />
                        </div>
                        {/* End Increase Fees */}
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
