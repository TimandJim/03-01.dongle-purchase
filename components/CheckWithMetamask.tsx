import React from 'react'

import Button from "react-bootstrap/Button";
import styles from "./CheckWithMetamask.module.scss";

export interface LoginButtonProps {
    readonly disabled?: boolean;
  }

const CheckWithMetamask = (props: LoginButtonProps):JSX.Element => {
   
    const { disabled } = props;
    const onClick = () => {
      // const onboarding = new MetaMaskOnboarding();
  
      // onboarding.startOnboarding()
      // console.log(onboarding);
    };

    const disabledTrueLabel = "😜 Follow the steps above 😜"
    const disabledFalseLabel = "🤩 Check your purchase! 🤩"

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
  )
}

export default CheckWithMetamask