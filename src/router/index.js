import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// Import semua komponen dari halaman (pastikan sudah diekspor dengan benar di folder ../pages)
import {
  LoginScreen,
  HomeScreen,
  ListFacultyScreen,
  SelectRoomScreen,
  SelectEquipmentScreen,
  DetailRoomScreen,
  DetailRoomIlkom,
  DetailRoomTeknik,
  DetailRoomHukum,
  DetailRoomFP,
  DetailRoomKedokteran,
  FormRentEquipmentIlkom,
  FormRentEquipmentTeknik,
  FormRentEquipmentHukum,
  FormRentEquipmentFP,
  FormRentEquipmentKedokteran,
  FormRentScreen,
  FormRentRoom,
  FormRentRoomTeknik,
  FormRentRoomHukum,
  FormRentFP,
  FormRentRoomKedokteran,
  SelectRoomIlkom,
  SelectRoomTeknik,
  SelectRoomHukum,
  SelectRoomFP,
  SelectRoomKedokteran,
  SelectEquipmentIlkom,
  SelectEquipmentTeknik,
  SelectEquipmentHukum,
  SelectEquipmentFP,
  SelectEquipmentKedokteran,
  SuccessScreen,
  ReturningScreen,
  SuccessScreenReturn,
} from "../pages"; // Asumsikan ini benar jika di index.js

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ListFacultyScreen" component={ListFacultyScreen} />
      <Stack.Screen name="SelectRoomScreen" component={SelectRoomScreen} />
      <Stack.Screen name="SelectEquipmentScreen" component={SelectEquipmentScreen} />

      {/* Faculty Routes */}
      <Stack.Screen name="SelectRoomIlkom" component={SelectRoomIlkom} />
      <Stack.Screen name="SelectRoomTeknik" component={SelectRoomTeknik} />
      <Stack.Screen name="SelectRoomHukum" component={SelectRoomHukum} />
      <Stack.Screen name="SelectRoomFP" component={SelectRoomFP} />
      <Stack.Screen name="SelectRoomKedokteran" component={SelectRoomKedokteran} />
      
      <Stack.Screen name="SelectEquipmentIlkom" component={SelectEquipmentIlkom} />
      <Stack.Screen name="SelectEquipmentTeknik" component={SelectEquipmentTeknik} />
      <Stack.Screen name="SelectEquipmentHukum" component={SelectEquipmentHukum} />
      <Stack.Screen name="SelectEquipmentFP" component={SelectEquipmentFP} />
      <Stack.Screen name="SelectEquipmentKedokteran" component={SelectEquipmentKedokteran} />

      {/* Detail Room Routes */}
      <Stack.Screen name="DetailRoomScreen" component={DetailRoomScreen} />
      <Stack.Screen name="DetailRoomIlkom" component={DetailRoomIlkom} />
      <Stack.Screen name="DetailRoomTeknik" component={DetailRoomTeknik} />
      <Stack.Screen name="DetailRoomHukum" component={DetailRoomHukum} />
      <Stack.Screen name="DetailRoomFP" component={DetailRoomFP} />
      <Stack.Screen name="DetailRoomKedokteran" component={DetailRoomKedokteran} />

      {/* Form Rent Routes */}
      <Stack.Screen name="FormRentScreen" component={FormRentScreen} />
      <Stack.Screen name="FormRentRoom" component={FormRentRoom} />
      <Stack.Screen name="FormRentRoomTeknik" component={FormRentRoomTeknik} />
      <Stack.Screen name="FormRentRoomHukum" component={FormRentRoomHukum} />
      <Stack.Screen name="FormRentFP" component={FormRentFP} />
      <Stack.Screen name="FormRentRoomKedokteran" component={FormRentRoomKedokteran} />
      
      <Stack.Screen name="FormRentEquipmentIlkom" component={FormRentEquipmentIlkom} />
      <Stack.Screen name="FormRentEquipmentTeknik" component={FormRentEquipmentTeknik} />
      <Stack.Screen name="FormRentEquipmentHukum" component={FormRentEquipmentHukum} />
      <Stack.Screen name="FormRentEquipmentFP" component={FormRentEquipmentFP} />
      <Stack.Screen name="FormRentEquipmentKedokteran" component={FormRentEquipmentKedokteran} />

      {/* Success & Returning Screens */}
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen name="ReturningScreen" component={ReturningScreen} />
      <Stack.Screen name="SuccessScreenReturn" component={SuccessScreenReturn} />
    </Stack.Navigator>
  );
};

export default Router;