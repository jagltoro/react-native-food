import React from 'react';
import Header from '../../Components/Header';
import {Box,Text} from '../../Helpers';
import { HomeNavigationProps } from '../../Helpers/Navigation';


const Home = ({navigation}: HomeNavigationProps<"Home">) => {
  return (
    <Box>
      <Header
        left={{
          icon: 'menu',
          color: "text",
          backgroundColor: "background",
          onPress: () => navigation.openDrawer()
        }}
        title={"Home"}
        color={"text"}
        right={{
          icon: 'edit',
          color: "text",
          backgroundColor: "background",
          onPress: () => true
        }}
      />
      <Text>Home</Text>
    </Box>
  );
};

export default Home;