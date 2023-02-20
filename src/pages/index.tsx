import React from 'react';

import { PageView } from '../components/PageView';
import { VStack } from '../components/primitives/VStack';
import { NoteView } from '../components/NoteView';
import { styled } from '../style';
import { Card } from '../components/primitives/Card';
import { Button } from '../components/primitives/Button';

export const SidebarView = styled('div', {
  padding: '$padding',
  width: '$sidebarWidth',
  flexShrink: 0,
});

function index() {

  return (
    <>
      <SidebarView>
        <Card>
          <VStack>
            <textarea placeholder="なにしてる？" />
            <Button color="primary" css={{marginLeft: 'auto'}}>ノート</Button>
          </VStack>
        </Card>
      </SidebarView>
      <PageView>
        <VStack>
          <NoteView />
          <NoteView />
          <NoteView />
          <NoteView />
          <NoteView />
          <NoteView />
          <NoteView />
          <NoteView />
          <NoteView />
        </VStack>
      </PageView>
    </>
  );
}

export default index;
