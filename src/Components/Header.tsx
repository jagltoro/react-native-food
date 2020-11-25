import React from 'react';
import {useSafeAreaInsets} from "react-native-safe-area-context";

import RoundedIconButton from './RoundedIconButton';
import {Box, Text, Theme} from "../Helpers";

interface HeaderProps {
  left: {
    icon: string;
    color: keyof Theme["colors"];
    backgroundColor: keyof Theme["colors"];
    onPress: () => void
  },
  title: string;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  right: {
    icon: string;
    color: keyof Theme["colors"];
    backgroundColor: keyof Theme["colors"];
    onPress: () => void
  }
}

const Header = ({left, right, title, color, backgroundColor}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      justifyContent={"space-between"}
      paddingHorizontal={"m"}
      flexDirection={"row"}
      style={{paddingTop: insets.top}}
      {...{backgroundColor}}
    >
      <RoundedIconButton
        name={left.icon}
        color={left.color}
        backgroundColor={left.backgroundColor}
        onPress={left.onPress}
        size={44}
        iconRatio={0.5}
      />
      <Text
        paddingTop={"s"}
        variant={"text"}
        color={color}>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        color={right.color}
        backgroundColor={right.backgroundColor}
        onPress={right.onPress}
        size={44}
        iconRatio={0.5}
      />
    </Box>
  );
};

Header.defaultProps = {
  backgroundColor: "background"
}

export default Header;