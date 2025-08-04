'use client';

import { useEffect } from 'react';
import ReactGA from "react-ga";

export default function ClientProvider({ children }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ANALYTICS_ID) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_ID);
    }
  }, []);

  return <>{children}</>;
}