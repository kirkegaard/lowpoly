import Metadata from "./Metadata";
import Main from "./Main";

import { useTheme } from "../Theme";
import { Header } from "../Header";

export const Base = ({ title, description, metadata, children }) => {
  return (
    <>
      <Metadata {...{ title, description, metadata }} />
      {children}
    </>
  );
};

export const Layout = ({ children, title, description, metadata }) => {
  return (
    <Base {...{ title, description, metadata }}>
      <Main className="flex min-h-screen flex-col">
        <Header />
        {children}
      </Main>
    </Base>
  );
};
