import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slidesdata = [
  {
    id: 1,
    title: "Made with Love, Topped with Flavor",
    image: "/images/pepsausage.jpg",
  },
  {
    id: 2,
    title: "Deliciously Crafted, Fresh Ingredients",
    image: "/images/firewood.jpg",
  },
  {
    id: 3,
    title: "The Best Pizza To Share With Your Family",
    image: "/images/pizzafortwo.jpg",
  },
];

function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === slidesdata.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {slidesdata[currentSlide].title}
        </h1>
        <Link to="/menu">
        <button className="bg-red-500 text-white py-4 px-8 mb-8">Order Now</button>
        </Link>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-75 flex-1 relative">
        <img
          src={slidesdata[currentSlide].image}
          alt="pizza images"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Slides