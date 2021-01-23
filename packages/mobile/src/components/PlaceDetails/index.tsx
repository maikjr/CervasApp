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
  selected?: boolean;
  discount: {
    address: string;
    beer: {
      name: string;
    }
    name: string;
    units: string;
    price: number;
    establishment: string;
  }
}

const PlaceDetails: FC<PlaceDetails> = ({ selected, discount }) => {
  const {address, establishment, price} = discount;

  return (
    <Container selected={selected}>
      {selected && <PlaceLabel>Estabelecimento</PlaceLabel>}
      <PlaceName>{establishment}</PlaceName>
      <PlaceAddress>
        {address}
      </PlaceAddress>
      {!selected && (
        <DiscountFooter>
          <DiscountPrice>
            <DiscountPriceText>R$ {price}</DiscountPriceText>
          </DiscountPrice>
          <DiscountIcon>
            <Icon name="alert-triangle" size={22} color={colors.regular} />
          </DiscountIcon>
        </DiscountFooter>
      )}
    </Container>
  )
}

export default PlaceDetails
