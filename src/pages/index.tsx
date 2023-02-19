import React from 'react';
import { VStack } from '../components/VStack';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { HStack } from '../components/HStack';

function index() {
  return (
    <Container>
      <VStack align="left">
        <p>Hello, world</p>
        <HStack>
          <Button>参照…</Button>
          <Button color="flat">＋</Button>
          <Button color="primary">送信</Button>
          <Button color="danger">核爆発</Button>
        </HStack>
      </VStack>
    </Container>
  );
}

export default index;
