import React, {useState, useEffect} from 'react'
import api from '@cervasapp/axios-config'

import { Container, Content } from './styles'

import Header from '../../components/Header'
import DetailsDiscount from '../../components/DetailsDiscount'
import PlaceDetail from '../../components/PlaceDetails'
import PlaceLoading from '../../components/PlaceLoading'
import ButtonAction from '../../components/ButtonAction'

const Details = ({route}) => {
  const { discount } = route.params;

  const [getLoadingScreen, setLoadingScreen] = useState(true);
  const [getDiscountsRelated, setDiscountsRelated] = useState([]);

  const searchDiscountsRelated = async () => {
    setLoadingScreen(true);
    try{
      const response = await api.get(`/related/${discount.id}`);
      const {discounts} = response.data;

      setDiscountsRelated(discounts);
      setLoadingScreen(false);
    }catch(err){
      alert(JSON.stringify(err));
    }
  }

  useEffect(() => {
    searchDiscountsRelated()
  }, [])

  return (
    <>
      <Container>
        <Header />
        <Content>
          <DetailsDiscount discount={discount} />
          <PlaceDetail discount={discount} selected />
          {getLoadingScreen ? (
            <>
              <PlaceLoading />
              <PlaceLoading />
              <PlaceLoading />
            </>
            ) : getDiscountsRelated.map(related => (
              <PlaceDetail key={related.id} discount={related} />
            ))}
        </Content>
      </Container>
      <ButtonAction label="colabore conosco">Sugerir novo preço</ButtonAction>
    </>
  )
}

export default Details
