"use client"
import Sports from "@/components/Sports/Sports";
import CollectionSpotlight from "@/components/collectionSpotlight/CollectionSpotlight";
import { useState } from "react";

interface HomePageProps { }

const HomePage: React.FC<HomePageProps> = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "bg-slate-900" : "bg-[#e7e7e7]"}`}>
      <div className="max-w-[1250px] mx-auto space-y-10">
        <Sports isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <CollectionSpotlight isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default HomePage;
