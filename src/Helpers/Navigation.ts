import {RouteProp} from '@react-navigation/native';
import {DrawerNavigationProp} from "@react-navigation/drawer";

export interface HomeNavigationProps< RouteName extends keyof HomeRoutes > {
  navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
  route: RouteProp<HomeRoutes,RouteName>
}
export type StackRoutes = {
  Home: undefined;
}

export type HomeRoutes = {
  Home: undefined;
  Search: undefined;
}