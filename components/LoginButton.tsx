import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./LoginButton.module.scss"
import { useState } from "react";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

export interface LoginButtonProps {
  readonly setAddress: (address: string) => void;
}


const LoginButton = (props: LoginButtonProps): JSX.Element => {
  
  const {setAddress} = props

  

  const onClick = async () => {
    console.log(window.ethereum);
    if (typeof window.ethereum !== "undefined") {
      console.log("Metamask is installed!");;;

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);

      const account = accounts[0];
      console.log(account)
      return setAddress(account)
      // const setAddress = account
      // setAddress(account)
    }
  };


  // const onClick = () => {
    // console.log("clicked hi button");
    // loginWithMetamask();
  // };

  // useEffect(() => {
  //   loadBlockchainData()
  // });
  return (
    <Button variant="primary" onClick={onClick} className={styles.button}>
      Check my purchase with Metamask
    </Button>
  );
};

export default LoginButton;
