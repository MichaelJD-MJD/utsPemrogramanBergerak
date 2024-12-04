import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ReturningScreen = ({ navigation }) => {
  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleSuccessScreenReturn = () => {
    // Navigasi ke HomeScreen setelah login
    navigation.navigate("SuccessScreenReturn");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={handleBackButton}>
          <Image
            style={styles.arrowIcon}
            source={require("../../assets/icons/arrow-left.png")}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBox}
          placeholder="Apa yang kamu cari hari ini"
        />
      </View>

      {/* Scrollable Content */}
      <ScrollView>
        <Text style={styles.title}>Form Pengembalian</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Nama <Text style={styles.asterisk}>*</Text>
          </Text>
          <TextInput style={styles.input} placeholder="Nama" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            NIM <Text style={styles.asterisk}>*</Text>
          </Text>
          <TextInput style={styles.input} placeholder="NIM" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Hari/Tanggal <Text style={styles.asterisk}>*</Text>
          </Text>
          <TextInput style={styles.input} placeholder="Hari/Tanggal" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Nama Kegiatan <Text style={styles.asterisk}>*</Text>
          </Text>
          <TextInput style={styles.input} placeholder="Nama Kegiatan" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Ruangan Yang Dipinjam <Text style={styles.asterisk}>*</Text>
          </Text>
          <TextInput style={styles.input} placeholder="Ruangan" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Fakultas <Text style={styles.asterisk}>*</Text>
          </Text>
          <TextInput style={styles.input} placeholder="Fakultas" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Prodi <Text style={styles.asterisk}>*</Text>
          </Text>
          <TextInput style={styles.input} placeholder="Prodi" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Dokumentasi Kegiatan <Text style={styles.asterisk}>*</Text>
          </Text>
          <TextInput style={styles.input} placeholder="Dokumentasi Kegiatan" multiline />
        </View>

        <TouchableOpacity style={styles.submitButton}
        onPress={handleSuccessScreenReturn}
        >
          <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 16,
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
  arrowIcon: {
    width: 20,
    height: 20,
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
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181D27",
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  inputContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
  },
  asterisk: {
    color: "#DB0000",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#002071",
    borderWidth: 2,
    borderRadius: 4,
    paddingLeft: 10,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: "#10304A",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 6,
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 16,
  },
  submitText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ReturningScreen;
