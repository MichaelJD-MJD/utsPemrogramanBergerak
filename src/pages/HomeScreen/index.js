import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useRef, useEffect } from "react";

const HomeScreen = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace("MainApp");
  //   }, 3000);
  // }, []);

  const handleListScreen = () => {
    // Navigasi ke HomeScreen setelah login
    navigation.navigate("ListFacultyScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.ellipse}></View>
        <Image
          style={styles.bannerImage}
          source={{ uri: "https://via.placeholder.com/236x220" }}
        />
      </View>

      <View style={styles.frame}>
        <View style={styles.header}>
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Selamat Pagi</Text>
            <Text style={styles.nameText}>Fahmichael Zahkei</Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.bellPin}>
              <Image
                style={styles.bellIcon}
                source={{ uri: "https://via.placeholder.com/22x17" }}
              />
              <View style={styles.notificationDot}></View>
              <View style={styles.notificationInnerDot}></View>
            </View>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Fakultas Ilmu Komputer</Text>
          <Text style={styles.infoText}>Jurusan Sistem Informasi</Text>
        </View>

        <View style={styles.searchBox}>
          <View style={styles.searchIcon}>
            <View style={styles.vector}></View>
          </View>
          <Text style={styles.searchText}>Apa yang kamu cari hari ini</Text>
        </View>
      </View>

      <Text style={styles.categoryText}>Kategori</Text>

      <View style={styles.categoryBox}>
        <View style={styles.categoryItem}></View>
        <View style={styles.categoryItem}></View>
      </View>

      <Text style={styles.transactionText}>Peminjaman</Text>
      <Text style={styles.transactionText}>Pengembalian</Text>

      <Image
        style={styles.itemImage}
        source={{ uri: "https://via.placeholder.com/60x59" }}
      />
      <Image
        style={styles.itemImage}
        source={{ uri: "https://via.placeholder.com/57x48" }}
      />

      {/* Transaction Items */}
      <View style={styles.transactionItem}>
        <View style={styles.transactionImage}></View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionName}>Ruangan 001</Text>
          <Text style={styles.transactionTime}>Kemarin, 10:09</Text>
        </View>
        <Text style={styles.transactionStatus}>Sedang Dipinjam</Text>
      </View>
      <View style={styles.transactionItem}>
        <View style={styles.transactionImage}></View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionName}>Ruangan 002</Text>
          <Text style={styles.transactionTime}>Kemarin, 11:59</Text>
        </View>
        <Text style={styles.transactionStatus}>Sedang Dipinjam</Text>
      </View>
      <View style={styles.transactionItem}>
        <View style={styles.transactionImage}></View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionName}>Ruangan 003</Text>
          <Text style={styles.transactionTime}>Kemarin, 11:59</Text>
        </View>
        <Text style={styles.transactionStatus}>Selesai Antrian</Text>
      </View>
      <View style={styles.transactionItem}>
        <View style={styles.transactionImage}></View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionName}>Ruangan 004</Text>
          <Text style={styles.transactionTime}>Kemarin, 14:49</Text>
        </View>
        <Text style={styles.transactionStatus}>Dalam Antrian</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  banner: {
    width: "100%",
    height: 311,
    backgroundColor: "#3470A2",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "relative",
    overflow: "hidden",
  },
  ellipse: {
    position: "absolute",
    width: 494,
    height: 494,
    left: 166,
    top: 34,
    backgroundColor: "#63ABE6",
    borderRadius: 9999,
  },
  bannerImage: {
    width: 236,
    height: 220,
    position: "absolute",
    left: 225,
    top: 105,
  },
  frame: {
    flexDirection: "column",
    alignItems: "center",
    gap: 35,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  greeting: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  greetingText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  nameText: {
    color: "#FFC727",
    fontSize: 20,
    fontWeight: "800",
  },
  notification: {
    padding: 12,
    backgroundColor: "white",
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  bellPin: {
    position: "relative",
    width: 32,
    height: 30,
  },
  bellIcon: {
    width: 22.27,
    height: 17.5,
    position: "absolute",
    left: 4.86,
    top: 3.75,
  },
  notificationDot: {
    width: 8,
    height: 11.25,
    position: "absolute",
    left: 20,
    top: 26.25,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "#FFC727",
  },
  notificationInnerDot: {
    width: 5.33,
    height: 5,
    position: "absolute",
    left: 21.33,
    top: 5,
    backgroundColor: "#82B3FD",
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: "#82B3FD",
  },
  infoBox: {
    width: 344,
    height: 93,
    backgroundColor: "rgba(255, 255, 255, 0.48)",
    borderRadius: 10,
    backdropFilter: "blur(30px)",
    paddingHorizontal: 20,
    paddingVertical: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  searchBox: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 1000,
    boxShadow: "0px 4px 20px rgba(26, 26, 26, 0.10)",
    borderWidth: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: "relative",
  },
  vector: {
    width: 20.02,
    height: 20.02,
    backgroundColor: "#8A8A8A",
  },
  searchText: {
    color: "#8A8A8A",
    fontSize: 14,
    fontWeight: "500",
  },
  categoryText: {
    color: "#002649",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: 10,
  },
  categoryBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  categoryItem: {
    width: 91,
    height: 89,
    backgroundColor: "#3470A2",
    borderRadius: 10,
    boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.25)",
    borderWidth: 3,
    borderColor: "#3470A2",
    backdropFilter: "blur(40px)",
  },
  transactionText: {
    textAlign: "center",
    color: "#002649",
    fontSize: 14,
    fontWeight: "500",
    textTransform: "capitalize",
    marginTop: 20,
  },
  itemImage: {
    width: 60,
    height: 59,
    marginTop: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  transactionImage: {
    width: 60,
    height: 60,
    backgroundColor: "#3470A2",
    borderRadius: 10,
  },
  transactionDetails: {
    flexDirection: "column",
    marginLeft: 10,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#002649",
  },
  transactionTime: {
    fontSize: 12,
    fontWeight: "400",
    color: "#6B6B6B",
  },
  transactionStatus: {
    fontSize: 12,
    fontWeight: "700",
    color: "#3470A2",
  },
});




