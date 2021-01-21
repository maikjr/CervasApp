import React from 'react'

import { Container, Content } from './styles'

import Header from '../../components/Header'
import DetailsDiscount from '../../components/DetailsDiscount'
import PlaceDetail from '../../components/PlaceDetails'
import PlaceLoading from '../../components/PlaceLoading'
import ButtonAction from '../../components/ButtonAction'

const Details = ({route}) => {
  const { discount } = route.params;
  return (
    <>
      <Container>
        <Header />
        <Content>
          <DetailsDiscount discount={discount} />
          <PlaceDetail discount={discount} selected />
          <PlaceLoading discount={discount} />
          <PlaceLoading discount={discount} />
          <PlaceLoading discount={discount} />
        </Content>
      </Container>
      <ButtonAction label="colabore conosco">Sugerir novo preço</ButtonAction>
    </>
  )
}

export default Details
