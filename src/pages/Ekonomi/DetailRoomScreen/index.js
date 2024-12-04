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
import arrowLeft from "../../../assets/icons/arrow-left.png";
import detailRuangan1 from "../../../assets/images/detail-ruangan-1.png";
import detailRuangan2 from "../../../assets/images/detail-ruangan-2.png";
import detailRuangan3 from "../../../assets/images/detail-ruangan-3.png";
import detailRuangan4 from "../../../assets/images/detail-ruangan-4.png";
import proyektor from "../../../assets/icons/proyektor.png";
import chair from "../../../assets/icons/chair.png";
import table from "../../../assets/icons/table.png";

const DetailRoomScreen = ({ navigation, route }) => {
    const {image} = route.params;

     const handleFormRentScreen = () => {
       // Navigasi ke HomeScreen setelah login
       navigation.navigate("FormRentScreen");
     };

     const handleBackButton = () => {
      navigation.goBack();
     }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Bagian Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={handleBackButton}>
          <Image style={styles.arrowIcon} source={arrowLeft} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBox}
          placeholder="Apa yang kamu cari hari ini"
        />
      </View>

      {/* Bagian Detail Ruangan */}
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Detail Ruangan</Text>
        <Text style={styles.facultyText}>Fakultas Ekonomi</Text>
      </View>

      {/* Gambar Utama */}
      <Image
        style={styles.mainImage}
        source={image}
      />

      {/* Gambar Tambahan */}
      <View style={styles.additionalImagesContainer}>
        <Image
          style={[styles.additionalImage, styles.selectedImage]}
          source={detailRuangan2}
        />
        <Image
          style={styles.additionalImage}
          source={detailRuangan3}
        />
        <Image
          style={styles.additionalImage}
          source={detailRuangan4}
        />
      </View>

      {/* Info Ruangan */}
      <View style={styles.roomInfoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Nama Ruangan:</Text> Advancing Class
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Lokasi:</Text> Gedung Fasilkom Bukit
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Kapasitas:</Text> 50 Orang
        </Text>
      </View>

      {/* Fasilitas */}
      <Text style={styles.facilitiesTitle}>FASILITAS</Text>
      <View style={styles.facilitiesContainer}>
        <View style={styles.facilityItem}>
          <Image
            style={styles.facilityIcon}
            source={proyektor}
          />
          <Text style={styles.facilityText}>Proyektor</Text>
          <Text style={styles.facilityCount}>5</Text>
        </View>
        <View style={styles.facilityItem}>
          <Image
            style={styles.facilityIcon}
            source={chair}
          />
          <Text style={styles.facilityText}>Kursi</Text>
          <Text style={styles.facilityCount}>150</Text>
        </View>
        <View style={styles.facilityItem}>
          <Image
            style={styles.facilityIcon}
            source={table}
          />
          <Text style={styles.facilityText}>Meja</Text>
          <Text style={styles.facilityCount}>26</Text>
        </View>
      </View>

      {/* Tombol Pinjam */}
      <TouchableOpacity
        style={styles.pinjamButton}
        onPress={handleFormRentScreen}
      >
        <Text style={styles.pinjamButtonText}>PINJAM</Text>
      </TouchableOpacity>

    
    </ScrollView>
  );
};

export default DetailRoomScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3470A2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  searchBox: {
    flex: 1,
    height: 46,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 25,
    borderColor: "#D1D1D1",
    borderWidth: 1,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  searchIcon: {
    width: 20,
    height: 20,
    backgroundColor: "#8A8A8A",
  },
  searchText: {
    color: "#8A8A8A",
    fontSize: 14,
    marginLeft: 10,
  },
  detailContainer: {
    paddingHorizontal: 17,
    marginTop: 20,
  },
  detailTitle: {
    color: "#002649",
    fontSize: 18,
    fontWeight: "700",
  },
  facultyText: {
    color: "#8A8A8A",
    fontSize: 12,
    marginTop: 5,
  },
  mainImage: {
    width: 299,
    height: 186,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 8,
  },
  additionalImagesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  additionalImage: {
    width: 89,
    height: 63,
    borderRadius: 8,
  },
  selectedImage: {
    borderColor: "#3470A2",
    borderWidth: 3,
  },
  roomInfoContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  infoText: {
    color: "#002649",
    fontSize: 15,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "700",
  },
  facilitiesTitle: {
    color: "#002649",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },
  facilitiesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  facilityItem: {
    alignItems: "center",
  },
  facilityIcon: {
    width: 58,
    height: 58,
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  facilityText: {
    color: "#002649",
    fontSize: 16,
    marginTop: 10,
  },
  facilityCount: {
    color: "#002649",
    fontSize: 16,
    marginTop: 5,
  },
  pinjamButton: {
    backgroundColor: "#3470A2",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginHorizontal: 50,
    marginTop: 30,
  },
  pinjamButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#8C8994",
  },
  navText: {
    color: "#8C8994",
    fontSize: 10,
    marginTop: 5,
  },
  navTextActive: {
    color: "#FFC727",
    fontSize: 10,
    marginTop: 5,
  },
});
