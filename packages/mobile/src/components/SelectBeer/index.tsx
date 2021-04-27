import React from 'react';
import Icon from 'react-native-vector-icons/Feather'

import {
  Container,
  Title,
  Beer,
  BeerText
} from './styles';

const SelectBeer: React.FC = () => {
  return (
    <Container>
      <Title>Qual cerveja ?</Title>
      <Beer>
        <BeerText>Skoll Litrinho</BeerText>
        <Icon name="circle" size={28} color="#ccc" />
      </Beer>
      <Beer>
        <BeerText>Skoll Litrinho</BeerText>
        <Icon name="circle" size={28} color="#ccc" />
      </Beer>
      <Beer>
        <BeerText>Skoll Litrinho</BeerText>
        <Icon name="circle" size={28} color="#ccc" />
      </Beer>
      <Beer>
        <BeerText>Skoll Litrinho</BeerText>
        <Icon name="circle" size={28} color="#ccc" />
      </Beer>
      <Beer>
        <BeerText>Skoll Litrinho</BeerText>
        <Icon name="circle" size={28} color="#ccc" />
      </Beer>
    </Container>
  );
}

export default SelectBeer;
