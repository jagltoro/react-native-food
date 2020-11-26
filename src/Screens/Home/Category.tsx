import * as React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, Text } from "../../Helpers";

interface CategoryProps {
  picture: number;
  title: string;
  onPress: () => void;
  marginLeft?: string
}

const Category = ({ picture, title, onPress, marginLeft }: CategoryProps) => {
  const { width } = Dimensions.get("window");
  return (
    <TouchableOpacity activeOpacity={0.7} {...{ onPress }}>
      <Box
        height={136}
        width={width / 2 - 20}
        justifyContent="center"
        alignItems="center"
        marginBottom="s"
        {...{marginLeft}}
      >
        <Image
          source={picture}
          style={{ width: "100%", height: "100%", borderRadius: 10 }}
        />
        <Box style={{...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 10}}/>
        <Text style={{position: "absolute", fontSize: 16, color: "#FFFFFF"}}>{title}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Category;
