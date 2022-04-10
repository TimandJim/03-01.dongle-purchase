import Button from "react-bootstrap/Button";
import styles from "./LoginButton.module.scss";
import { useState } from "react";
declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

export interface LoginButtonProps {
  readonly address: string;
  readonly setAddress: (address: string) => void;
  readonly setNetwork?: (network: string) => void;
  readonly disabled?: boolean;
}

const LoginButton = (props: LoginButtonProps): JSX.Element => {
  const { setAddress, disabled, address } = props;
  const disabledTrueLabel = <span>{"✅ You're logged into Metamask 🥳"}<br/> address: {address} </span>
  const disabledFalseLabel = "2. Login with Metamask"

  const onClick = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];

      
      return
        setAddress(account);
        // setNetwork("")

    }
  };

  return (
    <Button variant="light" onClick={onClick} className={styles.button} disabled={disabled}>
      {disabled ? disabledTrueLabel : disabledFalseLabel}
    </Button>
  );
};

export default LoginButton;
