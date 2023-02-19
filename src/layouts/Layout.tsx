import React, { PropsWithChildren } from 'react';
import { styled } from '../style';
import { Container } from '../components/Container';
import { HStack } from '../components/HStack';
import { Button } from '../components/Button';
import { IconBell, IconHash, IconHome, IconSearch, IconUsers } from '@tabler/icons-react';

import iris from '../assets/iris.png';

const Main = styled(HStack, {
  marginTop: 48,
  defaultVariants: {
    justify: 'center',
  },
});

const TopBar = styled(HStack, {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: '$bg',
  borderBottom: '1px solid $divider',
  padding: '$2 $4',
});

const TopBarItem = styled(Button, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Spacer = styled('div', {
  margin: 'auto',
});

const IconImage = styled('img', {
  filter: 'grayscale(1)',
  height: '1em',
  fontSize: '$6',
});

export const Layout: React.FC<PropsWithChildren> = (p) => {
  return (
    <div>
      <TopBar>
        <IconImage src={iris} alt="Ayame" />
        <HStack dense>
          <TopBarItem color="flat"><IconHome height="1em" /> ホーム</TopBarItem>
          <TopBarItem color="flat"><IconUsers height="1em" /> コミュニティ</TopBarItem>
          <TopBarItem color="flat"><IconHash height="1em" /> みつける</TopBarItem>
        </HStack>
        <Spacer />
        <HStack dense>
          <TopBarItem color="flat"><IconSearch height="1em" /></TopBarItem>
          <TopBarItem color="flat"><IconBell height="1em" /></TopBarItem>
        </HStack>
      </TopBar>
      <Container>
        <Main>
          {p.children}
        </Main>
      </Container>
    </div>
  );
};
