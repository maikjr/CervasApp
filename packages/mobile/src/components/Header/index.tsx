import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { colors } from '../../assets/styles'

import {
  Container,
  ButtonBack,
  SearchContainer,
  SearchInput,
  ButtonSearch
} from './styles'

type HeaderType = {
  searchable?: boolean
}

const Header: FC<HeaderType> = ({ searchable }) => {
  return (
    <Container>
      <ButtonBack>
        <Icon name="arrow-left" size={28} color={colors.darker} />
      </ButtonBack>
      {searchable && (
        <SearchContainer>
          <SearchInput placeholder="Pesquisar bebida" />
          <ButtonSearch>
            <Icon name="search" size={28} color="#E3E3E3" />
          </ButtonSearch>
        </SearchContainer>
      )}
    </Container>
  )
}

export default Header
