import React, { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '~react-pages';
import { darkTheme, useGlobalStyle } from './style';

export const App: React.FC = () => {
  useGlobalStyle();

  useEffect(() => {
    // TODO: ダークモード切り替えを実装する
    return;
    document.documentElement.classList.add(darkTheme);

    return () => document.documentElement.classList.remove(darkTheme);
  }, []);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  );
};