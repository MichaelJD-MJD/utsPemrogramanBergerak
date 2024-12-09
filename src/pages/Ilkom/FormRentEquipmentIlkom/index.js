import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import arrowLeft from "../../../assets/icons/arrow-left.png";
import formSofa from "../../../assets/images/form-sofa.png";

const FormRentEquipmentIlkom = ({ navigation }) => {
  // State untuk tanggal dan quantity barang
  const [date, setDate] = useState(new Date());
  const [quantity, setQuantity] = useState("");  // State untuk jumlah barang yang akan dipinjam

  const handleSuccessScreen = () => {
    navigation.navigate("SuccessScreen");
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const showDatePicker = () => {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: date,
        mode: "date",
        is24Hour: true,
        onChange: handleDateChange,
      });
    }
  };

  return (
    <View style={styles.container}>
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
        <Text style={styles.faculty}>Fakultas Ilmu Komputer</Text>
      </View>

      {/* Image */}
      <Image source={formSofa} style={styles.image} />

      {/* Form Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tanggal</Text>
        <TouchableOpacity style={styles.inputBox} onPress={showDatePicker}>
          <Text style={styles.inputText}>
            {date.toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </Text>
        </TouchableOpacity>
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

      {/* Form Quantity Barang */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Jumlah Barang</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            value={quantity}
            placeholder="Masukkan jumlah barang"
            placeholderTextColor="#BAC0CA"
            keyboardType="numeric"
            onChangeText={setQuantity}
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
    </View>
  );
};

export default FormRentEquipmentIlkom;

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
