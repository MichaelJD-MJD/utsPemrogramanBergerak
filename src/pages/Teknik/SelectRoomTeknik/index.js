import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from "react-native";
import React from "react";
import arrowLeft from "../../../assets/icons/arrow-left.png";
import selectRoom1 from "../../../assets/images/select-room-1.png";
import selectRoom2 from "../../../assets/images/select-room-2.png";
import selectRoom3 from "../../../assets/images/select-room-3.png";

const SelectRoomTeknik = ({ navigation }) => {
  const handleDetailRoomTeknik = (image) => {
    navigation.navigate("DetailRoomTeknik", {
      image,
    });
  };

  const handleSelectEquipmentTeknik = () => {
    navigation.navigate("SelectEquipmentTeknik")
  }

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={handleBackButton}>
          <Image style={styles.arrowIcon} source={arrowLeft} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBox}
          placeholder="Ruangan Apa yang kamu cari hari ini"
        />
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.fakultasText}>Fakultas Teknik</Text>
        <Text style={styles.detailsText}>
          Buka detail untuk informasi lebih lanjut
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.actionButton, styles.ruanganButton]}>
          <Text style={styles.buttonLabel}>Ruangan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.peralatanButton]}
          onPress={handleSelectEquipmentTeknik}
        >
          <Text style={styles.buttonLabel}>Peralatan</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.roomCard}>
          <Image style={styles.mainImage} source={selectRoom1} />
          <Text style={styles.roomName}>Ruangan: Advancing Class</Text>
          <Text style={styles.roomDetails}>Lokasi: Kampus Bukit</Text>
          <Text style={styles.roomDetails}>Kapasitas: 50 Orang</Text>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={() => handleDetailRoomTeknik(selectRoom1)}
          >
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.roomCard}>
          <Image style={styles.mainImage} source={selectRoom2} />
          <Text style={styles.roomName}>Ruangan: Aula Serbaguna Lt.3</Text>
          <Text style={styles.roomDetails}>Lokasi: Kampus Indralaya</Text>
          <Text style={styles.roomDetails}>Kapasitas: 75 Orang</Text>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={() => handleDetailRoomTeknik(selectRoom2)}
          >
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.roomCard}>
          <Image style={styles.mainImage} source={selectRoom3} />
          <Text style={styles.roomName}>Ruangan: Ruang Kelas 4.2</Text>
          <Text style={styles.roomDetails}>Lokasi: Kampus Bukit</Text>
          <Text style={styles.roomDetails}>Kapasitas: 50 Orang</Text>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={() => handleDetailRoomTeknik(selectRoom3)}
          >
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SelectRoomTeknik;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
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
  infoSection: {
    marginTop: 20,
  },
  fakultasText: {
    color: "#002649",
    fontSize: 18,
    fontWeight: "700",
  },
  detailsText: {
    color: "#8A8A8A",
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionButton: {
    width: "48%",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ruanganButton: {
    backgroundColor: "#143C5E",
  },
  peralatanButton: {
    backgroundColor: "#3470A2",
  },
  buttonLabel: {
    color: "white",
    fontSize: 12,
  },
  content: {
    marginTop: 20,
  },
  roomCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  mainImage: {
    width: 299,
    height: 186,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 8,
  },
  roomName: {
    color: "#545F71",
    fontSize: 16,
  },
  roomDetails: {
    color: "#545F71",
    fontSize: 10,
    marginTop: 4,
  },
  detailButton: {
    backgroundColor: "#3470A2",
    borderRadius: 6,
    paddingVertical: 5,
    alignItems: "center",
    marginTop: 10,
  },
  detailButtonText: {
    color: "white",
    fontSize: 12,
  },
});
