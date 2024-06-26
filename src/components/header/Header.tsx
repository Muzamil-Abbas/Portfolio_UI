// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { classNames } from "primereact/utils";

// const Header: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menuVisible, setMenuVisible] = useState(false);

//   // Define menu items with commands
//   const items = [
//     {
//       label: "Blog",
//       command: () => handleNavigation("/blog"),
//     },
//     {
//       label: "Works",
//       command: () => handleNavigation("/works"),
//     },
//     {
//       label: "Works Detail",
//       command: () => handleNavigation("/workdetails"),
//     },
//     {
//       label: "Contact",
//       command: () => handleNavigation("/contact"),
//     },
//   ];

//   const handleNavigation = (path: string) => {
//     navigate(path);
//     setMenuVisible(false);
//   };

//   return (
//     <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="container mx-auto flex justify-between items-center py-4 px-4">
//         <div className="text-xl font-bold cursor-pointer">
//           <span onClick={() => handleNavigation("/")}>My Portfolio</span>
//         </div>

//         <div className="block lg:hidden">
//           <button
//             onClick={() => setMenuVisible(!menuVisible)}
//             className="text-gray-800 focus:outline-none"
//           >
//             <i
//               className={classNames("pi pi-bars", { "pi-times": menuVisible })}
//             ></i>
//           </button>
//         </div>

//         {/* Navigation Links (hidden on small screens by default) */}
//         <div
//           className={classNames("lg:flex lg:space-x-4 items-center", {
//             hidden: !menuVisible,
//             "lg:block": menuVisible,
//           })}
//         >
//           {items.map((item, index) => (
//             <span
//               key={index}
//               onClick={item.command}
//               className={`block lg:inline-block text-gray-800 cursor-pointer transition duration-300 ease-in-out ${
//                 location.pathname === item.label.toLowerCase()
//                   ? "text-green-500"
//                   : "text-lime-600"
//               }`}
//             >
//               {item.label}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { classNames } from "primereact/utils";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuVisible, setMenuVisible] = useState(false);

  // Define menu items with commands
  const items = [
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Works",
      path: "/works",
    },
    {
      label: "Works Detail",
      path: "/workdetails",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setMenuVisible(false);
  };

  return (
    <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-xl font-bold cursor-pointer text-slate-700">
          <span onClick={() => handleNavigation("/")}>My Portfolio</span>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setMenuVisible(!menuVisible)}
            className="text-gray-800 focus:outline-none"
          >
            <i
              className={classNames("pi pi-bars", { "pi-times": menuVisible })}
            ></i>
          </button>
        </div>

        {/* Navigation Links (hidden on small screens by default) */}
        <div
          className={classNames("lg:flex lg:space-x-4 items-center", {
            hidden: !menuVisible,
            "lg:block": menuVisible,
          })}
        >
          {items.map((item, index) => (
            <span
              key={index}
              onClick={() => handleNavigation(item.path)}
              className={classNames(
                "block lg:inline-block text-gray-800 cursor-pointer transition duration-300 ease-in-out",
                {
                  "text-red-500": location.pathname === item.path,
                  "text-lime-600": location.pathname !== item.path,
                }
              )}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
