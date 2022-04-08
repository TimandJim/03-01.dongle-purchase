import React from 'react'

import Button from "react-bootstrap/Button";
import styles from "./AddDongleButton.module.scss";

import {
  dongleAddress,
  dongleSymbol,
  dongleDecimals,
  dongleImage,
} from "../constants/dongle.constant";

const AddDongleButton = ():JSX.Element => {
  
    const onClick = () => {
        window.ethereum.request(
        {
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: dongleAddress,
          symbol: dongleSymbol,
          decimals: dongleDecimals,
          image: dongleImage,
        },
      },
    })
    .then((success: boolean) => {
      if (success) {
        console.log('FOO successfully added to wallet!');
        console.log(window.ethereum.request)
      } else {
        throw new Error('Something went wrong.');
      }
    })
    .catch(console.error);

    }

  return (
<div className={styles.div}>
  <p>Don't see your Dongles in Metamask? </p>
    <Button variant="light" onClick={onClick} className={styles.button}>
    Add Dongle token to metamask 😎
    </Button>
    </div>
  )
}

export default AddDongleButton