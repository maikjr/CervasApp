import React, {useRef, useState, useEffect} from 'react'
import api from '@cervasapp/axios-config'

import Header from '../../components/Header'
import SelectBeer from '../../components/SelectBeer'

import {
  Container,
  Content,
  TitlePage,
  Section,
  SectionPrice,
  Label,
  SelectOption,
  SelectOptionText,
  SectionPriceContent,
  SectionPriceText,
  SectionPriceInput,
  BottomSheet,
  Loading
} from './styles'

type Beers = {
  _id: string;
  name: string;
}

const CreateDiscount = () => {
  const refRBSheet = useRef();

  const [getLoadingScreen, setLoadingScreen] = useState(true);
  const [getAllBeers, setAllBeers] = useState<Beers[]>([]);

  const [getBeerSelected, setBeerSelected] = useState<Beers>();

  const findAllBeers = async () => {
    try{
      const response = await api.get("/beers");
      const {beers} = response.data;
      setAllBeers(beers);
      setLoadingScreen(false);
    }catch(err){
      alert(JSON.stringify(err));
    }
  }

  useEffect(() => {
    findAllBeers();
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <TitlePage>Novo Desconto</TitlePage>
        <Section>
          <Label>cerveja</Label>
          <Loading visible={!getLoadingScreen}>
            <SelectOption onPress={() => refRBSheet.current.open()}>
              <SelectOptionText>
                {!!getBeerSelected ? getBeerSelected.name : 'Selecionar...'}
              </SelectOptionText>
            </SelectOption>
          </Loading>
        </Section>
        <Section>
          <Label>estabelecimento</Label>
          <Loading visible={!getLoadingScreen}>
            <SelectOption>
              <SelectOptionText>Selecionar...</SelectOptionText>
            </SelectOption>
          </Loading>
        </Section>
        <SectionPrice>
          <Label>preço por unidade</Label>
          <Loading visible={!getLoadingScreen}>
            <SectionPriceContent>
              <SectionPriceText>R$</SectionPriceText>
              <SectionPriceInput keyboardType={'numeric'} placeholder="3.99" />
            </SectionPriceContent>
          </Loading>
        </SectionPrice>
      </Content>

      <BottomSheet
        ref={refRBSheet}
        animationType="slide"
        height={500}
        openDuration={250}
        closeOnDragDown
        closeOnPressMask
      >
        <SelectBeer getAllBeers={getAllBeers} setBeerSelected={setBeerSelected} />
      </BottomSheet>

    </Container>
  )
}

export default CreateDiscount
