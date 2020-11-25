import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import DrawerContent, {DRAWER_WIDTH, assets} from "./Components/Drawer";
import {HomeRoutes} from "./Helpers/Navigation";
import Home from "./Screens/Home";
import Search from "./Screens/Search";

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => (
  <Drawer.Navigator drawerContent={() => <DrawerContent/>} drawerStyle={{
      width: DRAWER_WIDTH
  }}>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Search" component={Search} />
</Drawer.Navigator>
);