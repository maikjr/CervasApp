import styled from 'styled-components/native'
import RBSheet from 'react-native-raw-bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

import { colors, fonts } from '../../assets/styles'

export const Container = styled.ScrollView`
  flex: 1;
`
export const Content = styled.View`
  flex: 1;
`
export const TitlePage = styled.Text`
  font-family: ${fonts.fontLight};
  font-size: 30px;
  margin: 20px;
`
export const Section = styled.View`
  background-color: #f2f2f2;
  margin: 10px 0;
  padding: 10px 20px;
`
export const SectionPrice = styled.View`
  margin: 10px 0;
  padding: 10px 20px;
`

export const Label = styled.Text`
  font-family: ${fonts.fontRegular};
  font-size: 14px;
  letter-spacing: 1.3px;
  color: ${colors.regular};
`
export const SelectOption = styled.TouchableOpacity`
  margin: 5px 0;
`
export const SelectOptionText = styled.Text`
  font-family: ${fonts.fontRegular};
  font-size: 20px;
  letter-spacing: 1.3px;
  color: ${colors.darker};
`
export const SectionPriceContent = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const SectionPriceText = styled.Text`
  font-family: ${fonts.fontLight};
  font-size: 40px;
  letter-spacing: 1.3px;
  color: ${colors.darker};
`
export const SectionPriceInput = styled.TextInput`
  font-size: 40px;
  letter-spacing: 1.3px;
  color: ${colors.darker};
  font-family: ${fonts.fontLight};
  flex: 1;
`
export const BottomSheet = styled(RBSheet).attrs({
  customStyles: {
    container: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingVertical: 10,
    },
    wrapper: {
    },
    draggableIcon: {
      backgroundColor: '#ccc',
    },
  },
})``;

export const Loading = styled(ShimmerPlaceHolder)`
  width: 90%;
`;
