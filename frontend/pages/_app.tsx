import { FunctionComponent } from "react";
import type { AppProps } from "next/app";

import { Layout } from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const C = Component as FunctionComponent;
  return (
    <Layout>
      <C {...pageProps} />
    </Layout>
  );
}

export default MyApp;
