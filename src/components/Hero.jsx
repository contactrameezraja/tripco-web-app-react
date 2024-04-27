import { useState } from "react";
import { FaArrowRight, FaCalendar, FaSearch } from "react-icons/fa";
import { FaLocationPin, FaPerson } from "react-icons/fa6";

export default function Hero() {
  const [active, setActive] = useState("Hostelry");

  return (
    <div className="container mx-auto px-6 pt-12">
      <div className=" relative rounded-2xl lg:pb-32 lg:h-[70vh]">
        <div className="overflow-hidden relative h-full w-full">
          <img
            src="/bg2.jpg"
            alt=""
            className="lg:absolute top-0 w-full lg:h-[70vh] h-[30rem] object-cover rounded-2xl"
          />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 h-fit">
          <h1 className="text-white text-4xl lg:text-6xl flex justify-center mt-20 lg:mt-40 font-bold lg:w-4/5 mx-auto text-center">
            Explore the whole world and enjoy its beauty
          </h1>
          <p className="flex justify-center lg:text-2xl text-white mt-8 px-6 text-center">
            FInd and write about your experiences around the world
          </p>
        </div>
        <div className="lg:w-4/5 mx-auto lg:h-[70vh] h-full">
          <div className="bg-white px-8 py-8 rounded-[10px] lg:absolute bottom-16 lg:w-4/5 shadow-lg">
            <div className="lg:flex gap-4 gap-x-2">
              <div className="flex flex-wrap gap-x-16 w-full">
                <button
                  onClick={() => setActive("Hostelry")}
                  className={` rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${
                    active === "Hostelry"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-light"
                  }`}
                >
                  Hostelry
                </button>
                <button
                  onClick={() => setActive("Flights")}
                  className={` rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${
                    active === "Flights"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-light"
                  }`}
                >
                  Flights
                </button>
                <button
                  onClick={() => setActive("Bus & Shuttle")}
                  className={` rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${
                    active === "Bus & Shuttle"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-light"
                  }`}
                >
                  Bus & Shuttle
                </button>
                <button
                  onClick={() => setActive("Cars")}
                  className={` rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${
                    active === "Cars"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-light"
                  }`}
                >
                  Cars
                </button>
              </div>
              <button className="whitespace-pre flex items-center gap-2 bg-transparent outline-none border-none text-light">
                Last Searching
                <FaArrowRight />
              </button>
            </div>
            <div className="flex flex-wrap items-end gap-4 justify-between border-t border-solid py-4 w-full">
              <div>
                <p className="text-light text-lg">Destination</p>
                <div className="relative h-10 w-40 flex items-center">
                  <FaLocationPin
                    size={12}
                    className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                  />
                  <input
                    type="text"
                    placeholder="Bali, Indonesia"
                    className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none"
                  />
                </div>
              </div>
              <div className="relative h-10 w-40 flex items-center">
                <FaCalendar
                  size={12}
                  className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                />
                <input
                  type="date"
                  defaultValue="2022-02-12"
                  className="bg-light1  rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none"
                />
              </div>
              <div className="relative h-10 w-40 flex items-center">
                <FaCalendar
                  size={12}
                  className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                />
                <input
                  type="date"
                  defaultValue="2022-03-12"
                  className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none"
                />
              </div>
              <div className="relative h-10 w-40 flex items-center">
                <FaPerson
                  size={12}
                  className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                />
                <input
                  type="text"
                  placeholder="1 Room, 2 Guest"
                  className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none"
                />
              </div>
              <div className="text-white h-10 w-40 flex items-center justify-center ">
                <button className="rounded-lg bg-primary placeholder:text-white px-2 outline-none h-full w-full flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-bg shadow">
                  <FaSearch /> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
