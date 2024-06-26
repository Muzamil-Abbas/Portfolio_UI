import React from "react";
import { Image } from "primereact/image";
import dashboardImage from "../../assets/images/workdetails1.png";
import workdetails1 from "../../assets/images/workdetails2.png";
import workdetails2 from "../../assets/images/workdetails3.png";

interface Work {
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
  bottomImages: string[];
}

const WorkDetails: React.FC = () => {
  const work: Work = {
    title: "Designing Dashboards with",
    year: "2020",
    category: "Dashboard, User Experience Design",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: dashboardImage,
    bottomImages: [workdetails1, workdetails2],
  };

  return (
    <section className="py-7 mt-12 max-md:mx-2 lg:px-24 xl:px-44 bg-custom-color max-md:py-8">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 xl:px-52">
        <div>
          <h2 className="text-2xl font-bold pb-2">
            {work.title}{" "}
            <h3 className="text-2xl font-bold">usability in mind</h3>
          </h2>
          <span className="text-base font-semibold bg-rose-400 p-1 rounded-full text-white">
            {work.year}
          </span>
          <span> {work.category}</span>
          <p className="text-gray-700 mt-4">{work.description}</p>
        </div>
        <div className="dashboard-image rounded-lg shadow-lg max-w-full h-auto my-4">
          <Image src={work.image} alt={work.title} />
        </div>
        <div className="my-4">
          <h2 className="text-4xl py-2">Heading 1</h2>
          <h3 className="text-3xl">Heading 2</h3>
          <p className="text-gray-700 mt-4">{work.description}</p>
        </div>
        {work.bottomImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Bottom Image ${index + 1}`}
              className="bottom-image rounded-lg shadow-md max-w-full h-auto "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkDetails;
