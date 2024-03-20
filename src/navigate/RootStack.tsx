import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import InitViewScreen from '../screen/InitView';
import LoginScreen from '../screen/Login';
import BrandScreen from '../screen/Brand';
import ProductScreen from '../screen/Product';
import DetailProductScreen from '../screen/DetailProduct';

const Stack = createNativeStackNavigator();

const RootStack = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'InitView'} component={InitViewScreen} />
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name={'Brand'} component={BrandScreen} />
        <Stack.Screen name={'Product'} component={ProductScreen} />
        <Stack.Screen name={'DetailProduct'} component={DetailProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
