import React from "react";
import dashboardImage from "../../assets/images/dashboard.png";
import vibrantPortraitsImage from "../../assets/images/vibrant_portraits.png";
import malayalamTypeImage from "../../assets/images/malayalam_type.png";
import componentsImage from "../../assets/images/components-image.png";

// Define the type for a work item
interface WorkItem {
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
}

const Works: React.FC = () => {
  const works: WorkItem[] = [
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
    {
      title: "Components",
      year: "2018",
      category: "Components, Design",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: componentsImage,
    },
  ];

  return (
    <section className="py-7 mt-12 mx-32 px-2 max-md:py-4 max-md:mx-0 bg-custom-color">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 max-md:mb-4 md:px-16 max-md:px-0 max-md:mx-4">
          Works
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="xl:mx-6 max-md:mx-5 md:px-4 rounded w-full md:w-auto flex flex-col md:flex-row items-center relative"
            >
              <div className="md:flex-shrink-0">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-auto h-64 object-cover rounded mx-0 mb-4 md:mb-0 md:mr-4 max-md:h-auto xl:w-auto"
                />
              </div>
              <div className="flex flex-col justify-center xl:px-4 max-md:px-4">
                <h3 className="xl:text-4xl max-md:text-2xl font-semibold">
                  {work.title}
                </h3>
                <div className="inline-flex space-x-2 py-3 items-center">
                  <span className="bg-slate-900 text-xl text-slate-50 rounded-full px-3 text-center">
                    {work.year}
                  </span>
                  <span className="text-xl py-4 text-gray-500">
                    {work.category}
                  </span>
                </div>
                <p className="text-gray-700 py-4 text-xl">{work.description}</p>
              </div>
              {index !== works.length - 1 && (
                <hr className="xl:mx-6 absolute top-full max-md:left-0 w-11/12 max-md:w-full border-slate-300 mt-4" />
              )}
            </div>
          ))}
        </div>
        <hr className="ml-28 mr-7 border-slate-300 mt-4 max-md:mx-4 max-md:w-11/12" />
      </div>
    </section>
  );
};

export default Works;
