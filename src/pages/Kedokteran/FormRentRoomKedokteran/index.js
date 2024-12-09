import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker"; // Import Picker
import arrowLeft from "../../../assets/icons/arrow-left.png";
import formImage from "../../../assets/images/form-image.png";

const FormRentScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState("1"); // Default durasi 1 jam
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSuccessScreen = () => {
    navigation.navigate("SuccessScreen");
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <ScrollView style={styles.container}>
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

      {/* Form Info */}
      <View style={styles.formInfo}>
        <Text style={styles.formTitle}>Formulir Peminjaman</Text>
        <Text style={styles.faculty}>Fakultas Kedokteran</Text>
      </View>

      {/* Image */}
      <Image source={formImage} style={styles.image} />

      {/* Form Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tanggal</Text>
        <TouchableOpacity
          style={styles.inputBox}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.inputText}>
            {date.toLocaleDateString("en-US")}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
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

       {/* Duration Picker */}
       <View style={styles.inputContainer}>
        <Text style={styles.label}>Durasi Peminjaman (jam)</Text>
        <View style={styles.inputBox}>
          <Picker
            selectedValue={duration}
            onValueChange={(itemValue) => setDuration(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Pilih Durasi" value="" />
            <Picker.Item label="1 Jam" value="1" />
            <Picker.Item label="2 Jam" value="2" />
            <Picker.Item label="3 Jam" value="3" />
            <Picker.Item label="4 Jam" value="4" />
            <Picker.Item label="5 Jam" value="5" />
          </Picker>
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
    </ScrollView>
  );
};

export default FormRentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
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
    width: "100%",
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
  picker: {
    color: "#002649",
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
