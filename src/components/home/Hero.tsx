import React from "react";
import { Button } from "primereact/button";
import heroImage from "../../assets/images/HeroImage.png";

const Hero: React.FC = () => {
  return (
    <section className="py-16 mt-12 bg-custom-color">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly">
        {/* Image (Left Side on Desktop, Top on Mobile) */}
        <div className="max-w-xs mb-6 md:mb-0 md:order-2 md:ml-6">
          <img
            src={heroImage}
            alt="John's Photo"
            className="rounded-full mx-auto md:mx-0"
            style={{ maxWidth: "250px" }}
          />
        </div>

        {/* Text Content (Right Side) */}
        <div className="max-w-lg md:order-1 text-center md:text-left ">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I am John,
            <br />
            <span className="block md:inline">Creative </span>
            <span className="block md:inline">Technologist</span>
          </h1>
          <p className="mb-4 xl:px-0 px-3 ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          {/* Download Button */}
          <Button
            label="Download Resume"
            className="p-button-round p-2"
            style={{ backgroundColor: "#FF6464", color: "white" }}
            onClick={() => {
              alert("Downloading resume...");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
