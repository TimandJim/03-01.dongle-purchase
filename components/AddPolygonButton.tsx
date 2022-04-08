import React from "react";

import styles from "./InstallMetamaskButton.module.scss";

import Button from "react-bootstrap/Button";

import MetaMaskOnboarding from "@metamask/onboarding";

// constants
import {
  polygonChainIdHex,
  polygonChainName,
  polygonNativeCurrencyDecimals,
  polygonNativeCurrencyName,
  polygonNativeCurrencySymbol,
  polygonRpcUrls,
} from "../constants/eth.constant";

export interface LoginButtonProps {
  readonly disabled?: boolean;
}

const AddPolygonButton = (props: LoginButtonProps) => {
  const { disabled } = props;
  const onClick = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: polygonChainIdHex }],
      });
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: polygonChainIdHex,
                chainName: polygonChainName,
                rpcUrls: polygonRpcUrls,
              },
            ],
          });
        } catch (addError) {
          console.log(addError)
        }
      }
      else {console.log(switchError)}
    }
  };

const disabledTrueLabel = "✅ Your current network is Polygon 🥳"
  const disabledFalseLabel = "3. Change network to Polygon"
  return (
    <Button
      variant="light"
      onClick={onClick}
      className={styles.button}
      disabled={disabled}
    >
      {disabled ?
       disabledTrueLabel 
        : disabledFalseLabel}
    </Button>
  );
};

export default AddPolygonButton;
