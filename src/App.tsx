import React, { Suspense, useLayoutEffect } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '~react-pages';
import { darkTheme, useGlobalStyle } from './style';
import { useAtom } from 'jotai';
import { themeAtom } from './store/clientSettings';
import { Layout } from './layouts/Layout';

export const App: React.FC = () => {
  useGlobalStyle();
  const [theme] = useAtom(themeAtom);

  useLayoutEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add(darkTheme);
    }

    return () => document.documentElement.classList.remove(darkTheme);
  }, [theme]);

  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        {useRoutes(routes)}
      </Suspense>
    </Layout>
  );
};