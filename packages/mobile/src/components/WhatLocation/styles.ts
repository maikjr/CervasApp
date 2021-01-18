import styled from 'styled-components/native';
import { colors, fonts } from '../../assets/styles'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-top: 50px;
`;
export const Title = styled.Text`
  padding-bottom: 10px;
  font-size: 22px;
  font-family: ${fonts.fontSemiBold};
  color: #333;
`;
export const Description = styled.Text`
  color: #a5a5a5;
  text-align: center;
  padding: 0 20px;
  font-size: 17px;
  width: 300px;
  font-family: ${fonts.fontRegular};
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.bgButtons};
  padding: 10px 15px;
  margin: 15px 0;
  width: 150px;
  border-radius: 25px;
  flex-direction: row;
  justify-content: space-around;
`;

export const TextButton = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.regular}px;
  font-family: ${fonts.fontRegular};
`;
