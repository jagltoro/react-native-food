import React from 'react';
import {Dimensions} from "react-native";

import {Box, Text} from "../../Helpers";
import DrawerItem, {DrawerItemProps} from "./DrawerItem";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const {width, height: wHeight} = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const avatarSize = wHeight > 700 ? 100 : 80

const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "Home",
    color: "primary"
  }
]

const Drawer = () => {
  const inset = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box flex={1}>
        <Box
          flex={1}
          backgroundColor={"primary"}/>
        <Box
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor={"background"}
          borderTopLeftRadius={"xl"}
          borderBottomRightRadius={"xl"}
          justifyContent={"center"}
          padding={"s"}
        >
          <Box
            top={inset.top}
            position={"absolute"}
            backgroundColor={"primary"}
            width={avatarSize}
            height={avatarSize}
            style={{borderRadius: avatarSize/2}}
            alignSelf={"center"}/>
          <Box marginBottom={"m"} paddingTop={"s"}>
            <Text
              variant={"text"}
              textAlign={"center"}>
              Mike Peter
            </Text>
            <Text
              variant={"text"}
              textAlign={"center"}>
              mike@flexinstudio.com
            </Text>
          </Box>
          {items.map(item => (<DrawerItem key={item.icon} {...item} />))}
        </Box>
      </Box>
    </Box>
  );
};

export default Drawer;