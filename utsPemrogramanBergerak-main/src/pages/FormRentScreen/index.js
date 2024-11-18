import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

const FormRentScreen = ({ navigation }) => {

    const handleSuccessScreen = () => {
      // Navigasi ke HomeScreen setelah login
      navigation.navigate("SuccessScreen");
    };

    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <View style={styles.searchBox}>
            <Text style={styles.searchText}>Apa yang kamu cari hari ini</Text>
          </View>
        </View>

        {/* Form Info */}
        <View style={styles.formInfo}>
          <Text style={styles.formTitle}>Formulir Peminjaman</Text>
          <Text style={styles.faculty}>Fakultas Ilmu Komputer</Text>
        </View>

        {/* Image */}
        <Image
          source={{ uri: "https://via.placeholder.com/293x178" }}
          style={styles.image}
        />

        {/* Form Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tanggal</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputText}
              placeholder="MM / DD / YYYY"
              placeholderTextColor="#BAC0CA"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Waktu</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputText}
              placeholder="HH : MM"
              placeholderTextColor="#BAC0CA"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tujuan</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputText}
              placeholder="Masukkan tujuan"
              placeholderTextColor="#BAC0CA"
            />
          </View>
        </View>

        {/* Tombol Buat Surat */}
        <TouchableOpacity
          style={styles.createLetterButton}
          onPress={handleSuccessScreen}
        >
          <Text style={styles.createLetterButtonText}>Buat Surat</Text>
        </TouchableOpacity>

        {/* Bottom Navigation - dihapus sesuai permintaan */}
      </View>
    );

}
export default FormRentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#3470A2",
    marginTop: 40,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: "white",
  },
  searchBox: {
    marginLeft: 16,
    backgroundColor: "white",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flex: 1,
  },
  searchText: {
    color: "#8A8A8A",
    fontSize: 14,
  },
  formInfo: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#002649",
  },
  faculty: {
    fontSize: 12,
    color: "#8A8A8A",
    marginTop: 4,
  },
  image: {
    width: 293,
    height: 178,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 16,
  },
  inputContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  label: {
    color: "#002649",
    fontSize: 14,
    marginBottom: 8,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#545F71",
    borderRadius: 6,
    padding: 12,
  },
  inputText: {
    color: "#BAC0CA",
    fontSize: 16,
  },
  createLetterButton: {
    backgroundColor: "#FFC727",
    borderRadius: 6,
    paddingVertical: 12,
    margin: 16,
    alignItems: "center",
  },
  createLetterButtonText: {
    color: "#002649",
    fontSize: 16,
    fontWeight: "bold",
  },
});
