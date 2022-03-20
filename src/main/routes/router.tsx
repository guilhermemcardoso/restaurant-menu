import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

interface RouterProps {
  children: JSX.Element;
}

export const Stack = createNativeStackNavigator();
export default function Router({children}: RouterProps) {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {children}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
