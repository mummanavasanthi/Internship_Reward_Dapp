import React, { useState } from "react";

function Nav() {
  const [wallet, setWallet] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setWallet(accounts[0]);

      console.log("Connected Wallet:", accounts[0]);
    } catch (error) {
      console.log(error);
      alert("Wallet connection failed");
    }
  };

  return (
    <nav className="lg:max-w-[50%] mx-auto flex items-center px-4 lg:px-0 py-4 lg:py-8 justify-between">
      <div className="flex items-center">
        <h1 className="text-gray-600 font-bold text-2xl font-sans lg:text-4xl">
          Nest_Reward
        </h1>
      </div>

      <div className="flex items-center">
        <button className="button" onClick={connectWallet}>
          {wallet
            ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}`
            : "Connect Wallet"}
        </button>
      </div>
    </nav>
  );
}

export default Nav;