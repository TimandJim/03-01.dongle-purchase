import React from "react";

import styles from "./InstallMetamaskButton.module.scss";

import Button from "react-bootstrap/Button";

import MetaMaskOnboarding from "@metamask/onboarding";

export interface LoginButtonProps {
  readonly disabled?: boolean;
}

const InstallMetamaskButton = (props: LoginButtonProps) => {
  const { disabled } = props;
  const onClick = () => {
    const onboarding = new MetaMaskOnboarding();

    // onboarding.startOnboarding()
    console.log(onboarding);
  };

  const disabledTrueLabel = "✅ Metamask is installed    🥳"
  const disabledFalseLabel = "1. Install Metamask"

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

export default InstallMetamaskButton;
