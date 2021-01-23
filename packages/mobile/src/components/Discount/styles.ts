import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles'

export const DiscountContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  margin-top: 10px;
  padding: 20px;
`
export const DiscountLeft = styled.View`
  flex: 1;
`
export const DiscountPlace = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${fonts.fontRegular};
  font-size: 14px;
  letter-spacing: 1.3px;
  color: ${colors.regular};
`
export const DiscountTitle = styled.Text`
  font-family: ${fonts.fontLight};
  font-size: 30px;
  padding-right: 60px;
`
export const DiscountMl = styled.Text`
  font-size: 15px;
`
export const DiscountFooter = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`
export const DiscountPrice = styled.View`
  background-color: ${colors.bgButtons};
  width: 150px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 75px;
  margin-right: 10px;
`
export const DiscountPriceText = styled.Text`
  color: #fff;
  font-family: ${fonts.fontSemiBold};
  font-size: 16px;
`
export const DiscountIcon = styled.View`
  padding: 0 10px;
`
