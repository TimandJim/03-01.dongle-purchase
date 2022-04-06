import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

const LoginButton = (): JSX.Element => {
  const loginWithMetamask = async () => {
    console.log(window.ethereum);
    if (typeof window.ethereum !== "undefined") {
      console.log("Metamask is installed!");;;

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);

      const account = accounts[0];
      console.log(account)
    }
  };

  const onHiClick = () => {
    console.log("clicked hi button");
    loginWithMetamask();
  };

  // useEffect(() => {
  //   loadBlockchainData()
  // });
  return (
    <Button variant="primary" onClick={onHiClick}>
      hihi
    </Button>
  );
};

export default LoginButton;
