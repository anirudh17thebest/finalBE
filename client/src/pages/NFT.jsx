import { useEffect } from "react";
import { useGlobalState } from "../store/index";
import { isWallectConnected, loadNfts } from "../Adulam";
import NFTHeader from "../components/NFTHeader";
import NFTHero from "../components/NFTHero";
import NFTArtworks from "../components/NFTArtworks";
import NFTFooter from "../components/NFTFooter";
import NFTAlerts from "../components/NFTAlerts";
import NFTLoading from "../components/NFTLoading";

const NFT = () => {
  const [nfts] = useGlobalState("nfts");

  useEffect(async () => {
    await isWallectConnected().then(() => console.log("Blockchain Loaded"));
    await loadNfts();
  }, []);
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <NFTHeader />
        <NFTHero />
      </div>
      <NFTArtworks artworks={nfts} />
      <NFTFooter />
      <NFTLoading />
      <NFTAlerts />
    </div>
  );
};

export default NFT;
