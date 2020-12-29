import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

import { colors, fonts } from '../../assets/styles'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const DiscountContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  margin-top: 20px;
  padding: 20px;
`
export const DiscountLeft = styled.View`
  flex: 1;
`

export const DiscountPlace = styled(ShimmerPlaceHolder)`
  width: 140px;
`;
export const DiscountTitle = styled(ShimmerPlaceHolder)`
  width: 80%;
  height: 40px;
  margin-top: 10px;
`;
export const DiscountPrice = styled(ShimmerPlaceHolder)`
  width: 130px;
  height: 30px;
  margin-top: 10px;
`;
export const Icon = styled(ShimmerPlaceHolder)`
    width: 30px;
`
export const DiscountFooter = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`
