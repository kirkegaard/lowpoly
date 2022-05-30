import { Layout } from "../components/UI/Layout";
import { LastFM } from "../components/LastFM";
import { Spinner } from "../components/UI/Spinner";

const Home = () => {
  return (
    <Layout>
      <div className="mx-auto my-10 max-w-lg">
        <h1>Hello friend, </h1>
        <p>I'm Christian!</p>
        <p>
          I write small and fun generative graphics in various languages and
          frameworks like Javascript, Processing, and Open Frameworks.
        </p>
        <p>
          I&apos;m obsessed with music and currently I&apos;m listening to:{" "}
          <LastFM username="ranza" limit={3} />
        </p>
        <p>
          Oh and I'm also a senior software developer at{" "}
          <a href="https://omnigame.dk">Omnigame</a>.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
