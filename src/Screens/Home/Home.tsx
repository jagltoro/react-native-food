import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../Components/Header';
import {Box,Text} from '../../Helpers';
import { HomeNavigationProps } from '../../Helpers/Navigation';
import Category from './Category';

const items = [
  {
    id: 1,
    title: "Chinese",
    picture: require("#/images/chinese_food_image.png")
  },
  {
    id: 2,
    title: "Greek",
    picture: require("#/images/greek_food_image.png")
  },
  {
    id: 3,
    title: "Pizza",
    picture: require("#/images/pizza_image.png")
  },
  {
    id: 4,
    title: "Burgers",
    picture: require("#/images/burgers_image.png")
  },
  {
    id: 5,
    title: "Indian",
    picture: require("#/images/indian_food_image.png")
  },
  {
    id: 6,
    title: "Mexican",
    picture: require("#/images/mexican_food_image.png")
  },
  {
    id: 7,
    title: "Japanese",
    picture: require("#/images/japanese_food_image.png")
  },
  {
    id: 8,
    title: "Healthy",
    picture: require("#/images/healthy_food_image.png")
  },
  {
    id: 9,
    title: "Korean",
    picture: require("#/images/korean_food_image.png")
  },
  {
    id: 10,
    title: "Vietnamese",
    picture: require("#/images/vietnamese_food_image.png")
  }
];

const Home = ({navigation}: HomeNavigationProps<"Home">) => {
  return (
    <Box flex={1} backgroundColor="background">
      <Header
        left={{
          icon: 'menu',
          color: "text",
          backgroundColor: "background",
          onPress: () => navigation.openDrawer()
        }}
        title={"You are in"}
        location={"Upper East Side"}
        color={"headerText"}
        right={{
          icon: 'search',
          color: "text",
          backgroundColor: "background",
          onPress: () => true
        }}
      />
      <Box justifyContent="center" alignItems="center" paddingTop="m">
        <Box flexDirection="row" backgroundColor="headerText" borderRadius="l" style={{paddingVertical: 3, paddingHorizontal: 3}}>
          <Box paddingHorizontal="l" backgroundColor="background" borderRadius="l">
            <Text variant="filterText">DISCOVER</Text>
          </Box>
          <Box paddingHorizontal="l"  backgroundColor="headerText" borderRadius="l">
            <Text variant="filterText" color="white">NEARBY</Text>
          </Box>
        </Box>
        <Text marginTop="m" marginBottom="s" variant="topCategories">Top Categories</Text>
      </Box>
      <ScrollView>
        <Box padding="m" flexDirection="row" justifyContent="space-around">
          <Box>
          {
            items.filter(({id}) => id % 2 !== 0).map((item) =>
              <Category picture={item.picture} title={item.title} onPress={() => true} />
            )}
          </Box>
          <Box>
          {
            items.filter(({id}) => id % 2 === 0).map((item) =>
              <Category picture={item.picture} title={item.title} onPress={() => true} marginLeft="m" />
            )}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Home;