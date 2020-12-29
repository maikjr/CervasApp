import React from 'react'

import { Container, Content } from './styles'
import Header from '../../components/Header'
import Discount from '../../components/Discount'

const Search = () => {
  return (
    <Container>
      <Header searchable />
      <Content>
        <Discount />
        <Discount />
        <Discount />
        <Discount />
        <Discount />
      </Content>
    </Container>
  )
}

export default Search
