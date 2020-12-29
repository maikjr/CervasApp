import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { colors } from '../../assets/styles'
import {
  Container,
  PlaceLabel,
  PlaceName,
  PlaceAddress,
  DiscountFooter,
  DiscountPrice,
  DiscountPriceText,
  DiscountIcon
} from './styles'

type PlaceDetails = {
  selected: boolean
}

const PlaceDetails: FC<PlaceDetails> = ({ selected }) => {
  return (
    <Container selected={selected}>
      {selected && <PlaceLabel>Estabelecimento</PlaceLabel>}
      <PlaceName>Hiper Bom Preço</PlaceName>
      <PlaceAddress>
        Av. Gonçalo Prado Rolemberg, 1540 - São José, Aracaju - SE
      </PlaceAddress>
      {!selected && (
        <DiscountFooter>
          <DiscountPrice>
            <DiscountPriceText>R$ 3,27</DiscountPriceText>
          </DiscountPrice>
          <DiscountIcon>
            <Icon name="navigation" size={22} color={colors.regular} />
          </DiscountIcon>
          <DiscountIcon>
            <Icon name="alert-triangle" size={22} color={colors.regular} />
          </DiscountIcon>
        </DiscountFooter>
      )}
    </Container>
  )
}

export default PlaceDetails
