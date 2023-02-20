import React from 'react';
import { VStack } from '../components/VStack';
import { Button } from '../components/Button';
import { HStack } from '../components/HStack';
import { useAtom } from 'jotai';
import { themeAtom } from '../store/clientSettings';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import { PageTitle } from '../components/Typography';
import { PageView } from '../components/PageView';

function index() {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <PageView>
      <VStack align="left">
        <PageTitle>デバッグページ</PageTitle>
        <p>Hello, world</p>
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          { theme === 'dark' ? <IconSunFilled /> : <IconMoonFilled /> }
        </Button>
        <HStack>
          <Button>参照…</Button>
          <Button color="flat">＋</Button>
          <Button color="primary">送信</Button>
          <Button color="danger">核爆発</Button>
        </HStack>
        <HStack>
          <Button disabled>参照…</Button>
          <Button disabled color="flat">＋</Button>
          <Button disabled color="primary">送信</Button>
          <Button disabled color="danger">核爆発</Button>
        </HStack>
      </VStack>
    </PageView>
  );
}

export default index;
