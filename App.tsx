import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from "@react-navigation/stack";
import {ThemeProvider} from '@shopify/restyle';

import {theme} from "./src/Helpers/Theme";
import {LoadAssets} from "./src/Helpers";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {HomeNavigator} from "./src/Navigator";
import {StackRoutes} from './src/Helpers/Navigation';

// const assets:any = []
const fonts = {
  "SF-Bold": require("#/fonts/SF-Pro-Display-Bold.otf"),
  "SF-Semibold": require("#/fonts/SF-Pro-Display-Semibold.otf"),
  "SF-Medium": require("#/fonts/SF-Pro-Display-Medium.otf"),
  "SF-Regular": require("#/fonts/SF-Pro-Display-Regular.otf"),
};

const AppStack = createStackNavigator<StackRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <SafeAreaProvider>
        <LoadAssets {...{fonts}}>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Home" component={HomeNavigator}/>
          </AppStack.Navigator>
        </LoadAssets>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}