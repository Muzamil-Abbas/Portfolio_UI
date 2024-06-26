import React from "react";

const PostComponent: React.FC = () => {
  return (
    <section className="py-5 bg-sky-100 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mx-2 sm:mx-6 px-10 sm:px-28 pb-5">
          <span className="text-lg sm:text-left text-center w-full sm:w-auto">
            Recent posts
          </span>
          <span className="hidden sm:block text-sm text-blue-300">
            View all
          </span>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="xl:p-5 p-3 max-w-md bg-white mb-4 md:mb-0 md:mr-7 md:w-1/2 rounded">
            <h3 className="xl:text-2xl text-xl font-semibold mb-4">
              Making a design system from scratch
            </h3>
            <p className="text-gray-700 mb-4">12 Feb 2020 - Design, Pattern</p>
            <p className="text-gray-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="xl:p-5 p-3 max-w-md bg-white md:w-1/2 rounded">
            <h3 className="xl:text-2xl text-xl font-semibold mb-4">
              Creating pixel perfect icons in Figma
            </h3>
            <p className="text-gray-700 mb-4">
              12 Feb 2020 - Figma, Icon Design
            </p>
            <p className="text-gray-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostComponent;
