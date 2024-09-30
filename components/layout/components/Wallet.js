import styled from "styled-components";
import { ethers } from "ethers";
import { useState } from "react";

// Sepolia Network Configuration
const networks = {
  sepolia: {
    chainId: `0x${Number(11155111).toString(16)}`, // Converts 11155111 to hexadecimal
    chainName: "Sepolia Testnet",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH", // Sepolia uses ETH as the native currency
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.infura.io/v3/09f799bc191341f7b809f509e453f6f6"], // Replace with your Infura project ID
    blockExplorerUrls: ["https://sepolia.etherscan.io/"],
  },
};

const Wallet = () => {
  const [address, setAddress] = useState(''); // Corrected variable name
  const [balance, setBalance] = useState('');

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

        const network = await provider.getNetwork();

        if (network.chainId !== 11155111) {  // Chain ID for Sepolia Testnet is 11155111
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: `0x${Number(11155111).toString(16)}`, // Hexadecimal value for 11155111 (Sepolia Testnet)
              chainName: "Sepolia Testnet",
              nativeCurrency: {
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18,
              },
              rpcUrls: ["https://sepolia.infura.io/v3/09f799bc191341f7b809f509e453f6f6"], // Replace with your Infura project ID
              blockExplorerUrls: ["https://sepolia.etherscan.io/"],
            }]
          });
        }

        const account = await provider.getSigner();
        const Address = await account.getAddress();
        setAddress(Address); // Set the connected address in the state
        const Balance = ethers.utils.formatEther(await provider.getBalance(Address));
        setBalance(Balance);
    } 
  };

  return (
    <ConnectWalletWrapper onClick={connectWallet}>
      {address == '' ? <Address>Connect Wallet</Address> : <Address>{address.slice(0,6)}...{address.slice(39)}</Address>}
      {balance == '' ? <Balance></Balance> : <Balance>SepoliaETH : {balance.slice(0,6)}</Balance>}

    </ConnectWalletWrapper>
  );
};

const ConnectWalletWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 5px 9px;
  height: 100%;
  color: ${(props) => props.theme.color};
  border-radius: 10px;
  margin-right: 15px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: small;
  cursor: pointer;
`;
const Address = styled.h2`
background-color: ${(props) => props.theme.bgDiv};
height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px 0 5px;
    border-radius: 10px;
    
`

const Balance = styled.h2`
background-color: ${(props) => props.theme.bgDiv};
height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px 0 5px;
    border-radius: 10px;
    
`


export default Wallet;
