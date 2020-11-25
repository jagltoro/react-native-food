import React from 'react';
import {useNavigation} from "@react-navigation/native";
import {RectButton} from "react-native-gesture-handler";
import {DrawerNavigationProp} from "@react-navigation/drawer";

import {HomeRoutes} from "../../Helpers/Navigation";
import {Box, Text, Theme} from "../../Helpers";
import RoundedIcon from '../RoundedIcon';

export interface DrawerItemProps {
  icon: string;
  label: string;
  screen: keyof HomeRoutes;
  color: keyof Theme["colors"];
}

const DrawerItem = ({icon, label, screen, color}: DrawerItemProps) => {
  const {navigate} = useNavigation<DrawerNavigationProp<HomeRoutes, "Home">>();
  return (
    <RectButton onPress={() => navigate(screen)}>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        padding={"s"}
        borderRadius={"m"}
      >
        <RoundedIcon
          name={icon}
          size={36}
          iconRatio={0.5}
          color={"background"}
          backgroundColor={color}/>
        <Text variant={"text"} marginLeft={"m"}>
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;