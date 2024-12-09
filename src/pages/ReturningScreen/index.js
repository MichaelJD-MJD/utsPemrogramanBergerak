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
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker'; // Menggunakan Picker untuk dropdown

const ReturningScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());  // State untuk menyimpan tanggal
  const [selectedRoom, setSelectedRoom] = useState(""); // State untuk menyimpan ruangan
  const [selectedFaculty, setSelectedFaculty] = useState(""); // State untuk menyimpan fakultas
  const [showDatePicker, setShowDatePicker] = useState(false); // State untuk menampilkan date picker

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleSuccessScreenReturn = () => {
    // Navigasi ke SuccessScreenReturn setelah submit
    navigation.navigate("SuccessScreenReturn");
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios' ? true : false);
    setDate(currentDate); // Memperbarui tanggal yang dipilih
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
            style={styles.datePicker}
            onPress={() => setShowDatePicker(true)} // Menampilkan date picker saat tombol ditekan
          >
            <Text>{date.toDateString()}</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange} // Menangani perubahan tanggal
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
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedRoom(itemValue)}
          >
            <Picker.Item label="Pilih Ruangan" value="" />
            <Picker.Item label="Ruang Advancing Class Bukit" value="Ruang Advancing Class Bukit" />
            <Picker.Item label="Aula Serbaguna Lt.3 Indralaya" value="Aula Serbaguna Lt.3 Indralaya" />
            <Picker.Item label="Ruang Kelas 4.2 Bukit" value="Ruang Kelas 4.2 Bukit" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Fakultas <Text style={styles.asterisk}>*</Text>
          </Text>
          <Picker
            selectedValue={selectedFaculty}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedFaculty(itemValue)}
          >
            <Picker.Item label="Pilih Fakultas" value="" />
            <Picker.Item label="Fakultas Ilmu Komputer" value="Fakultas Ilmu Komputer" />
            <Picker.Item label="Fakultas Ekonomi" value="Fakultas Ekonomi" />
            <Picker.Item label="Fakultas Hukum" value="Fakultas Hukum" />
            <Picker.Item label="Fakultas Teknik" value="Fakultas Teknik" />
            <Picker.Item label="Fakultas Kedokteran" value="Fakultas Kedokteran" />
            <Picker.Item label="Fakultas Pertanian" value="Fakultas Pertanian" />
          </Picker>
        </View>


        <TouchableOpacity style={styles.submitButton} onPress={handleSuccessScreenReturn}>
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
  datePicker: {
    width: "100%",
    marginTop: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
  picker: {
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
