import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home'
import Details from './screens/Details'
import Search from './screens/Search'
import CreateDiscount from './screens/CreateDiscount'

const Stack = createStackNavigator();

const home = () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#F9CF80" barStyle={'dark-content'} />
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }}/>
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateDiscount" component={CreateDiscount} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
)

export default home
