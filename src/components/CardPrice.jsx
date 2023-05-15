import React from "react";

export default function CardPrice(props) {
  return (
    // Card 1
    <div className={props.class}>
      <div class="m-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src="https://img.freepik.com/free-photo/cinema-seats-still-life_23-2148115823.jpg?w=900&t=st=1684128804~exp=1684129404~hmac=63ebd93dd51c3b8324837c9a42b58a819792ae72a27dd0295439aedcda46abf9"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Standart
            </h5>
            <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id porro, optio ullam voluptates neque explicabo dolores doloremque, corporis laborum tempore ipsa? Nostrum, molestiae nam quaerat similique at dolorem recusandae error!</p>
          </a>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              $15
            </span>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              BUY NOW
            </a>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div class="m-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src="https://img.freepik.com/free-photo/dark-vip-cinema-studio-still-life_23-2149500595.jpg?w=900&t=st=1684129289~exp=1684129889~hmac=5246f36ca18e7eaf2d1224c18510275324dbdaf734a922f584ae48f7feec10cb"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Premium
            </h5>
            <p className="m-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus mollitia illo libero quasi eveniet, numquam nesciunt tempora explicabo minus magni iste fugiat sapiente a id fuga cum blanditiis cumque? lorem ipsum</p>
          </a>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              $25
            </span>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              BUY NOW
            </a>
          </div>
        </div>
      </div>
      <div class="m-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src="https://img.freepik.com/free-photo/dark-vip-cinema-studio-still-life_23-2149500604.jpg?w=900&t=st=1684129325~exp=1684129925~hmac=a56cd4413788e304adde92c6a21e95797d62972a70f42283f79f612f20d90c3a"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              VIP
            </h5>
            <p className="m-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eum quibusdam, quo dolorem alias at, rerum nihil cumque, voluptatem est itaque facilis tenetur labore nostrum odit eligendi debitis dolorum! Odit. lorem ipsum</p>
          </a>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              $50
            </span>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              BUY NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
