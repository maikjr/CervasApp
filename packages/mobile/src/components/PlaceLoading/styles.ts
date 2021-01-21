import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const Container = styled.View`
  background-color: ${(props: { selected: boolean }) =>
    props.selected ? '#f2f2f2' : '#fff'};
  padding: 20px;
  border-bottom-color: #f2f2f2;
  border-bottom-width: 1px;
`
export const PlaceLeft = styled.View`
  flex: 1;
`

export const PlacePlace = styled(ShimmerPlaceHolder)`
  width: 140px;
`;
export const PlaceTitle = styled(ShimmerPlaceHolder)`
  width: 80%;
  height: 30px;
  margin-top: 10px;
`;
export const PlacePrice = styled(ShimmerPlaceHolder)`
  width: 130px;
  height: 30px;
  margin-top: 10px;
`;
export const PlaceFooter = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`
