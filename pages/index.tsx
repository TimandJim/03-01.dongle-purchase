import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "./index.module.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import "bootstrap/dist/css/bootstrap.min.css";

import LoginButton from "../components/LoginButton";
import { useState } from "react";
// import LoginButton from '@components/LoginButton'

export interface IndexPageProps {}

const IndexPage = (Props: IndexPageProps) => {
  const {} = Props;
  const [address, setAddress] = useState("");

  return (
    <div
    className={styles.container}
    >
      <Head>
        <title>Dongle Space</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logoBox}>

        <Image
          src="/dongle_logo_word.png"
          alt="dongle logo"
          width={1405}
          height={401}
          // layout="fill"
        ></Image>
        </div>
        <h1 className={styles.title}>Welcome to Dongle Space!</h1>
        <LoginButton setAddress={setAddress} />
        <a>Your address: {address}</a>


      </main>
      <footer className={styles.footer}>
        <a>
          Dongle Space is a Decentralized social media featuring ownership,
          uncensorship, privacy and anonymity. For any inquiries, please contact
          us at contact@dongle.space
        </a>
      </footer>
    </div>
  );
};

export default IndexPage;
