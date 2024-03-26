import Sports from "@/components/Sports/Sports";
import CollectionSpotlight from "@/components/collectionSpotlight/CollectionSpotlight";

const HomePage = () => {
  return (
    <div className="w-[1250px] mx-auto">

      <Sports />
      <CollectionSpotlight />
    </div>
  );
};

export default HomePage;
