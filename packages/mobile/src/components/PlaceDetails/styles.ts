import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles'

export const Container = styled.View`
  background-color: ${(props: { selected: boolean }) =>
    props.selected ? '#f2f2f2' : '#fff'};
  padding: 20px;
  border-bottom-color: #f2f2f2;
  border-bottom-width: 1px;
`
export const PlaceLabel = styled.Text`
  font-family: ${fonts.fontRegular};
  font-size: 14px;
  letter-spacing: 1.3px;
  color: ${colors.regular};
  margin-bottom: 8px;
`
export const PlaceName = styled.Text`
  font-family: ${fonts.fontBold};
  font-size: 24px;
  letter-spacing: 2px;
  color: ${colors.darker};
`
export const PlaceAddress = styled.Text`
  font-family: ${fonts.fontRegular};
  font-size: 16px;
  letter-spacing: 1.3px;
  color: ${colors.darker};
  margin-top: 2px;
`
export const DiscountFooter = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`
export const DiscountPrice = styled.View`
  background-color: #f2f2f2;
  width: 150px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 75px;
  margin-right: 10px;
`
export const DiscountPriceText = styled.Text`
  color: ${colors.darker};
  font-family: ${fonts.fontSemiBold};
  font-size: 16px;
`
export const DiscountIcon = styled.View`
  padding: 0 15px;
`
