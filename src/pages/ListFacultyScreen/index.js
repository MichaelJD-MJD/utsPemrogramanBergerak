import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import React from "react";

const ListFacultyScreen = ({ navigation }) => {

const handleSelectRoomScreen = () => {
  // Navigasi ke HomeScreen setelah login
  navigation.navigate("SelectRoomScreen");
};

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <View style={styles.iconInner}>
                <View style={styles.iconLine} />
                <View style={styles.iconDot} />
                <View style={styles.iconDot} />
              </View>
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <View style={styles.textInputIcon} />
            <Text style={styles.textInputPlaceholder}>
              Fakultas apa yang kamu cari hari ini
            </Text>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Peminjaman Ruangan dan Peralatan</Text>
          <Text style={styles.subtitle}>
            Buka detail untuk informasi lebih lanjut
          </Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        {/* Card Component 1 */}
        <View style={styles.card}>
          <View style={styles.cardInner} />
          <Image
            style={styles.cardImage}
            source={{ uri: "https://via.placeholder.com/66x65" }}
          />
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>Fakultas Ilmu Komputer</Text>
            <Text style={styles.cardLocation}>
              Kampus Indralaya dan Palembang
            </Text>
          </View>
          <View style={styles.detailButton}>
            <Text style={styles.detailButtonText}>Detail</Text>
          </View>
        </View>

        {/* Card Component 2 */}
        <View style={styles.card}>
          <View style={styles.cardInner} />
          <Image
            style={styles.cardImage}
            source={{ uri: "https://via.placeholder.com/66x66" }}
          />
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

        {/* Card Component 3 */}
        <View style={styles.card}>
          <View style={styles.cardInner} />
          <Image
            style={styles.cardImage}
            source={{ uri: "https://via.placeholder.com/66x66" }}
          />
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>Fakultas Hukum</Text>
            <Text style={styles.cardLocation}>
              Kampus Indralaya dan Palembang
            </Text>
          </View>
          <View style={styles.detailButton}>
            <Text style={styles.detailButtonText}>Detail</Text>
          </View>
        </View>

        {/* Card Component 4 */}
        <View style={styles.card}>
          <View style={styles.cardInner} />
          <Image
            style={styles.cardImage}
            source={{ uri: "https://via.placeholder.com/66x66" }}
          />
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>Fakultas Teknik</Text>
            <Text style={styles.cardLocation}>
              Kampus Indralaya dan Palembang
            </Text>
          </View>
          <View style={styles.detailButton}>
            <Text style={styles.detailButtonText}>Detail</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

{/* Card Component 5 */}
<View style={styles.card}>
  <View style={styles.cardInner} />
  <Image
    style={styles.cardImage}
    source={{ uri: "https://via.placeholder.com/66x66" }}
  />
  <View style={styles.cardDetails}>
    <Text style={styles.cardTitle}>Fakultas Kedokteran</Text>
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

export default ListFacultyScreen;

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 844,
    backgroundColor: "white",
    position: "relative",
  },
  headerContainer: {
    height: 98,
    position: "absolute",
    left: 17,
    top: 50,
  },
  inputContainer: {
    width: 356,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    position: "absolute",
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBackground: {
    padding: 10,
    backgroundColor: "#3470A2",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 1px 2px rgba(198, 228, 246, 0.05)",
  },
  iconInner: {
    alignSelf: "stretch",
    display: "flex",
  },
  iconLine: {
    width: 11.67,
    height: 2,
    backgroundColor: "white",
    position: "absolute",
    left: 4.17,
    top: 10,
  },
  iconDot: {
    width: 5,
    height: 5,
    backgroundColor: "white",
    position: "absolute",
    left: 4.17,
  },
  textInputContainer: {
    width: 300,
    height: 46,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "white",
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "#F7F8F8",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  textInputIcon: {
    width: 20,
    height: 20,
    backgroundColor: "#8A8A8A",
  },
  textInputPlaceholder: {
    color: "#8A8A8A",
    fontSize: 14,
    fontFamily: "Outfit",
    fontWeight: "500",
  },
  titleContainer: {
    width: 302,
    height: 38,
    position: "absolute",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    top: 60,
  },
  title: {
    color: "#002649",
    fontSize: 18,
    fontFamily: "Outfit",
    fontWeight: "700",
  },
  subtitle: {
    width: 265,
    color: "#8A8A8A",
    fontSize: 12,
    fontFamily: "Outfit",
    fontWeight: "400",
    lineHeight: 15,
  },
  cardContainer: {
    width: 343,
    height: 678,
    position: "absolute",
    left: 23,
    top: 133,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 358,
    height: 103,
    position: "relative",
  },
  cardInner: {
    width: 358,
    height: 103,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#F7F8F8",
    position: "absolute",
  },
  cardImage: {
    width: 66,
    height: 66,
    borderRadius: 9999,
    position: "absolute",
    left: 14,
    top: 19,
  },
  cardDetails: {
    width: 242,
    height: 79,
    position: "absolute",
    left: 102,
    top: 12,
  },
  cardTitle: {
    color: "#101623",
    fontSize: 18,
    fontFamily: "Outfit",
    fontWeight: "400",
  },
  cardLocation: {
    color: "#717C9F",
    fontSize: 12,
    fontFamily: "Outfit",
    fontWeight: "400",
  },
  detailButton: {
    width: 93,
    height: 28,
    padding: 10,
    backgroundColor: "#3470A2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  detailButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "Poppins",
    fontWeight: "400",
    textTransform: "capitalize",
  },
});
