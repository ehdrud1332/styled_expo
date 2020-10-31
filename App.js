import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IntrodusScreen from './screen/IntrodusScreen';
import MainScreen from './screen/MainSreen';
import DetailScreen from './screen/DetailScreen'

const MainStack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <MainStack.Navigator headerMode='none'>
    //       <MainStack.Screen
    //           name='IntrodusScreen'
    //           component={IntrodusScreen}
    //       />
    //       <MainStack.Screen
    //           name='MainScreen'
    //           component={MainScreen}
    //       />
    //       <MainStack.Screen
    //           name='DetailScreen'
    //           component={DetailScreen}
    //       />
    //   </MainStack.Navigator>
    // </NavigationContainer>
      <NavigationContainer>
          <MainStack.Navigator headerMode="none">
              <MainStack.Screen
                  name="IntrodusScreen"
                  component={IntrodusScreen}></MainStack.Screen>
              <MainStack.Screen
                  name="MainScreen"
                  component={MainScreen}></MainStack.Screen>
              <MainStack.Screen
                  name="DetailScreen"
                  component={DetailScreen}></MainStack.Screen>
          </MainStack.Navigator>
      </NavigationContainer>
  );
};

export default App;
