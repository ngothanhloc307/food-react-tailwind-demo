import React from "react";

function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 py-4">Sun's Out,BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="absolute border-white bg-white text-black mx-2 bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/photos/buger-and-fries-picture-id145841934?b=1&k=20&m=145841934&s=170667a&w=0&h=hU94jXfj2Kv6bMQI_UFSwxNeMUFOUch9eZOlgDtUIPM="
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 py-4">New Restaurant</p>
          <p className="px-2">Added Daily</p>
          <button className="absolute border-white bg-white text-black mx-2 bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGZvb2QlMjByZXN0YXVyYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 py-4">
            We Deleiver Desserts Too
          </p>
          <p className="px-2">Tasty Treats</p>
          <button className="absolute border-white bg-white text-black mx-2 bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc5fHxmb29kJTIwcmVzdGF1cmFudCUyMGNoaW5lc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
      </div>
    </div>
  );
}

export default HeadlineCards;
