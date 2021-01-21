import React, {useState, useRef, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Feather'
import api from '@cervasapp/axios-config'

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

import Discount from '../../components/Discount'
import DiscountLoading from '../../components/DiscountLoading'
import ButtonAction from '../../components/ButtonAction'
import ChangeLocal from '../../components/ChangeLocal'
import WhatLocation from '../../components/WhatLocation'

type Location = {
  latitude: string,
  longitude: string,
  title: string,
}

export default function Home ({navigation}) {
  const refRBSheet = useRef();

  const [getLoadingScreen, setLoadingScreen] = useState(false);
  const [getLocation, setLocation] = useState<Location>();
  const [getDiscounts, setDiscounts] = useState([]);

  const handleLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude }
    } = geometry;

    setLocation({
      latitude,
      longitude,
      title: data.structured_formatting.main_text
    })
    refRBSheet.current.close();
  }


  const searchDiscounts = async () => {
    setLoadingScreen(true);
    try{
      const {longitude, latitude} = getLocation;

      const response = await api.post("/search", {
        longitude,
        latitude,
      });
      const {discounts} = response.data;
      setDiscounts(discounts);
      setLoadingScreen(false);
    }catch(err){
      alert(JSON.stringify(err));
    }
  }

  useEffect(() => {
    if(getLocation){
      searchDiscounts()
    }
  }, [getLocation])



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

      {!getLocation ? (
        <WhatLocation changeLocation={() => refRBSheet.current.open()}/>
      ) : (
        <Content>
          <TitleSection>
            <TitleSectionText>Descontos 🔥</TitleSectionText>
            <LocalButton onPress={() => refRBSheet.current.open()}>
              <Icon name="map-pin" size={17} color="#E3E3E3" />
              <LocalName>{!getLocation ? 'Oi, cade você?' : getLocation.title}</LocalName>
            </LocalButton>
          </TitleSection>


            {getLoadingScreen ? (
              <ListDiscount>
                <DiscountLoading />
                <DiscountLoading />
                <DiscountLoading />
                <DiscountLoading />
              </ListDiscount>
            ) : (
              <ListDiscount>
                {getDiscounts.map(discount =>
                  <Discount key={discount.id} discount={discount} onPress={() => navigation.navigate('Details')} />
                )}
              </ListDiscount>
            )}


        </Content>
      )}
      </Container>
      <ButtonAction label="colabore conosco" onPress={() => navigation.navigate('CreateDiscount')}>Criar desconto</ButtonAction>
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
