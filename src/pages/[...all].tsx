import React from 'react';

import { Container } from '../components/Container';
import { styled } from '../style';
import { Button } from '../components/Button';
import { VStack } from '../components/VStack';

const Title = styled('h1', {
  fontSize: '$title',
});

const Img = styled('img', {
  width: '1em',
  height: '1em',
});

function notFound() {
  return (
    <Container>
      <VStack align="center" css={{
        borderRadius: '$3',
        backgroundColor: '$primary4',
        maxWidth: '480px',
        padding: '$padding',
        margin: '0 auto',
      }}>
        <Title>
          <Img src="https://media.shrimpia.network/mk-shrimpia/files/c4ab9724-ef10-40e7-8ff1-ac1132ba90ac.png" alt="4" />
          0
          <Img src="https://media.shrimpia.network/mk-shrimpia/files/c4ab9724-ef10-40e7-8ff1-ac1132ba90ac.png" alt="4" />
        </Title>
        <p>このページは存在しません。</p>
        <Button as="a" href="/">トップに戻る</Button>
      </VStack>
    </Container>
  );
}

export default notFound;
