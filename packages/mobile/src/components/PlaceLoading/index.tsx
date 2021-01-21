import React from 'react'

import {
  Container,
  PlaceLeft,
  PlacePlace,
  PlaceTitle,
  PlaceFooter,
  PlacePrice,
} from './styles'

const PlaceLoading: React.FC = () => {
  return (
    <Container>
      <PlaceLeft>
        <PlacePlace />
        <PlaceTitle />
        <PlaceFooter>
          <PlacePrice />
        </PlaceFooter>
      </PlaceLeft>
    </Container>
  )
}

export default PlaceLoading
