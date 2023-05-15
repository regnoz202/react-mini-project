import React from "react";
import "flowbite";

export default function GridMenu(props) {
  return (
    <div className={props.class}>
<div className="mx-4 mb-2">
      <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All categories
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Action
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Anime
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Comedy
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Horror
        </button>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img
            class="h-auto cursor-pointer max-w-full rounded-lg"
            src="https://img.freepik.com/premium-psd/retro-film-photo-effect_514605-462.jpg?w=740"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto cursor-pointer max-w-full rounded-lg"
            src="https://img.freepik.com/free-psd/acting-agency-template-poster_23-2148797784.jpg?w=740&t=st=1684123153~exp=1684123753~hmac=d4ad696d6047fc51d6353cf7a468db63347c1d7ffadae1a6a8299933519f0003"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto cursor-pointer max-w-full rounded-lg"
            src="https://img.freepik.com/free-psd/creative-film-poster-template_23-2149839039.jpg?w=740&t=st=1684123105~exp=1684123705~hmac=4b397d04012981f6448ec8d0c46eadef733b2cc187bbc52a821a36cbcee718ad"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto cursor-pointer max-w-full rounded-lg"
            src="https://img.freepik.com/free-psd/music-album-poster-template-with-dust-effect-photo_23-2148742110.jpg?w=740&t=st=1684123252~exp=1684123852~hmac=0ecd010bc9020815c57d8478edb6530f2c39cde3d25fadc0d12afaed59ae7a1e"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto cursor-pointer max-w-full rounded-lg"
            src="https://img.freepik.com/free-psd/poster-capture-yourself-theme_23-2148686451.jpg?w=740&t=st=1684123365~exp=1684123965~hmac=ba40f4e63dc63e8deffcb9bbb6026f18681478d7643133592234d495b9b12125"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto cursor-pointer max-w-full rounded-lg"
            src="https://img.freepik.com/free-psd/vacation-concept-flyer-template_23-2148626747.jpg?w=740&t=st=1684123515~exp=1684124115~hmac=c2570153e14900a84bf7ca837efe90fb6e01ab7008594ee589fa08c512af98b3"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto cursor-pointer max-w-full rounded-lg"
            src="https://img.freepik.com/free-psd/urban-travels-poster-template-design_23-2148951497.jpg?w=740&t=st=1684124007~exp=1684124607~hmac=91da6ca04667aa88606bcbe00e1043fd75e424cd05586b110bb129d7cf7a9f18"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto cursor-pointer max-w-full rounded-lg"
            src="https://img.freepik.com/free-psd/poster-new-fashion-collection_23-2148716074.jpg?w=740&t=st=1684124063~exp=1684124663~hmac=ad7de29d57b62ab481139993b9f4ca860aa8065d0fc6dde856fb688f5cead52d"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto cursor-pointer max-w-full rounded-lg"
            src="https://img.freepik.com/free-psd/tang-choreography-flyer-print-template_23-2148580120.jpg?w=740&t=st=1684124322~exp=1684124922~hmac=7cddde78fc81bea6cfad609635cb3ffe193b13c3c438bc2046e6e86f643e18a9"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto cursor-pointer max-w-full rounded-lg"
            src="https://img.freepik.com/free-psd/vacation-concept-poster-template_23-2148626746.jpg?w=740&t=st=1684124376~exp=1684124976~hmac=fae0647fe26245ede396f1e4456672335d5d4faa889a00c605f55f5f6ca2c6f9"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto cursor-pointer max-w-full rounded-lg"
            src="https://img.freepik.com/free-vector/realistic-horror-movie-poster_23-2149721019.jpg?w=740&t=st=1684124456~exp=1684125056~hmac=2270fdc72d27b4792a3ad5501df3f27f2ed55e8348e143cd895a93f9c967d673"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto cursor-pointer max-w-full rounded-lg"
            src="https://img.freepik.com/premium-psd/music-album-poster-template-with-photo-dust-effect_23-2148742111.jpg?w=740"
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
    
  );
}
