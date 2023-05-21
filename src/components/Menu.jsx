import React from "react";
import "flowbite";

export default function Menu(props) {
  return (
    <div className={props.className}>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <div className="z-40">
        <div className="flex flex-wrap">
          <div className="w-44 cursor-pointer m-1 flex-initial bg-red-300 p-6 mx-4 rounded-md text-center shadow-lg hover:bg-red-700">
            <i className="fa-solid fa-film fa-xl"></i>
          </div>
          <div className="w-44 cursor-pointer m-1 flex-initial bg-red-300 p-6 mx-4 rounded-md text-center shadow-lg hover:bg-red-700">
          <i className="fa-solid fa-ticket fa-xl"></i>
          </div>
          <div className="w-44 cursor-pointer m-1 flex-initial bg-red-300 p-6 mx-4 rounded-md text-center shadow-lg hover:bg-red-700">
          <i className="fa-solid fa-utensils fa-xl"></i>
          </div>
        </div>
      </div>

      <div className="word w-full h-64 mt-14"></div>
    </div>
  );
}
