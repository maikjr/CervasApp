import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { colors } from '../../assets/styles'

import {
  DiscountContainer,
  DiscountLeft,
  DiscountPlace,
  DiscountTitle,
  DiscountMl,
  DiscountFooter,
  DiscountPrice,
  DiscountPriceText,
  DiscountIcon
} from './styles'

const Discount: FC = ({discount}) => {
  const {address, name, units, price} = discount;
  return (
    <DiscountContainer>
      <DiscountLeft>
        <DiscountPlace>{address}</DiscountPlace>
        <DiscountTitle>
          {name} <DiscountMl>- {units}</DiscountMl>
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
      <Icon name="arrow-right" size={28} color={colors.regular} />
    </DiscountContainer>
  )
}

export default Discount
