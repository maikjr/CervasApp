import React from 'react'

import {
  DiscountContainer,
  DiscountLeft,
  DiscountPlace,
  DiscountTitle,
  DiscountFooter,
  DiscountPrice,
  Icon
} from './styles'

const Discount: React.FC = () => {
  return (
    <DiscountContainer>
      <DiscountLeft>
        <DiscountPlace />
        <DiscountTitle />
        <DiscountFooter>
          <DiscountPrice />
        </DiscountFooter>
      </DiscountLeft>
      <Icon />
    </DiscountContainer>
  )
}

export default Discount
