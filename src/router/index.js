import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
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
  DetailRoomTeknik,
  DetailRoomHukum,
  DetailRoomFP,
  DetailRoomKedokteran, // Import baru
  FormRentEquipmentIlkom,
  FormRentEquipmentTeknik,
  FormRentEquipmentHukum,
  FormRentEquipmentFP,
  FormRentEquipmentKedokteran, // Import baru
  FormRentScreen,
  FormRentRoom,
  FormRentRoomTeknik,
  FormRentRoomHukum,
  FormRentFP,
  FormRentKedokteran, // Import baru
  SelectRoomIlkom,
  SelectRoomTeknik,
  SelectRoomHukum,
  SelectRoomFP,
  SelectRoomKedokteran, // Import baru
  SelectEquipmentIlkom,
  SelectEquipmentTeknik,
  SelectEquipmentHukum,
  SelectEquipmentFP,
  SelectEquipmentKedokteran, // Import baru
  SuccessScreen,
  ReturningScreen,
  SuccessScreenReturn,
} from "../pages";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ListFacultyScreen" component={ListFacultyScreen} />
      <Stack.Screen name="SelectRoomScreen" component={SelectRoomScreen} />
      <Stack.Screen name="SelectEquipmentScreen" component={SelectEquipmentScreen} />
      <Stack.Screen name="SelectRoomIlkom" component={SelectRoomIlkom} />
      <Stack.Screen name="SelectRoomTeknik" component={SelectRoomTeknik} />
      <Stack.Screen name="SelectRoomHukum" component={SelectRoomHukum} />
      <Stack.Screen name="SelectRoomFP" component={SelectRoomFP} />
      <Stack.Screen name="SelectRoomKedokteran" component={SelectRoomKedokteran} /> {/* Screen baru */}
      <Stack.Screen name="SelectEquipmentIlkom" component={SelectEquipmentIlkom} />
      <Stack.Screen name="SelectEquipmentTeknik" component={SelectEquipmentTeknik} />
      <Stack.Screen name="SelectEquipmentHukum" component={SelectEquipmentHukum} />
      <Stack.Screen name="SelectEquipmentFP" component={SelectEquipmentFP} />
      <Stack.Screen name="SelectEquipmentKedokteran" component={SelectEquipmentKedokteran} /> {/* Screen baru */}
      <Stack.Screen name="DetailRoomScreen" component={DetailRoomScreen} />
      <Stack.Screen name="DetailRoomIlkom" component={DetailRoomIlkom} />
      <Stack.Screen name="DetailRoomTeknik" component={DetailRoomTeknik} />
      <Stack.Screen name="DetailRoomHukum" component={DetailRoomHukum} />
      <Stack.Screen name="DetailRoomFP" component={DetailRoomFP} />
      <Stack.Screen name="DetailRoomKedokteran" component={DetailRoomKedokteran} /> {/* Screen baru */}
      <Stack.Screen name="FormRentScreen" component={FormRentScreen} />
      <Stack.Screen name="FormRentRoom" component={FormRentRoom} />
      <Stack.Screen name="FormRentRoomTeknik" component={FormRentRoomTeknik} />
      <Stack.Screen name="FormRentRoomHukum" component={FormRentRoomHukum} />
      <Stack.Screen name="FormRentFP" component={FormRentFP} />
      <Stack.Screen name="FormRentKedokteran" component={FormRentKedokteran} /> {/* Screen baru */}
      <Stack.Screen name="FormRentEquipmentIlkom" component={FormRentEquipmentIlkom} />
      <Stack.Screen name="FormRentEquipmentTeknik" component={FormRentEquipmentTeknik} />
      <Stack.Screen name="FormRentEquipmentHukum" component={FormRentEquipmentHukum} />
      <Stack.Screen name="FormRentEquipmentFP" component={FormRentEquipmentFP} />
      <Stack.Screen name="FormRentEquipmentKedokteran" component={FormRentEquipmentKedokteran} /> {/* Screen baru */}
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen name="ReturningScreen" component={ReturningScreen} />
      <Stack.Screen name="SuccessScreenReturn" component={SuccessScreenReturn} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
