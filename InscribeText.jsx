import React from "react";


function Home() {
  return (
    <div className="mb-12">
      <br></br>
      <br></br>
      <div>
        <div class="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12 bg-gradient-to-br from-blue-600 to-pink-600">
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
                        <div class="w-full flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-thin rounded-md h-128">
                          <textarea
                            class="w-full hover:border-blue-400 shadow-inner p-4 border-0"
                            placeholder="Enter Text Here"
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <div class="px-4 py-4 sm:px-6">
                          <div class="flex items-center">
                            <button class="bg-pink-600 shadow text-white hover:bg-gray-400 font-bold py-2 px-4 mt-3 rounded-full w-full max-w-3xl mx-auto lg:max-w-800">
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
  );
}

export default Home;
