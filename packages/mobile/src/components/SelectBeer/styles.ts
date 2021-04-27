import styled from 'styled-components/native'

import { colors, fonts } from '../../assets/styles'

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`
export const Header = styled.View`
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  height: 113px;
  padding: 0 20px;
`
export const Title = styled.Text`
  color: ${colors.colorTitle};
  font-family: ${fonts.fontBold};
  font-size: 19px;
`
export const Beer = styled.TouchableOpacity`
padding: 15px 0;
flex-direction: row;
justify-content: space-between;
`
export const BeerText = styled.Text`
  color: ${colors.colorTitle};
  font-family: ${fonts.fontRegular};
  font-size: 19px;
`
