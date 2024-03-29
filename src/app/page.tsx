import Sports from "@/components/Sports/Sports";
import CollectionSpotlight from "@/components/collectionSpotlight/CollectionSpotlight";

const HomePage = () => {
  return (
    <div className="w-[1250px] mx-auto space-y-10">
      <Sports />
      <CollectionSpotlight />
    </div>
  );
};

export default HomePage;
