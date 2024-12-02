import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Bottomtabs from "../components/molecules/BottomTabs";

import {
  AcademicScreen,
  HomeScreen,
  LoginScreen,
  OtherScreen,
  MessageScreen,
  AccountScreen,
  ListFacultyScreen,
  SelectRoomScreen,
  SelectEquipmentScreen,
  DetailRoomScreen,
  DetailRoomIlkom,
  FormRentEquipmentIlkom,
  FormRentScreen,
  FormRentEquipmentScreen,
  SuccessScreen,
  SelectRoomIlkom,
  SelectEquipmentIlkom,
} from "../pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();

// function MainApp() {
//   return (
//     <Tab.Navigator
//       screenOptions={{ headerShown: false }}
//       tabBar={(props) => <BottomTabs {...props} />}
//     >
//       <Tab.Screen name="HomeScreen" component={HomeScreen} />
//       <Tab.Screen name="OtherScreen" component={OtherScreen} />
//       <Tab.Screen name="AcademicScreen" component={AcademicScreen} />
//       <Tab.Screen name="MessageScreen" component={MessageScreen} />
//       <Tab.Screen name="AccountScreen" component={AccountScreen} />
//     </Tab.Navigator>
//   );
// }

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ListFacultyScreen" component={ListFacultyScreen} />
      <Stack.Screen name="SelectRoomScreen" component={SelectRoomScreen} />
      <Stack.Screen
        name="SelectEquipmentScreen"
        component={SelectEquipmentScreen}
      />
      <Stack.Screen name="SelectRoomIlkom" component={SelectRoomIlkom} />
      <Stack.Screen name="SelectEquipmentIlkom" component={SelectEquipmentIlkom} />
      <Stack.Screen name="DetailRoomScreen" component={DetailRoomScreen} />
      <Stack.Screen name="DetailRoomIlkom" component={DetailRoomIlkom} />
      <Stack.Screen name="FormRentScreen" component={FormRentScreen} />
      <Stack.Screen name="FormRentEquipmentScreen" component={FormRentEquipmentScreen} />
      <Stack.Screen name="FormRentEquipmentIlkom" component={FormRentEquipmentIlkom} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
     
      {/* <Stack.Screen name="MainApp" component={MainApp} /> */}
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
