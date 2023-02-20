import React from 'react';
import { Card } from './primitives/Card';
import { HStack } from './primitives/HStack';
import { VStack } from './primitives/VStack';
import { DimmedSpan, StrongSpan } from './primitives/Typography';
import { Button } from './primitives/Button';
import { IconBookmark, IconDots, IconMessage, IconMoodSmile, IconRepeat } from '@tabler/icons-react';
import { styled } from '../style';

const Avatar = styled('img', {
  width: 60,
  height: 60,
  flexShrink: 0,
  borderRadius: '$full',
  backgroundColor: '$uiPrimaryBorder',
});

export const NoteView: React.FC = () => {
  return (
    <Card>
      <HStack>
        <Avatar src="https://media.shrimpia.network/mk-shrimpia/files/4f60c106-468e-451d-b0dd-1ce43ef294d5.png" />
        <VStack slim justify="top">
          <header>
            <StrongSpan>るちか</StrongSpan>{' '}
            <DimmedSpan>@Lutica@aya.me</DimmedSpan>
          </header>
          <p>
            あのイーハトーヴォのすきとおった風、<br/>
            夏でも底に冷たさをもつ青いそら、<br/>
            うつくしい森で飾られたモリーオ市、<br/>
            郊外のぎらぎらひかる草の波。
          </p>
          <HStack dense>
            <Button color="flat">
              <IconMessage height="1em" />
            </Button>
            <Button color="flat">
              <IconRepeat height="1em" />
            </Button>
            <Button color="flat">
              <IconMoodSmile height="1em" />
            </Button>
            <Button color="flat">
              <IconBookmark height="1em" />
            </Button>
            <Button color="flat">
              <IconDots height="1em" />
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </Card>
  );
};