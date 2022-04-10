import Head from "next/head";
import Image from "next/image";

import styles from "./index.module.scss";
import { useEffect, useState } from "react";

// components
import InstallMetamaskButton from "../components/InstallMetamaskButton";
import LoginButton from "../components/LoginButton";
import AddDongleButton from "../components/AddDongleButton";
import AddPolygonButton from "../components/AddPolygonButton";
import CheckWithMetamask from "../components/CheckWithMetamask";

// constants
import { polygonChainIdString } from "../constants/eth.constant";

import Web3 from "web3";

export interface IndexPageProps {}

const IndexPage = (Props: IndexPageProps) => {
  const {} = Props;
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  const [isDongleAdded, setIsDongleAdded] = useState(false);
  const [address, setAddress] = useState("");
  const [network, setNetwork] = useState("");
  const isLoggedIntoMetamask = !!address;
  const isCurrentNetworkPolygon = network === "Polygon Mainnet";
  const isReadyToCheck =
    isMetamaskInstalled && isLoggedIntoMetamask && isCurrentNetworkPolygon;
  const isChainIdPolygon = (chainId: string) => {
    return Web3.utils.hexToNumberString(chainId) === polygonChainIdString
      ? true
      : false;
  };

  useEffect(() => {
    window.ethereum !== undefined && setIsMetamaskInstalled(true);

    const checkMetamaskInfo = async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const chainId = await window.ethereum.request({ method: "eth_chainId" });

      console.log(accounts, chainId);
      console.log(isChainIdPolygon(chainId));

      setAddress(accounts[0]);
      setNetwork(
        isChainIdPolygon(chainId) ? "Polygon Mainnet" : "Chnage your network"
      );
    };
    window.ethereum !== undefined && checkMetamaskInfo();


  }, []);

  useEffect(() => {
    //Detect account and network change
    address !== "" &&
      window.ethereum.on("accountsChanged", (accounts?: any) => {
        setAddress(accounts[0]);
      });
  }, [address]);

  useEffect(() => {
    // TODO: Remove listener if needed
    network !== "" && window.ethereum.on("chainChanged", (_chainId: string) => {
      window.location.reload();
    });
  }, [network])
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Dongle Space</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logoBox}>
          <img
            src="/dongle_logo_word.png"
            alt="dongle logo"
            width={1405}
            height={401}
          ></img>
        </div>
        <h1 className={styles.title}>Be ready to enter Dongle Spaces</h1>
        <InstallMetamaskButton disabled={isMetamaskInstalled} />
        <LoginButton
          address={address}
          setAddress={setAddress}
          disabled={isLoggedIntoMetamask}
        />
        <AddPolygonButton disabled={isCurrentNetworkPolygon} />
        <CheckWithMetamask disabled={!isReadyToCheck} />
        <span>hi</span>
        <AddDongleButton />
      </main>
      <footer className={styles.footer}>
        <p>
          Dongle Space is a Decentralized social media featuring ownership,
          uncensorship, privacy and anonymity. For any inquiries, please contact
          us at contact@dongle.space
        </p>
      </footer>
    </div>
  );
};

export default IndexPage;
