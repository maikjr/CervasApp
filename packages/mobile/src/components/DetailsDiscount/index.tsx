import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { colors } from '../../assets/styles'

import {
  DiscountContainer,
} from './styles'

import {
  DiscountLeft,
  DiscountPlace,
  DiscountTitle,
  DiscountMl,
  DiscountFooter,
  DiscountPrice,
  DiscountPriceText,
  DiscountIcon
} from '../Discount/styles'

type IDiscount = {
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

const Discount: FC<IDiscount> = ({discount}) => {
  const {beer,  price} = discount;

  const splitBeer = beer.name.split('-');

  return (
    <DiscountContainer>
      <DiscountLeft>
        <DiscountPlace>Postado há 5 minutos</DiscountPlace>
        <DiscountTitle>
          {splitBeer[0]} <DiscountMl>- {splitBeer[1]}</DiscountMl>
        </DiscountTitle>
        <DiscountFooter>
          <DiscountPrice>
            <DiscountPriceText>R$ {price}</DiscountPriceText>
          </DiscountPrice>
          <DiscountIcon>
            <Icon name="navigation" size={22} color={colors.regular} />
          </DiscountIcon>
          <DiscountIcon>
            <Icon name="alert-triangle" size={22} color={colors.regular} />
          </DiscountIcon>
        </DiscountFooter>
      </DiscountLeft>
    </DiscountContainer>
  )
}

export default Discount
