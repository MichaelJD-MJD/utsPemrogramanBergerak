import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const ReturningScreen = ({ navigation }) => {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleSuccessScreenReturn = () => {
    navigation.navigate("SuccessScreenReturn");
  };

  const programsByFaculty = {
    Ilkom: ["Informatika", "Sistem Informasi", "Teknologi Informasi"],
    Ekonomi: ["Akuntansi", "Manajemen", "Ekonomi Pembangunan"],
    Teknik: ["Teknik Sipil", "Teknik Elektro", "Teknik Mesin"],
    Hukum: ["Ilmu Hukum"],
    Kedokteran: ["Kedokteran Umum", "Keperawatan"],
    Pertanian: ["Agribisnis", "Agroteknologi"],
  };

  const programOptions =
    selectedFaculty && programsByFaculty[selectedFaculty]
      ? programsByFaculty[selectedFaculty]
      : [];

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    setDate(selectedDate || date);
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
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowDatePicker(true)}
          >
            <Text>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="calendar"
              onChange={handleDateChange}
            />
          )}
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
          <Picker
            selectedValue={selectedRoom}
            onValueChange={(itemValue) => setSelectedRoom(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Pilih Ruangan" value="" />
            <Picker.Item label="Aula Serbaguna Lt.3" value="Aula Serbaguna Lt.3" />
            <Picker.Item label="Advancing Class" value="Advancing Class" />
            <Picker.Item label="Ruang Kelas 4.2" value="Ruang Kelas 4.2" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Fakultas <Text style={styles.asterisk}>*</Text>
          </Text>
          <Picker
            selectedValue={selectedFaculty}
            onValueChange={(itemValue) => {
              setSelectedFaculty(itemValue);
              setSelectedProgram(""); // Reset program ketika fakultas berubah
            }}
            style={styles.picker}
          >
            <Picker.Item label="Pilih Fakultas" value="" />
            <Picker.Item label="Fakultas Ilmu Komputer (Ilkom)" value="Ilkom" />
            <Picker.Item label="Fakultas Ekonomi" value="Ekonomi" />
            <Picker.Item label="Fakultas Teknik" value="Teknik" />
            <Picker.Item label="Fakultas Hukum" value="Hukum" />
            <Picker.Item label="Fakultas Kedokteran" value="Kedokteran" />
            <Picker.Item label="Fakultas Pertanian" value="Pertanian" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Prodi <Text style={styles.asterisk}>*</Text>
          </Text>
          <Picker
            selectedValue={selectedProgram}
            onValueChange={(itemValue) => setSelectedProgram(itemValue)}
            style={styles.picker}
            enabled={!!selectedFaculty} // Nonaktifkan jika fakultas belum dipilih
          >
            <Picker.Item label="Pilih Prodi" value="" />
            {programOptions.map((program, index) => (
              <Picker.Item key={index} label={program} value={program} />
            ))}
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Dokumentasi Kegiatan <Text style={styles.asterisk}>*</Text>
          </Text>
          <TextInput style={styles.input} placeholder="Dokumentasi Kegiatan" multiline />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
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
  picker: {
    width: "100%",
    height: 40,
    borderColor: "#002071",
    borderWidth: 2,
    borderRadius: 4,
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
