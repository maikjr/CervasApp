import React from 'react'

import { Container, Content } from './styles'

import Header from '../../components/Header'
import Discount from '../../components/Discount'
import PlaceDetail from '../../components/PlaceDetails'
import ButtonAction from '../../components/ButtonAction'

const Details = () => {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Discount />
          <PlaceDetail selected />
          <PlaceDetail />
          <PlaceDetail />
          <PlaceDetail />
          <PlaceDetail />
          <PlaceDetail />
          <PlaceDetail />
        </Content>
      </Container>
      <ButtonAction label="colabore conosco">Sugerir novo preço</ButtonAction>
    </>
  )
}

export default Details
