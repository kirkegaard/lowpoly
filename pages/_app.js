import ReactGA from "react-ga";
import { SWRConfig } from "swr";

import "../styles/globals.css";

ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_ID);

const App = ({ Component, pageProps, err }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Component {...{ pageProps, err }} />
    </SWRConfig>
  );
};

export default App;
