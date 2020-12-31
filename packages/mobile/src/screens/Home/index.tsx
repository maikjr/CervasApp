import React, {useState, useRef} from 'react'
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
  LocalName,
  BottomSheet
} from './styles'

import DiscountLoading from '../../components/DiscountLoading'
import ButtonAction from '../../components/ButtonAction'
import ChangeLocal from '../../components/ChangeLocal'

type Location = {
  latitude: string,
  longitude: string,
  title: string,
}

export default function Home () {
  const refRBSheet = useRef();

  const [getLocation, setLocation] = useState<Location>();

  const handleLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude }
    } = geometry;
    setLocation({
      latitude,
      longitude,
      title: data.structured_formatting.main_text
    })
    refRBSheet.current.close()
  }

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
            <LocalButton onPress={() => refRBSheet.current.open()}>
              <Icon name="map-pin" size={17} color="#E3E3E3" />
              <LocalName>{!getLocation ? 'Oi, cade você?' : getLocation.title}</LocalName>
            </LocalButton>
          </TitleSection>

          <ListDiscount>
            <DiscountLoading />
            <DiscountLoading />
            <DiscountLoading />
            <DiscountLoading />
          </ListDiscount>
        </Content>
      </Container>
      <ButtonAction label="colabore conosco">Criar desconto</ButtonAction>
        <BottomSheet
          ref={refRBSheet}
          animationType="slide"
          height={600}
          openDuration={250}
          closeOnDragDown
          closeOnPressMask
        >
          <ChangeLocal onLocationSelected={handleLocationSelected} />
        </BottomSheet>
    </>
  )
}
