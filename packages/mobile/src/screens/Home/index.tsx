import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import {
  Container,
  Header,
  Title,
  SearchContainer,
  SearchInput,
  Content,
  TitleSection,
  TitleSectionText,
  ListDiscount,
  ButtonSearch,
  LocalButton,
  LocalName
} from './styles'

import Discount from '../../components/Discount'
import ButtonAction from '../../components/ButtonAction'

export default function Home () {
  return (
    <>
      <Container>
        <Header>
          <Title>CervasApp</Title>
          <SearchContainer>
            <SearchInput placeholder="Pesquisar bebida" />
            <ButtonSearch>
              <Icon name="search" size={28} color="#E3E3E3" />
            </ButtonSearch>
          </SearchContainer>
        </Header>

        <Content>
          <TitleSection>
            <TitleSectionText>Descontos 🔥</TitleSectionText>
            <LocalButton>
              <Icon name="map-pin" size={17} color="#E3E3E3" />
              <LocalName>Salgado-SE</LocalName>
            </LocalButton>
          </TitleSection>

          <ListDiscount>
            <Discount />
            <Discount />
            <Discount />
            <Discount />
          </ListDiscount>
        </Content>
      </Container>
      <ButtonAction label="colabore conosco">Criar desconto</ButtonAction>
    </>
  )
}
