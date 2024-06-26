import React from "react";
import { Card } from "primereact/card";

// Define the type for a blog post
interface BlogPost {
  title: string;
  date: string;
  category: string;
  description: string;
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      category: "Express, Handlebars",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      category: "Express, Handlebars",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      category: "Express, Handlebars",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      category: "Express, Handlebars",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <section className="py-7 mt-12 max-md:py-4 bg-white">
      <div className="container mx-auto">
        <div className="mx-2 py-2 max-md:py-0">
          <h1 className="text-4xl font-bold mx-36 max-md:mx-4 ">Blog</h1>
        </div>
        <div className="flex flex-wrap">
          {posts.map((post, index) => (
            <div
              key={index}
              className="w-full md:w-1/1 mx-20 max-md:mx-0 xl:px-7 max-md:px-4"
            >
              <Card className="shadow-none border-none">
                <h2 className="text-2xl font-semibold py-3 text-gray-900">
                  {post.title}
                </h2>
                <span>{post.date} | </span>
                <span className="text-gray-500"> {post.category}</span>
                <p className="mt-2 py-2">{post.description}</p>
              </Card>
              <hr className="border-gray-300 my-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
