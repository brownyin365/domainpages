import React from "react";
import { clubData } from "../data/dummy";

const src =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

function Home() {
  return (
    <div className="mt-12">

      {/* Listing page */}
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        {clubData.map((item) => (
          <div
            key={item.title}
            className="bg-gray-950 hover:bg-gray-800
            dark:text-white
            dark:bg-secondary-dark-bg md:w-56 p-4 rounded-2xl"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 
              rounded-full p-4 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg text-white font-semibold">
                {item.amount}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {item.title} {item.quantity}
            </p>
          </div>
        ))}
      </div>
        
    {/*Data filter form */}
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-6 md:container md:mx-auto items-center">
          <div></div>
          <div>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Max Length"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Max Length"
              required
            />
          </div>
          <select
            id="country"
            name="country"
            autocomplete="country-name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Numbers"
          >
            <option>All</option>
            <option>Latters Only</option>
            <option>Have Latters</option>
            <option>Exclude Latters</option>
          </select>

          <select
            id="country"
            name="country"
            autocomplete="country-name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Numbers"
          >
            <option>All</option>
            <option>Numbers Only</option>
            <option>Have Numbers</option>
            <option>Exclude Excludes</option>
          </select>
          <div>
            <button
              type="submit"
              class="text-white bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-gray-800"
            >
              Search
            </button>
          </div>
        </div>
      </form>
     {/* Main listing data table */}
      <div class="flex flex-col h-screen">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 rounded-md">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full col">
                <thead class="bg-gray-950 border border-gray-600">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Inscription Number
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Owner
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-gray-950 border border-gray-800 hover:bg-gray-900">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                      yin.sats
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      1597107
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      bc1p68...4kgl9l
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      <link rel="stylesheet" href="google.com" />
                      link
                    </td>
                  </tr>
                  <tr class="bg-gray-950 border border-gray-800 hover:bg-gray-900">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                      yin.sats
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      1597107
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      bc1p68...4kgl9l
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      <link rel="stylesheet" href="google.com" />
                      link
                    </td>
                  </tr>
                  <tr class="bg-gray-950 border border-gray-800 hover:bg-gray-900">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                      yin.sats
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      1597107
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      bc1p68...4kgl9l
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      <link rel="stylesheet" href="google.com" />
                      link
                    </td>
                  </tr>
                  <tr class="bg-gray-950 border border-gray-800 hover:bg-gray-900">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                      yin.sats
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      1597107
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      bc1p68...4kgl9l
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      <link rel="stylesheet" href="google.com" />
                      link
                    </td>
                  </tr>
                  <tr class="bg-gray-950 border border-gray-800 hover:bg-gray-900">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                      yin.sats
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      1597107
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      bc1p68...4kgl9l
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      <link rel="stylesheet" href="google.com" />
                      link
                    </td>
                  </tr>
                  <tr class="bg-gray-950 border border-gray-800 hover:bg-gray-900">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                      yin.sats
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      1597107
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      bc1p68...4kgl9l
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      <link rel="stylesheet" href="google.com" />
                      link
                    </td>
                  </tr>
                  <tr class="bg-gray-950 border border-gray-800 hover:bg-gray-900">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                      yin.sats
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      1597107
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      bc1p68...4kgl9l
                    </td>
                    <td class="text-sm text-gray-100 font-light px-6 py-4 whitespace-nowrap">
                      <link rel="stylesheet" href="google.com" />
                      link
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
