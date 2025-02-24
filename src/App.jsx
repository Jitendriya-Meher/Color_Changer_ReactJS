import { useState } from "react";

const App = () => {

  const colorsArr = [
    {
      color: "red",
      css: "bg-red-300",
    },
    {
      color: "blue",
      css: "bg-blue-300",
    },
    {
      color: "green",
      css: "bg-green-300",
    },
    {
      color: "yellow",
      css: "bg-yellow-300",
    },
    {
      color: "orange",
      css: "bg-orange-300",
    },
    {
      color: "black",
      css: "bg-black",
    },
    {
      color: "white",
      css: "bg-white",
    },
    {
      color: "#12ab89",
      css: "bg-[#12ab89]",
    },
    {
      color: "#12ab8955",
      css: "bg-[#12ab8955]",
    },
    {
      color: "rgb(56,65,67)",
      css: "bg-[rgb(56,65,67)]",
    },
    {
      color: "rgba(56,65,67,0.5)",
      css: "bg-[rgba(56,65,67,0.5)]",
    },
  ];

  const [color, setColor] = useState("");

  return (
    <div
      className={`${color} p-10 transition-all duration-500 h-screen relative`}
    >
      <h1 className=" text-center text-3xl font-semibold p-5 bg-white rounded-full border-2 border-black">
        Color Changer
      </h1>
      <div className=" p-10 flex flex-wrap justify-center items-center flex-1">
        {colorsArr.map((color, i) => (
          <button
            className=" bg-white p-2 rounded-2xl border-2 border-black m-2"
            key={i}
            onClick={() => setColor(color.css)}
          >
            {color.color}
          </button>
        ))}
      </div>
      <p className=" absolute bottom-2 right-2 text-sm">
        Crated By Jitendriya Meher
      </p>
    </div>
  );
};

export default App;
