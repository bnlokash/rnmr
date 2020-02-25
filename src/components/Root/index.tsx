import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Counter from '../Counter';
import FetchButton from '../FetchButton';

const Tab = createBottomTabNavigator();

const Root = () => 
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Counter" component={Counter} />
        <Tab.Screen name="FetchButton" component={FetchButton} />
      </Tab.Navigator>
    </NavigationContainer>

export default Root;


