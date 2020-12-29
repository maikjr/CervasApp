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

const Discount: FC = () => {
  return (
    <DiscountContainer>
      <DiscountLeft>
        <DiscountPlace>hiper bom preço</DiscountPlace>
        <DiscountTitle>
          Heineken Long Neck <DiscountMl>- 330ml</DiscountMl>
        </DiscountTitle>
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
      </DiscountLeft>
      <Icon name="arrow-right" size={28} color={colors.regular} />
    </DiscountContainer>
  )
}

export default Discount
