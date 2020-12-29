import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles'

export const Container = styled.ScrollView`
  flex: 1;
`
export const Content = styled.View`
  flex: 1;
`

export const Header = styled.View`
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  height: 113px;
  padding: 0 20px;
`
export const Title = styled.Text`
  font-family: ${fonts.fontSemiBold};
  font-size: 18px;
`
export const SearchContainer = styled.View`
  background-color: #fff;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 44px;
  border-radius: 5px;
  margin-top: 10px;
`
export const SearchInput = styled.TextInput`
  flex: 1;
`
export const ButtonSearch = styled.TouchableOpacity``

export const TextButton = styled.View``
export const TitleSection = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin-top: 10px;
`
export const TitleSectionText = styled.Text`
  font-family: ${fonts.fontBold};
  font-size: 20px;
`
export const ListDiscount = styled.View``
export const LocalButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.bgButtons};
  padding: 5px 15px;
  width: 120px;
  border-radius: 20px;
`
export const LocalName = styled.Text`
  font-family: ${fonts.fontRegular};
  color: ${colors.lighter};
`
