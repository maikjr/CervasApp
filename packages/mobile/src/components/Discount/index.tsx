import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();
  const {establishment, beer,  price, address} = discount;

  const splitBeer = beer.name.split('-');
  return (
    <DiscountContainer onPress={() => navigation.navigate('Details', {
      discount
    })}>
      <DiscountLeft>
        <DiscountPlace>{establishment} - {address}</DiscountPlace>
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
      <Icon name="arrow-right" size={28} color={colors.regular} />
    </DiscountContainer>
  )
}

export default Discount
