import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import fakultasIlkom from "../../assets/images/fakultas-ilkom.png";
import fakultasEkonomi from "../../assets/images/fakultas-ekonomi.png";
import fakultasHukum from "../../assets/images/fakultas-hukum.png";
import fakultasTeknik from "../../assets/images/fakultas-teknik.png";
import fakultasKedokteran from "../../assets/images/fakultas-kedokteran.png";
import fakultasPertanian from "../../assets/images/fakultas-pertanian.png";
import arrowLeft from "../../assets/icons/arrow-left.png";

const ListFacultyScreen = ({ navigation }) => {
  const handleSelectRoomScreen = () => {
    navigation.navigate("SelectRoomScreen");
  };

  const handleSelectRoomIlkom = () => {
    navigation.navigate("SelectRoomIlkom");
  };

  const handleSelectRoomTeknik = () => {
    navigation.navigate("SelectRoomTeknik");
  };

  const handleSelectRoomHukum = () => {
    navigation.navigate("SelectRoomHukum");
  };

  const handleSelectRoomFP = () => {
    navigation.navigate("SelectRoomFP");
  };

  // Menambahkan fungsi untuk Fakultas Kedokteran
  const handleSelectRoomKedokteran = () => {
    navigation.navigate("SelectRoomKedokteran");
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.button} onPress={handleBackButton}>
            <Image style={styles.arrowIcon} source={arrowLeft} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchBox}
            placeholder="Ruangan Apa yang kamu cari hari ini"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Peminjaman Ruangan dan Peralatan</Text>
          <Text style={styles.subtitle}>
            Buka detail untuk informasi lebih lanjut
          </Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Image style={styles.cardImage} source={fakultasIlkom} />
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>Fakultas Ilmu Komputer</Text>
            <Text style={styles.cardLocation}>
              Kampus Indralaya dan Palembang
            </Text>
          </View>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={handleSelectRoomIlkom}
          >
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Image style={styles.cardImage} source={fakultasEkonomi} />
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>Fakultas Ekonomi</Text>
            <Text style={styles.cardLocation}>
              Kampus Indralaya dan Palembang
            </Text>
          </View>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={handleSelectRoomScreen}
          >
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <Image style={styles.cardImage} source={fakultasHukum} />
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>Fakultas Hukum</Text>
            <Text style={styles.cardLocation}>
              Kampus Indralaya dan Palembang
            </Text>
          </View>
          <TouchableOpacity style={styles.detailButton} onPress={handleSelectRoomHukum}>
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
        </View>

        {/* Card 4 */}
        <View style={styles.card}>
          <Image style={styles.cardImage} source={fakultasTeknik} />
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>Fakultas Teknik</Text>
            <Text style={styles.cardLocation}>
              Kampus Indralaya dan Palembang
            </Text>
          </View>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={handleSelectRoomTeknik}
          >
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
        </View>

        {/* Card 5 - Fakultas Kedokteran */}
        <View style={styles.card}>
          <Image style={styles.cardImage} source={fakultasKedokteran} />
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>Fakultas Kedokteran</Text>
            <Text style={styles.cardLocation}>
              Kampus Indralaya dan Palembang
            </Text>
          </View>
          {/* Menambahkan onPress untuk Fakultas Kedokteran */}
          <TouchableOpacity
            style={styles.detailButton}
            onPress={handleSelectRoomKedokteran}  // Memastikan navigasi ke SelectRoomKedokteran
          >
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
        </View>

        {/* Card 6 */}
        <View style={styles.card}>
          <Image style={styles.cardImage} source={fakultasPertanian} />
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>Fakultas Pertanian</Text>
            <Text style={styles.cardLocation}>
              Kampus Indralaya dan Palembang
            </Text>
          </View>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={handleSelectRoomFP}
          >
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ListFacultyScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerContainer: {
    marginBottom: 20,
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    marginRight: 10,
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3470A2",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    height: 46,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "#F7F8F8",
    borderRadius: 23,
    backgroundColor: "white",
    color: "#8A8A8A",
    fontSize: 14,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#002649",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: "#8A8A8A",
    textAlign: "center",
  },
  cardContainer: {
    marginTop: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  cardDetails: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#002649",
  },
  cardLocation: {
    fontSize: 12,
    color: "#8A8A8A",
  },
  detailButton: {
    backgroundColor: "#3470A2",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  detailButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
});