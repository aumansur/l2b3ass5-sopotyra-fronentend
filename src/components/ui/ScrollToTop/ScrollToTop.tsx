// import { useState, useEffect } from "react";
// import { BiUpArrow } from "react-icons/bi";
// import { MdKeyboardArrowUp } from "react-icons/md";

// const ScrollToTopButton = () => {
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       {showButton && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-4 right-4 p-3 bg-slate-300 text-white rounded-full shadow-lg hover:bg-slate-500 transition-colors duration-300"
//           aria-label="Scroll to Top">
//           <MdKeyboardArrowUp />
//         </button>
//       )}
//     </>
//   );
// };

// export default ScrollToTopButton;
