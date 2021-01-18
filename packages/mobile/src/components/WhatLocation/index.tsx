import React from 'react';
import Icon from 'react-native-vector-icons/Feather'

import { Container, Title, Description, Button, TextButton } from './styles';

const WhatLocation: React.FC = () => {
  return (
    <Container>
      <Title>Oii, Cade você?</Title>
      <Description>Selecione sua cidade para encontrar os descontos de cervejas mais próximos 🍻</Description>
      <Button>
        <Icon name="map-pin" size={17} color="#E3E3E3" />
        <TextButton>Alterar Cidade</TextButton>
      </Button>
    </Container>
  );
}

export default WhatLocation;
