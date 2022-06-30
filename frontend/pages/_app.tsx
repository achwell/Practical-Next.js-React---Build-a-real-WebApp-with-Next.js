import { useState, useEffect, FunctionComponent } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { Themes } from "@/styles/themes";
import { Layout } from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark(!isDark);

  const theme = Themes[isDark ? "dark" : "light"];
  const C = Component as FunctionComponent;
  return (
    <ThemeProvider theme={theme}>
      <Layout isDark={isDark} onThemeToggle={toggleDark}>
        <C {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
