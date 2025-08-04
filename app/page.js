import { LastFM } from "../components/LastFM";
import { Socials } from "../components/Socials";

import Balls from "../components/Canvas/Balls";

import styles from "./page.module.css";

const greetings = [
  "Hi friend",
  "Hi honey",
  "Hey buddy",
  "Hey man",
  "Hello there",
  "So, we meet again",
];

function getGreeting() {
  const index = Math.floor(Math.random() * greetings.length);
  return greetings[index];
}

export default async function Home() {
  const greeting = getGreeting();

  return (
    <div className={styles.container}>
      <div className={styles.canvasLayer}>
        <Balls />
      </div>

      <div className={styles.contentLayer}>
        <div className={styles.content}>
          <h1>{greeting}, </h1>
          <p>
            I'm Christian — a software developer with a love for creative
            coding, from shaders to retro platforms like the Amiga and Game Boy.
            When I'm not coding, I'm probably skating,{" "}
            <a href="https://instagram.com/lowpolysaurus">
              tinkering with old hardware
            </a>{" "}
            or playing video games. I'm currently playing{" "}
            <b>Donkey Kong Bananza</b> and <b>Stellar Blade</b>.
          </p>
          <p>
            I'm also obsessed with music and currently listening to{" "}
            <LastFM username="ranza" limit={3} />.
          </p>
          <p>
            Oh, and I'm a senior software developer at{" "}
            <a href="https://omnigame.dk">Omnigame</a>.
          </p>

          <hr />

          <Socials />
        </div>
      </div>
    </div>
  );
}
