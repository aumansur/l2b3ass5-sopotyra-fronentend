import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import imag1 from '../../../assets/images/man.jpeg';

const testimonials = [
  {
    name: "John Doe",
    feedback: "Our startup switched to work from home due to the virus. Butterfly helped us provide laptops to our entire staff.",
    date: "06-15-20",
    image: imag1,
    title: "Remote Work Setup",
  },
  {
    name: "Jane Smith",
    feedback: "I rented a camera from Butterfly for my camping trip on the new years. The product was of the best quality and properly sanitized. I was able to capture all the memories.",
    date: "12-29-19",
    image: "https://avatars.githubusercontent.com/u/111014373?s=400&u=ba39b33fa6e1dae3e5e46cb00eb9c986b03a1439&v=4",
    title: "Camping Memories",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 py-10 px-4 gap-8 relative">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-[#00725A] mb-8">
        What Our Clients Say
      </h2>

      {/* Testimonial Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
        {/* Left Section - Text Review */}
        <div className="relative bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
          <FaQuoteLeft className="text-3xl text-[#00725A] absolute top-4 left-4" />
          <div className="mt-8">
            <p className="text-gray-700 mb-4">{testimonials[current].feedback}</p>
            <p className="font-semibold text-gray-900">
              {testimonials[current].name}
            </p>
          </div>

          <div className="absolute flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4">
            <button
              onClick={prevTestimonial}
              className="text-[#00725A] hover:text-orange-600 transition-colors"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="text-[#00725A] hover:text-orange-600 transition-colors"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Section - Image and Details */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2 flex items-center justify-center">
          <div>
            <img
              src={testimonials[current].image}
              alt={testimonials[current].title}
              className="rounded-lg w-full h-56 object-cover border-4 border-[#00725A]"
            />
            <p className="text-center font-medium text-[#00725A] mt-4">
              {testimonials[current].title}
            </p>
            <p className="text-center text-sm text-gray-600 mt-2">
              - {testimonials[current].name}, {testimonials[current].date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
