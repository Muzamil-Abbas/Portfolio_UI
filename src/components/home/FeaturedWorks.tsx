import React from "react";
import dashboardImage from "../../assets/images/dashboard.png";
import vibrantPortraitsImage from "../../assets/images/vibrant_portraits.png";
import malayalamTypeImage from "../../assets/images/malayalam_type.png";

const works = [
  {
    title: "Designing Dashboards",
    year: "2020",
    category: "Dashboard",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: dashboardImage,
  },
  {
    title: "Vibrant Portraits of 2020",
    year: "2018",
    category: "Illustration",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: vibrantPortraitsImage,
  },
  {
    title: "36 Days of Malayalam type",
    year: "2018",
    category: "Typography",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: malayalamTypeImage,
  },
];

const FeaturedWorks: React.FC = () => {
  return (
    <section className="py-16 max-md:py-4 bg-custom-color">
      <div className="container mx-auto items-center">
        <h2 className="text-2xl font-bold mb-6 max-md:mb-4 mx-6 md:px-28 max-md:text-center ">
          Featured works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="xl:mx-6 max-md:mx-5 md:px-28 rounded w-full md:w-auto flex flex-col md:flex-row items-center relative "
            >
              <div className="md:flex-shrink-0">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full xl:h-52 sm:w-60 max-md:h-auto object-cover rounded mx-2 mb-4 md:mb-0 md:mr-4"
                />
              </div>
              <div className="flex flex-col justify-center xl:px-4 max-md:px-4">
                <h3 className="xl:text-4xl max-md:text-2xl font-semibold  ">
                  {work.title}
                </h3>
                <div className="inline-flex space-x-2 py-5 items-center">
                  <span className="bg-slate-900 text-xl text-slate-50 rounded-full px-3 text-center">
                    {work.year}
                  </span>
                  <span className="text-xl text-gray-500">{work.category}</span>
                </div>
                <p className="text-gray-700 md:pr-8">{work.description}</p>
              </div>
              <hr className="xl:mx-6 absolute top-full left-16  max-md:left-0 w-9/12 max-md:w-full border-slate-300 mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
