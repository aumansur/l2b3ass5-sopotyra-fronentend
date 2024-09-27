import React from "react";
import { Carousel } from "antd";
import { NavLink } from "react-router-dom";
const images = [
  "https://i.ibb.co.com/Vts3yGz/360-F-329864582-VSjf-Llhb-Cc-Fx-HPZWboaucigq-N66fth-NE.jpg",
  "https://i.ibb.co.com/ZSwx9xq/360-F-273100058-Pp-Dt-FDEAZ40x-ZCKs1-OJq-X1m7-CIvue-Odt.jpg",
  "https://i.ibb.co.com/RhKg20C/360-F-635369795-Sjrig-Yep-QSDi-ALAl-PQTZ5-Ox0-DItz-Cvy-E.jpg",
];

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "full",

  height: "10vh",
  //   background: "transparent",
  background: "linear-gradient(to top, var(--tw-gradient-stops))",

  textAlign: "center",
};

const Banner: React.FC = () => (
  <Carousel effect="scrollx" swipe arrows infinite={true} autoplay>
    {images.map((image, index) => (
      <div style={contentStyle} key={index} className="relative rounded-lg ">
        <img
          src={image}
          alt={`Slide ${index + 1}`}
          className="w-full h-[75vh] object-cover rounded-lg"
        />
        <div className="absolute inset-0  bg-gradient-to-t from-black to-transparent  opacity-70"></div>
        <div className="absolute text-white inset-0 flex flex-col gap-8 items-center justify-center">
          <h3 className=" text-center text-white text-6xl px-28 font-bold">
            Where Sportsmanship Meets Top Facilities
          </h3>
          <button className="my-primary-btn-outline">
            <NavLink className="hover:text-white text-sm" to="/offered">
              Book Now
            </NavLink>
          </button>
        </div>
      </div>
    ))}
  </Carousel>
);

export default Banner;
