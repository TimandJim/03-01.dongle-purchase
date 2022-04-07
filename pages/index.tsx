import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "./Home.module.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import "bootstrap/dist/css/bootstrap.min.css";

import LoginButton from "../components/LoginButton";
// import LoginButton from '@components/LoginButton'

const Home: NextPage = () => {
  return (
    <div
    // className={styles.container}
    >
      <Head>
        <title>Dongle Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/dongle_logo_word.png"
          alt="dongle logo"
          // layout="intrinsic"
          width={1405}
          height={401}
        ></Image>
        <h1 className={styles.title}>
          Welcome to Dongle Space!
        </h1>
        <LoginButton />
        <Form>
          {/* <div className="mb-3"> */}
          <Form.Group controlId="formVerificationType">
            <Form.Label>Check my puarchase with...</Form.Label>
            <Form.Check
              type="radio"
              id={"address"}
              label={"ethereum wallet address"}
              name="vertification-type"
            />
            <Form.Check
              type="radio"
              id={"email"}
              label={"email"}
              name="vertification-type"
            />
          </Form.Group>
          <Form.Group controlId="formEthAdress">
            <Form.Control
              as="input"
              placeholder="Type your eth wallet address"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="emailAdress">
            <Form.Control
              as="input"
              placeholder="you@example.com"
              type="email"
              isInvalid={false}
              isValid={true}
            ></Form.Control>
            <Button variant="primary" type="submit">
              Send code
            </Button>
          </Form.Group>
          <Button variant="primary" type="submit">
            Check my release schedule
          </Button>
          {/* </div> */}
        </Form>
        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div> */}
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

export default Home;
