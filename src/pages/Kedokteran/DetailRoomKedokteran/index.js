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
import microscope from "../../../assets/icons/microscope.png";
import operatingTable from "../../../assets/icons/operating-table.png";
import sterilizer from "../../../assets/icons/sterilizer.png";

const DetailRoomKedokteran = ({ navigation, route }) => {
  const { image } = route.params;

  const handleFormRentKedokteran = () => {
    navigation.navigate("FormRentKedokteran");
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Bagian Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={handleBackButton}>
          <Image style={styles.arrowIcon} source={arrowLeft} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBox}
          placeholder="Cari ruangan atau peralatan"
        />
      </View>

      {/* Bagian Detail Ruangan */}
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Detail Ruangan</Text>
        <Text style={styles.facultyText}>Fakultas Kedokteran</Text>
      </View>

      {/* Gambar Utama */}
      <Image style={styles.mainImage} source={image} />

      {/* Gambar Tambahan */}
      <View style={styles.additionalImagesContainer}>
        <Image
          style={[styles.additionalImage, styles.selectedImage]}
          source={detailRuangan2}
        />
        <Image style={styles.additionalImage} source={detailRuangan3} />
        <Image style={styles.additionalImage} source={detailRuangan4} />
      </View>

      {/* Info Ruangan */}
      <View style={styles.roomInfoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Nama Ruangan:</Text> Laboratorium Anatomi
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Lokasi:</Text> Gedung B, Lantai 2
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Kapasitas:</Text> 30 Orang
        </Text>
      </View>

      {/* Fasilitas */}
      <Text style={styles.facilitiesTitle}>FASILITAS</Text>
      <View style={styles.facilitiesContainer}>
        <View style={styles.facilityItem}>
          <Image style={styles.facilityIcon} source={microscope} />
          <Text style={styles.facilityText}>Mikroskop</Text>
          <Text style={styles.facilityCount}>10</Text>
        </View>
        <View style={styles.facilityItem}>
          <Image style={styles.facilityIcon} source={operatingTable} />
          <Text style={styles.facilityText}>Meja Operasi</Text>
          <Text style={styles.facilityCount}>5</Text>
        </View>
        <View style={styles.facilityItem}>
          <Image style={styles.facilityIcon} source={sterilizer} />
          <Text style={styles.facilityText}>Alat Sterilisasi</Text>
          <Text style={styles.facilityCount}>3</Text>
        </View>
      </View>

      {/* Tombol Pinjam */}
      <TouchableOpacity
        style={styles.pinjamButton}
        onPress={handleFormRentKedokteran}
      >
        <Text style={styles.pinjamButtonText}>PINJAM</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailRoomKedokteran;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
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
  searchBox: {
    flex: 1,
    height: 46,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 25,
    borderColor: "#D1D1D1",
    borderWidth: 1,
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
});