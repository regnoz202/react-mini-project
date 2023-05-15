import React from "react";
import "flowbite";

export default function Menu(props) {
  return (
    <div className={props.class}>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <div class="z-40">
        <div className="flex">
          <div className="w-44 cursor-pointer flex-initial bg-red-300 p-6 mx-4 rounded-md text-center shadow-lg hover:bg-red-700">
            <i class="fa-solid fa-film fa-xl"></i>
          </div>
          <div className="w-44 cursor-pointer flex-initial bg-red-300 p-6 mx-4 rounded-md text-center shadow-lg hover:bg-red-700">
          <i class="fa-solid fa-ticket fa-xl"></i>
          </div>
          <div className="w-44 cursor-pointer flex-initial bg-red-300 p-6 mx-4 rounded-md text-center shadow-lg hover:bg-red-700">
          <i class="fa-solid fa-utensils fa-xl"></i>
          </div>
        </div>
      </div>

      <div className="word w-full h-64 mt-14"></div>
    </div>
  );
}
