import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./LoginButton.module.scss";
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
  const { setAddress } = props;

  const onClick = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      return setAddress(account);
    }
  };

  return (
    <Button variant="light" onClick={onClick} className={styles.button}>
      Check my purchase with Metamask
    </Button>
  );
};

export default LoginButton;
