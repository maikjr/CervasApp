import React from 'react'
import { StatusBar } from 'react-native'

import Home from './screens/Home'
import Details from './screens/Details'
import Search from './screens/Search'
import NewDiscount from './screens/NewDiscount'

const home = () => (
  <>
    <StatusBar backgroundColor="#F9CF80" barStyle={'dark-content'} />
    <Home />
  </>
)

export default home
