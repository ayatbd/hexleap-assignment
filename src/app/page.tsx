"use client"
import Sports from "@/components/Sports/Sports";
import CollectionSpotlight from "@/components/collectionSpotlight/CollectionSpotlight";
import { useState } from "react";

const HomePage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="max-w-[1250px] mx-auto space-y-10">
      <Sports isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <CollectionSpotlight isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export default HomePage;
