import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles'

export const Container = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  flex: 1;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-top-color: #f2f2f2;
  border-top-width: 1px;
`
export const ButtonActionLabel = styled.Text`
  font-family: ${fonts.fontRegular};
  color: ${colors.regular};
`
export const ButtonActionText = styled.Text`
  font-family: ${fonts.fontRegular};
  color: ${colors.darker};
  font-size: 24px;
  margin-top: 5px;
`
