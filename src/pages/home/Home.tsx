import React from "react";
import Hero from "../../components/home/Hero";
import RecentPosts from "../../components//home/RecentPosts";
import FeaturedWorks from "../../components/home/FeaturedWorks";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <RecentPosts />
      <FeaturedWorks />
    </div>
  );
};

export default Home;
