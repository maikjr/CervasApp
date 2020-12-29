import styled from 'styled-components/native'
import { colors, metrics } from '../../assets/styles'

export const Container = styled.View`
  background-color: ${colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${metrics.headerHeight}px;
  padding: 0 10px;
`
export const ButtonBack = styled.TouchableOpacity``
export const SearchContainer = styled.View`
  background-color: #fff;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 44px;
  margin-left: 20px;
  border-radius: 5px;
`
export const SearchInput = styled.TextInput`
  flex: 1;
`
export const ButtonSearch = styled.TouchableOpacity``
