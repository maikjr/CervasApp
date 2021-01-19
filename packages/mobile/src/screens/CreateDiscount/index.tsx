import React from 'react'
import Header from '../../components/Header'

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
  SectionPriceInput
} from './styles'

const CreateDiscount = () => {
  return (
    <Container>
      <Header />
      <Content>
        <TitlePage>Novo Desconto</TitlePage>
        <Section>
          <Label>cerveja</Label>
          <SelectOption>
            <SelectOptionText>Selecionar...</SelectOptionText>
          </SelectOption>
        </Section>
        <Section>
          <Label>estabelecimento</Label>
          <SelectOption>
            <SelectOptionText>Selecionar...</SelectOptionText>
          </SelectOption>
        </Section>
        <SectionPrice>
          <Label>preço por unidade</Label>
          <SectionPriceContent>
            <SectionPriceText>R$</SectionPriceText>
            <SectionPriceInput keyboardType={'numeric'} placeholder="3.99" />
          </SectionPriceContent>
        </SectionPrice>
      </Content>
    </Container>
  )
}

export default CreateDiscount
