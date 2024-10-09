import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

const SuccessScreen = ({ navigation }) => {

     const handleHomeScreen = () => {
       // Navigasi ke HomeScreen setelah login
       navigation.navigate("HomeScreen");
     };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{ uri: "https://via.placeholder.com/275x278" }}
        style={styles.image}
      />

      {/* Notification Text */}
      <Text style={styles.title}>Peminjaman Disetujui</Text>
      <Text style={styles.description}>Peminjaman berhasil disetujui</Text>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleHomeScreen}>
        <Text style={styles.buttonText}>Beranda</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 275,
    height: 278,
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#002649",
    marginTop: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontWeight: "300",
    color: "#002649",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#3470A2",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
    textAlign: "center",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    borderTopWidth: 2,
    borderTopColor: "#D9D9D9",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#FFC727",
  },
  navIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#8C8994",
  },
  activeText: {
    fontSize: 10,
    color: "#FFC727",
    marginTop: 5,
  },
  inactiveText: {
    fontSize: 10,
    color: "#8C8994",
    marginTop: 5,
  },
});
