import { useState, useEffect } from "react";

import { Layout } from "../components/UI/Layout";
import { LastFM } from "../components/LastFM";
import { Socials } from "../components/Socials";

import Balls from "../components/Canvas/Balls";

import { Random } from "../lib/Math";

const greetings = [
  "Hi friend",
  "Hi honey",
  "Hey buddy",
  "Hey man",
  "Hello there",
  "So, we meet again",
];

const Home = () => {
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    setGreeting(greetings[Random(0, greetings.length, true)]);
  }, []);

  return (
    <Layout>
      <div className="mx-auto my-10 max-w-lg p-4">
        <h1>{greeting}, </h1>
        <p>I'm Christian!</p>
        <p>
          I write small and fun generative graphics in various languages and
          frameworks like Javascript, Processing, and GLSL.
        </p>
        <p>
          I also <a href="https://games.lowpoly.dk">collect</a> and mod old
          consoles.{" "}
          <a href="https://www.instagram.com/lowpolysaurus/">Mostly Gameboys</a>
          !
        </p>
        <p>
          I&apos;m also obsessed with music and currently listening to:{" "}
          <LastFM username="ranza" limit={3} />
        </p>
        <p>
          Oh and I'm also a senior software developer at{" "}
          <a href="https://omnigame.dk">Omnigame</a>.
        </p>

        <hr />

        <Socials />
      </div>

      <div>
        <Balls height={720} />
      </div>
    </Layout>
  );
};

export default Home;
