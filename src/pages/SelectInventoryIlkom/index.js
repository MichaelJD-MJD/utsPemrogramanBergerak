import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";

const SelectInventoryIlkom = ({ navigation }) => {
  const handleDetailRoomScreen = () => {
    // Navigasi ke HomeScreen setelah login
    navigation.navigate("DetailRoomScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.searchBox}
          placeholder="Peralatan Apa yang kamu cari hari ini"
        />
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.fakultasText}>Fakultas Ilmu Komputer</Text>
        <Text style={styles.detailsText}>
          Buka detail untuk informasi lebih lanjut
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.actionButton, styles.ruanganButton]}>
          <Text style={styles.buttonLabel}>Ruangan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.peralatanButton]}>
          <Text style={styles.buttonLabel}>Peralatan</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.roomCard}>
          <Text style={styles.roomName}>Ruangan: Advancing Class</Text>
          <Text style={styles.roomDetails}>Lokasi: Kampus Bukit</Text>
          <Text style={styles.roomDetails}>Kapasitas: 50 Orang</Text>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={handleDetailRoomScreen}
          >
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.roomCard}>
          <Text style={styles.roomName}>Ruangan: Aula Serbaguna Lt.3</Text>
          <Text style={styles.roomDetails}>Lokasi: Kampus Indralaya</Text>
          <Text style={styles.roomDetails}>Kapasitas: 75 Orang</Text>
          <TouchableOpacity style={styles.detailButton}>
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.roomCard}>
          <Text style={styles.roomName}>Ruangan: Ruang Kelas 4.2</Text>
          <Text style={styles.roomDetails}>Lokasi: Kampus Bukit</Text>
          <Text style={styles.roomDetails}>Kapasitas: 50 Orang</Text>
          <TouchableOpacity style={styles.detailButton}>
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SelectInventoryIlkom;

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
    backgroundColor: "#3470A2",
  },
  peralatanButton: {
    backgroundColor: "#143C5E",
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
