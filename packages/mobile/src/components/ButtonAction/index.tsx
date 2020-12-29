import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { colors } from '../../assets/styles'

import { Container, ButtonActionLabel, ButtonActionText } from './styles'

type ButtonActionType = {
  onPress: () => void
  label: string
}

const ButtonAction: FC<ButtonActionType> = ({ onPress, label, children }) => {
  return (
    <Container onPress={onPress}>
      <ButtonActionLabel>{label}</ButtonActionLabel>
      <ButtonActionText>
        {children} <Icon name="arrow-right" size={28} color={colors.darker} />
      </ButtonActionText>
    </Container>
  )
}

export default ButtonAction
