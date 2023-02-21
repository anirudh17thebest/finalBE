import logo from "../../images/cryptohub.png";
import { connectWallet } from "../Adulam";
import { truncate, useGlobalState } from "../store/index";
import { Link } from "react-router-dom";

const NFTHeader = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
        <Link to="/">
          <img className="w-48 cursor-pointer" src={logo} />
        </Link>
        {/* <span className="text-white text-2xl ml-2">NFThub</span> */}
      </div>
      <ul
        className="md:flex-[0.5] text-white 
        md:flex hidden list-none flex-row 
        justify-between items-center flex-initial"
      ></ul>

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white 
        bg-[#e32970] hover:bg-[#bd255f]  p-2
        rounded-full cursor-pointer"
        >
          {truncate(connectedAccount, 5, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white 
        bg-[#e32970] hover:bg-[#bd255f] p-2
        rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  );
};

export default NFTHeader;
