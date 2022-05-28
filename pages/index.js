import { Layout } from "../components/UI/Layout";
import { LastFM } from "../components/LastFM";

const Home = () => {
  return (
    <Layout>
      <p>
        I&apos;m obsessed with music and currently I&apos;m listening to:{" "}
        <LastFM username="ranza" limit={3} />
      </p>
    </Layout>
  );
};

export default Home;
