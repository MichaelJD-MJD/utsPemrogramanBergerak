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

const DetailRoomScreen = ({ navigation }) => {

     const handleFormRentScreen = () => {
       // Navigasi ke HomeScreen setelah login
       navigation.navigate("FormRentScreen");
     };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Bagian Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <View style={styles.arrowLeft}></View>
        </TouchableOpacity>
        <View style={styles.searchBox}>
          <View style={styles.searchIcon}></View>
          <Text style={styles.searchText}>Apa yang kamu cari hari ini</Text>
        </View>
      </View>

      {/* Bagian Detail Ruangan */}
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Detail Ruangan</Text>
        <Text style={styles.facultyText}>Fakultas Ilmu Komputer</Text>
      </View>

      {/* Gambar Utama */}
      <Image
        style={styles.mainImage}
        source={{ uri: "https://via.placeholder.com/299x186" }}
      />

      {/* Gambar Tambahan */}
      <View style={styles.additionalImagesContainer}>
        <Image
          style={[styles.additionalImage, styles.selectedImage]}
          source={{ uri: "https://via.placeholder.com/89x63" }}
        />
        <Image
          style={styles.additionalImage}
          source={{ uri: "https://via.placeholder.com/89x63" }}
        />
        <Image
          style={styles.additionalImage}
          source={{ uri: "https://via.placeholder.com/89x63" }}
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
            source={{ uri: "https://via.placeholder.com/66x57" }}
          />
          <Text style={styles.facilityText}>Proyektor</Text>
          <Text style={styles.facilityCount}>5</Text>
        </View>
        <View style={styles.facilityItem}>
          <Image
            style={styles.facilityIcon}
            source={{ uri: "https://via.placeholder.com/58x54" }}
          />
          <Text style={styles.facilityText}>Kursi</Text>
          <Text style={styles.facilityCount}>150</Text>
        </View>
        <View style={styles.facilityItem}>
          <Image
            style={styles.facilityIcon}
            source={{ uri: "https://via.placeholder.com/58x54" }}
          />
          <Text style={styles.facilityText}>Meja</Text>
          <Text style={styles.facilityCount}>26</Text>
        </View>
      </View>

      {/* Tombol Pinjam */}
      <TouchableOpacity style={styles.pinjamButton} onPress={handleFormRentScreen}>
        <Text style={styles.pinjamButtonText}>PINJAM</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon}></View>
          <Text style={styles.navTextActive}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon}></View>
          <Text style={styles.navText}>Lainnya</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon}></View>
          <Text style={styles.navText}>Akademik</Text>
        </TouchableOpacity>
      </View>
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
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: "#3470A2",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowLeft: {
    width: 20,
    height: 20,
    backgroundColor: "white",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 20,
    height: 46,
    borderWidth: 1,
    shadowColor: "rgba(26, 26, 26, 0.1)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
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
