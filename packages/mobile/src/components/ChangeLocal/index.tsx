import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import {GOOGLE_API_KEY} from '@env'

import {fonts} from '../../assets/styles';

import {
  Container,
} from './styles';

const ChangeLocal: React.FC = ({onLocationSelected}) => {
  return (
    <Container>
      <GooglePlacesAutocomplete
      placeholder='Pesquisar cidade'
      placeholderTextColor="#222"
      onPress={onLocationSelected}
      query={{
        key: GOOGLE_API_KEY,
        language: 'pt',
        components: 'country:br',
      }}
      textInputProps={{
        autoCapitalize: "none",
        autoCorrect: false
      }}
      fetchDetails
      enablePoweredByContainer={false}
      styles={{
        container: {
          width: "100%",
          marginTop: 10,
        },
        textInputContainer: {
          backgroundColor: "#f2f2f2",
          height: 85,
          alignItems: "center",
          paddingHorizontal: 20,
          borderTopWidth: 0,
          borderBottomWidth: 0
        },
        textInput: {
          height: 54,
          margin: 0,
          borderRadius: 4,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          backgroundColor: "#fff",
          color: "#444",
          fontSize: 15
        },
        listView: {
          backgroundColor: "#FFF",
          marginHorizontal: 15,
          marginTop: 5
        },
        description: {
          fontSize: 15,
          color: "#444",
          fontFamily: fonts.fontRegular,
        },
        row: {
          paddingVertical: 20,
          paddingLeft: 0,
          height: 58,
        }
      }}
    />
    </Container>
  );
}

export default ChangeLocal;
